import { defineConfig } from "cf/config";

// Static site only: no Worker code, every request is served from dist/.
export default defineConfig({
	worker: {
		name: "olion-dev",
		compatibilityDate: "2026-10-01",
		domains: ["olion.dev"],
		assets: {
			htmlHandling: "auto-trailing-slash",
			notFoundHandling: "none",
		},
	},
});
