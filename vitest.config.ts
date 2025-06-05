import type { ViteUserConfig } from "vitest/config"
import { defineConfig } from "vitest/config"

const config: ViteUserConfig = defineConfig({
	test: {
		include: ["src/**/*.test.ts"],
		coverage: {
			include: ["src/**/*.ts"],
			reporter: ["html-spa", "json-summary", "text"],
		},
	},
})

export default config
