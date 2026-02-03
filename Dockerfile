# 1. Беремо офіційний образ Cypress, де вже є Firefox і потрібна версія

FROM cypress/included:12.17.4

# 2. Створюємо папку всередині контейнера, де буде наш код
WORKDIR /app

# 3. Копіюємо package.json та package-lock.json
COPY package*.json ./

# 4. Встановлюємо залежності
RUN npm install

# 5. Копіюємо решту файлів проєкту
COPY . .

# 6. Команда за замовчуванням (запуск у Firefox)
ENTRYPOINT ["npx", "cypress", "run", "--browser", "firefox"]