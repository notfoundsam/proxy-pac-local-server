ALL: install
install:
	docker-compose build
	docker-compose run --rm proxy-pac npm install
	docker-compose up -d
build:
	docker-compose build
	docker-compose run --rm proxy-pac npm install
up:
	docker-compose up -d
stop:
	docker-compose stop
