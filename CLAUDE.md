# Rules and Guidelines

- For all instructions and commit messages, be extremely concise and sacrifice grammar for the sake of concision

## Workflow rules

- Before implementing any feature create a markdown document that outlines the objective of the feature and defines its implementation in `./DOCS`.
- If the `DOCS` folder does not exist, create it at the root of this project.
- The markdown files should consist of a list of to-do at the bottom each defining the stages of the implementation
- Tick off each to-do as it gets implemented.
- ONLY WORK ON ONE STAGE OF A FEATURE AT A TIME.
- If a feature requires multiple stage be implemented in parallel, request clarification and approval before continuing.
- Ask clarifying questions when implementing large features to ensure understanding of stated retirements

## Stylesheet rule

- Syntax: use BEM when creating classnames - eg. block__element--modifier

## Memory rules

- Use `git status` to check for changes to the source code made outside of your context window.
- Alternatively use `git log`  to view the most recent commits, and check those changed files to refresh your context window

## Git Workflow Rules

- the git cli should be your primary mode of interacting with git and github.
- never work directly on the main/master branch.
- You are only to make commits to the `robo-cowbell` branch.
- You are permitted to pull from the master branch and merge that into the `robo-cowbell` branch.
- For all commits create a summary to-do list in markdown format defining what has been done and what still needs to be done. This list should be informed by the feature documentation used to create that feature located in `./DOCS`

## Svelte Usage Rules

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

On start up run this command
```sh
    claude mcp add -t stdio -s local svelte -- npx -y @sveltejs/mcp
```

### Available Svelte MCP Tools:

#### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

#### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

#### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

#### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
