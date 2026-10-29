# CI/CD Setup — GitHub Actions + PM2 + Nginx

## Objective

Three-pipeline CI/CD: a **Build** pipeline that verifies every push, a **Publish** pipeline that auto-deploys to QA after a successful build, and a manually-triggered Prod deploy. The SvelteKit app runs via PM2 (Bun) behind Nginx.

## Pipelines

| Workflow | Trigger | Effect |
| -------- | ------- | ------ |
| `build.yml` | Push to `main` | Checkout → install → build (CI verification only) |
| `publish.yml` `deploy-qa` | `build.yml` succeeds on `main` | Rebuild → rsync to `/var/www/html/qa` → PM2 reload |
| `publish.yml` `deploy-prod` | Manual `workflow_dispatch` → target=prod | Rebuild → rsync to `/var/www/html/prod` → PM2 reload |

`publish.yml` can also be manually triggered with `target=qa` to force a QA redeploy.

## Stack

- Adapter: `@sveltejs/adapter-node` → outputs `build/`
- Runtime: PM2 with Bun interpreter
- Ports: prod `3000`, qa `3001`
- Reverse proxy: Nginx

## One-Time Server Setup (manual)

### 1. Install Bun

```sh
curl -fsSL https://bun.sh/install | bash
```

### 2. Install PM2 + enable on boot

```sh
bun add -g pm2
pm2 startup  # run the printed command with sudo
```

### 3. Deployment directories

```sh
sudo mkdir -p /var/www/html/prod /var/www/html/qa
sudo chown -R $USER:$USER /var/www/html
```

### 4. Runtime environment variables

PM2 processes need private server-side vars at runtime. Set them once by starting each process manually with the env vars exported, then save:

```sh
export SANITY_API_KEY=xxx SANITY_APP_ID=xxx MOONBASE_URL=xxx

PORT=3000 pm2 start /var/www/html/prod/index.js --name planetoxy-prod --interpreter bun
PORT=3001 pm2 start /var/www/html/qa/index.js --name planetoxy-qa --interpreter bun

pm2 save
```

After `pm2 save`, CI deploys only need `pm2 reload` — the saved env is preserved.

### 5. Nginx config

Create `/etc/nginx/sites-available/planetoxy`:

```nginx
# Prod
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# QA
server {
    listen 80;
    server_name qa.your-domain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```sh
sudo ln -s /etc/nginx/sites-available/planetoxy /etc/nginx/sites-enabled/
sudo nginx -t && sudo nginx -s reload
```

### 6. SSL (optional)

```sh
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d qa.your-domain.com
```

### 7. GitHub Environments

Create a `qa` environment in GitHub (repo → Settings → Environments) and mirror the same secrets as `prod`. Optionally add required reviewers on `prod` for manual approval before prod deploys execute.

### 8. Env vars (GitHub `prod` environment secrets)

Build-time (`$env/static/*`, Vite) + runtime (`.env` written on deploy):

| Var | Use |
| --- | --- |
| `PUBLIC_IS_PROD` | prod flag |
| `VITE_SANITY_GQL_API` | houdini GQL endpoint (was `PUBLIC_SANITY_GQL_API`) |
| `PUBLIC_EMAILTO` | contact dialog |
| `PUBLIC_BLOG_REPO` | blog API |
| `PUBLIC_GH`, `PUBLIC_DH`, `PUBLIC_IG`, `PUBLIC_LINKEDIN`, `PUBLIC_TWITTER` | footer/sidebar social links |
| `GITHUB_API_KEY` (secret `GH_API_KEY`) | blog API |
| `SANITY_API_KEY`, `SANITY_APP_ID` | sanity service |
| `MOONBASE_URL`, `HOMEWORLD_URL` | email service |

## To-Do

- [x] Stage 1: Switch adapter to `adapter-node` (`svelte.config.js`, `package.json`)
- [x] Stage 2: Update `ecosystem.config.cjs` (two apps: prod port 3000, qa port 3001)
- [x] Stage 3: Split `build.yml` (CI only) and create `publish.yml` (QA auto + prod manual)
- [x] Stage 4: Update this doc
- [ ] Stage 5 (manual): Install Bun + PM2, create deployment dirs, configure Nginx, seed GitHub `qa` environment secrets
- [x] Stage 6: `build.yml` env sync (`VITE_SANITY_GQL_API`, social `PUBLIC_*`), cache key on `bun.lock`, `--frozen-lockfile`
- [ ] Stage 7: `publish.yml` same + deploy `.env` heredoc sync
- [ ] Stage 8 (manual): add GH secrets `VITE_SANITY_GQL_API`, `PUBLIC_GH`, `PUBLIC_DH`, `PUBLIC_IG`, `PUBLIC_LINKEDIN`, `PUBLIC_TWITTER`; drop old `PUBLIC_SANITY_GQL_API`
- [ ] Stage 9: bun-only — drop `setup-node`, `bun --bun run build` (vite shebang otherwise runs node), pin bun via `packageManager` + `bun-version-file`, job `timeout-minutes: 20`
