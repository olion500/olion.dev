help: ## show help message
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\033[36m\033[0m\n"} /^[$$()% 0-9a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

.PHONY: install
install: ## install node (mise) and npm dependencies
	mise install
	npm install

.PHONY: build
build: ## build dist/ from site/ and PRINCIPLES.md
	npm run build

.PHONY: deploy
deploy: build ## build and deploy dist/ to Cloudflare (run `npx cf auth login` once first)
	npx cf deploy
