<script lang="ts">
  import "./sidebar.css";

  import {
    PUBLIC_DH,
    PUBLIC_GH,
    PUBLIC_IG,
    PUBLIC_LINKEDIN,
  } from "$env/static/public";

  const ig: string = PUBLIC_IG;
  const dh: string = PUBLIC_DH;
  const linkedin: string = PUBLIC_LINKEDIN;
  const gh: string = PUBLIC_GH;
</script>

<div class="sidebar">
  <ul>
    <li>
      <a target="_blank" href={dh} class="!flex items-center gap-3">
        <p
          style="letter-spacing: .1rem;"
          class="text-dh-white hidden text-[0px] font-bold text-nowrap"
        >
          Digital Hippie
        </p>
        <img
          style="scale: 1.5;max-width: 3rem; width: 1.72rem;"
          src="../assets/vectors/dh_logo.svg"
          alt=""
        />
      </a>
    </li>
    <li>
      <a href={gh} target="_blank" class="!flex items-center gap-3">
        <p
          style="letter-spacing: .1rem;"
          class="text-dh-white hidden text-[0px] font-bold text-nowrap"
        >
          Github
        </p>
        <img
          style="scale: 1.6"
          src="/assets/vectors/icons/github120.svg"
          alt=""
        />
      </a>
    </li>
    <li>
      <a href={linkedin} target="_blank" class="!flex items-center gap-3">
        <p
          style="letter-spacing: .1rem;"
          class="text-dh-white hidden text-[0px] font-bold text-nowrap"
        >
          Linkedin
        </p>
        <img src="/assets/vectors/linkedin.svg" alt="" />
      </a>
    </li>
    <li>
      <a href={ig} target="_blank" class="!flex items-center gap-3">
        <p
          style="letter-spacing: .1rem;"
          class="text-dh-white hidden text-[0px] font-bold text-nowrap"
        >
          Instagram
        </p>
        <img
          style="scale: 1.3"
          src="/assets/vectors/icons/instagram120.svg"
          alt=""
        />
      </a>
    </li>
  </ul>
</div>

<style>
  .sidebar {
    display: none;
  }

  @media only screen and (min-width: 730px) {
    .sidebar {
      display: block;
      position: fixed;
      top: 50vh;
      width: fit-content;
      z-index: 999;
    }
    /* .sidebar ul {
    padding: 10px !important;
  } */
    /* .sidebar li:last-child {
    padding-bottom: 0 !important;
  } */
    .sidebar li {
      padding: 10px !important;
      background-color: #e77236 !important;
      width: 2.6em;
      /* width: 2.6vw; */
      /*transition:
        width 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        font-size 0.8s;
      &:hover {
        width: 100%;
        &p {
          display: inline-block;
          font-size: 0.75em;
        }
      }
      &a:hover img {
        width: 4.8vw;
      } */
    }

    .sidebar li a {
      position: relative;
      display: block;
    }

    .sidebar li a img {
      width: 20px !important;
    }
    /* .sidebar__container {
    position: absolute !important;
    height: 100vh !important;
    z-index: 999 !important;
  } */
  }
</style>
