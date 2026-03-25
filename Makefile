build:
	docker-compose -f infra/docker-compose.yml build

up:
	docker-compose -f infra/docker-compose.yml up -d

down:
	docker-compose -f infra/docker-compose.yml down

logs:
	docker-compose -f infra/docker-compose.yml logs -f

# Total Reset: Wipes everything including the Database
reset:
	docker-compose -f infra/docker-compose.yml down -v
	docker-compose -f infra/docker-compose.yml up --build -d