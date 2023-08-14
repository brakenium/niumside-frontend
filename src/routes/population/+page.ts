import niumside from "$lib/api/niumside";
import type { PageLoad } from "./$types";

export const load = (async () => {
  let pop_data = await niumside.GET("/api/population", {
    params: {}
  });

  return {
    population: pop_data,
  };
}) satisfies PageLoad;
