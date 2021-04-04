install: #при первом клонирование репозитория
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: #публикация пакета
	npm publish --dry-run

make lint: #запустить eslint
	npx eslint .
