<script lang="ts">
  import "../app.postcss";
  import { assets } from "$app/paths";

  const menuItems = [
    { name: "Population", href: "/population" }
  ];
</script>

<header>
  <a href="/"><img src="{assets}/favicon.png" alt="logo" width="50" height="50" /></a>
  <nav>
    {#each menuItems as item}
      <a href="{item.href}">{item.name}</a>
    {/each}
  </nav>
</header>

<main>
  <slot />
</main>

<style lang="postcss">
    header {
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 0.5rem 1rem;
        background: var(--bg-2);
    }

    nav {
        display: flex;
        gap: 1rem;

        a {
            text-decoration: none;
            color: var(--fg-1);
        }

        a:hover {
            text-decoration: underline;
        }
    }

    main {
        padding: 0 0 0 1rem;
    }
</style>
