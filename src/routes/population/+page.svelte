<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>


{#each data.population.data.pop as pop}
  <h2>{pop.world_id}</h2>
  <p>World population: {pop.world_population}</p>
  <table>
    <tr>
      <th>Zone ID</th>
      <th>Zone population</th>
    </tr>
    {#each pop.zones as zone}
      <tr>
        <td>{zone.zone_id}</td>
        <td>{zone.zone_population}</td>
      </tr>
    {/each}
  </table>
{/each}

<style lang="postcss">
    table, th, td {
        border-width: thin;
        border-style: solid;
        border-color: var(--bg-2);
        border-collapse: collapse;
        padding: 0.2rem 0.5rem;
    }

    table {
        th {
            padding: 0.5rem;
            background-color: var(--bg-2);
        }
    }
</style>
