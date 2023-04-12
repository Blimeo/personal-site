<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  export let currentPage = "about";
</script>
<Navbar color="none" let:hidden let:toggle>
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >

    ♪ Matthew Ye
    </span>
    
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={currentPage === "about"}>About</NavLi>
    <NavLi href="/projects" active={currentPage === "projects"}>Projects</NavLi>
    <NavLi href="/music" active={currentPage === "music"}>Music</NavLi>
    <NavLi href="/blog">Blog</NavLi>
  </NavUl>
</Navbar>
