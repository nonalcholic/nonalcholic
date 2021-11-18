###############################################################################
# Constants
###############################################################################
PROJECT_NAME:=nonalcholic
DOCKERFILE:=docker-compose.yml
DOCKERFILE_DEV:=docker-compose.dev.yml

prune: ## Prune docker zombie images
	yes | docker image prune
.PHONY: prune

up_dev: ## Create and start containers
	docker-compose \
		-f docker-compose.dev.yml \
		-p dev_$(PROJECT_NAME) \
		--env-file .env \
		up \
		-d
.PHONY: up_dev

down_dev: ## Stop and remove dev container, networks
	docker-compose \
		-p dev_$(PROJECT_NAME) \
		down 
.PHONY: down_dev

up: ## Make image and run
	docker-compose \
		-f docker-compose.yml \
		-p $(PROJECT_NAME) \
		--env-file .env \
		up \
		-d
.PHONY: up

down: ## Stop and remove container, networks
	docker-compose \
		-p $(PROJECT_NAME) \
		down 
.PHONY: down_dev