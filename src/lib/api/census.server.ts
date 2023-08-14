import createClient from "openapi-fetch";
import type { paths } from "./openapi-census";
import Config from "$lib/config";

export default createClient<paths>({ fetch: fetch, baseUrl: Config.niumside_api_url.toString() });
