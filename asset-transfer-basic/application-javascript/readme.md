# Клиент для рандомизации эндорсеров

## Требования

- node 14.13.1 или `nvm`
- gcc или аналог
- требования для Test Network (Build test network)

## Сборка

- `cd fabric-samples/asset-transfer-basic/application-javascript`
- `nvm use` или если стоит node 14.13.1, то пропустить
- `npm install` установить зависимости клиента
- `npm run start:all` запустить весь сценарий (сеть, чейнкоды, клиентский скрипт)
- `npm run stop`

## Команды

- `npm run start:all` запустить сеть, установить чейнкоды, запустить клиент
- `npm run init:network` запустить только сеть
- `npm run init:cc` установить чейнкоды на все пиры
- `npm run start` запустить только клиент
- `npm run stop` остановить сеть, удалить контейнеры и почистить все материалы, созданные для работы пиров и клиента
