import createClient from "openapi-fetch";
import type { paths } from "./openapi-niumside";
import { PUBLIC_NIUMSIDE_API_URL } from "$env/static/public";

export default createClient<paths>({
  fetch: fetch,
  baseUrl: PUBLIC_NIUMSIDE_API_URL,
});
