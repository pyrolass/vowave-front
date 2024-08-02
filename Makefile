.DEFAULT_GOAL := run

.PHONY: dev build start lint

dev:
	bun next dev

build:
	bun next build 

start: build
	bun next start

lint:
	bun next lint

open:
	open http://localhost:3001

run: lint open dev
	

