<script lang="ts">
  import {
    PUBLIC_DH,
    PUBLIC_GH,
    PUBLIC_LINKEDIN,
    PUBLIC_TWITTER,
  } from "$env/static/public";

  const tw: string = PUBLIC_TWITTER;
  const dh: string = PUBLIC_DH;
  const linkedin: string = PUBLIC_LINKEDIN;
  const gh: string = PUBLIC_GH;
</script>

<footer class="bg-dh-orange flex h-12 md:px-32">
  <!-- <p>something</p> -->
  <div id="socials" class="m-auto flex w-fit flex-row items-center gap-4">
    <a target="_blank" href={dh}
      ><img style="width: 1.8rem" src="/assets/vectors/dh_logo.svg" alt="" /></a
    >
    <a target="_blank" href={gh}
      ><img style="width: 1.4rem" src="/assets/vectors/github.svg" alt="" /></a
    >
    <a target="_blank" href={linkedin}
      ><img
        style="width: 1.4rem"
        src="/assets/vectors/linkedin.svg"
        alt=""
      /></a
    >
    <a target="_blank" href={tw}
      ><img style="width: 1.4rem" src="/assets/vectors/twitter.svg" alt="" /></a
    >
  </div>
  <!-- <p class="font-sm font-md-tablet weight-bold kern-1">Digital Hippie</p> -->
</footer>
