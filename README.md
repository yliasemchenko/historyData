🛠 Установка и настройка

1.Клонируйте репозиторий:
git clone https://github.com/yliasemchenko/historyData.git
cd historyData

2. В корне проекта создайте файл .env и вставьте в него
API_BASE = 'https://679e2aab946b0e23c062baf1.mockapi.io/data/'

4. Установите зависимости
npm install 

🏗 Запуск в режиме разработки

Запустить проект в режиме разработки можно командой:
npm run start:dev

Приложение будет доступно по адресу http://localhost:3000 

🚀 Запуск в продакшене

🔹 1. Сборка проекта

Перед развертыванием убедитесь, что проект собран:
npm run build:prod

После сборки в директории dist появятся файлы, готовые для деплоя

Запуск production-версии локально
Чтобы проверить работу production-сборки, можно запустить статический сервер. Один из вариантов – использовать пакет serve.

Установите serve (глобально или через npx):
npm install -g serve

или используйте npx:
npx serve -s dist

Запустите сервер:

serve dist

После чего откройте в браузере адрес, указанный в консоли 


