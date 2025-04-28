# Mustage Todo - Full Stack Application

## Technologies Used

### Backend

- **NestJS**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

### Frontend

- **React**
- **TypeScript**
- **Redux**
- **Electron**

---

## Project Structure

It is recommended to follow this structure for easier development and deployment:

```
/mustage-todo
  /mustage-front          # Frontend (React + Electron)
  /mustage-back           # Backend (NestJS + Prisma)
  /electron-application   # Optional folder
```

---

## Backend Setup

1. **Clone the backend repository**:

   ```bash
   git clone <backend-repo-url>
   ```

2. **Navigate to the backend directory**:

   ```bash
   cd mustage-back
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create the `.env` file**:

   - Copy the contents of `.env.example` to a new file `.env`.
   - You can keep the default values or update them to match your configuration (e.g., database
     credentials).

5. **Set up PostgreSQL**:

   - Make sure PostgreSQL is running.
   - Edit the connection string in your `.env` file to include your username, password, database
     name, and host.

6. **Generate Prisma client**:

   ```bash
   npx prisma generate
   ```

7. **Push the schema to the database**:

   ```bash
   npx prisma db push
   ```

8. **Build and start the server**:

   ```bash
   npm run build
   npm run serve
   ```

   - The server will start on `http://localhost:4202/` by default.
   - Some test data will be seeded automatically.
   - If you only see green and purple logs in the console, the server has started successfully.

---

## Frontend Setup

1. **Clone the frontend repository**:

   ```bash
   git clone <frontend-repo-url>
   ```

2. **Navigate to the frontend directory**:

   ```bash
   cd mustage-front
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create the `.env` file**:

   - Copy the contents of `.env.example` to `.env`.
   - Adjust the values if needed or keep the defaults.

5. **Build the frontend (optional)**:

   ```bash
   npm run build
   ```

6. **Run the development server (optional)**:
   ```bash
   npm run dev
   ```
   - This will start the app on `http://localhost:4201/`.

---

## Electron Application

1. **To build the desktop installer**:

   - For **Windows**:

     ```bash
     npm run dist:win
     ```

   - For **macOS** (must be on a Mac):
     ```bash
     npm run dist:mac
     ```

2. **Installer Output**:
   - The build will create a `dist_electron` folder containing the installer.
   - You can install the application anywhere, for example, near the frontend and backend folders.

## **Тестове завдання на вакансію Junior Full Stack JavaScript Developer**

## **Загальний опис завдання:**

Необхідно реалізувати настільний додаток для управління задачами, який буде використовувати API для
взаємодії з базою даних. Додаток повинен бути адаптивним і кросплатформеним (працювати на Windows та
Mac OS.)

Дедлайн: 2 дні з моменту отримання.

## **Вимоги до функціоналу:**

1. Отримання списку задач з бази даних через API для взаємодії з базою даних та його відображення в
   інтерфейсі.

2. Створення задачі: користувач повинен мати змогу створювати задачі з заголовком, описом та
   статусом (виконана / не виконана).

3. Редагування задачі: користувач має мати змогу редагувати існуючі задачі, змінювати заголовок,
   опис та статус.

4. Видалення задачі: користувач має мати змогу видаляти задачі.

5. Фільтрація задач: користувач має мати змогу фільтрувати задачі за статусом (виконана / не
   виконана).

6. Пошук по задачам: користувач має мати змогу виконувати пошук по задачам за заголовком або описом.

Збережіть готовий проект в репозиторії на GitHub і надайте детальні інструкції по його запуску в
файлі README.md. Гарний дизайн буде плюсом.

## **Вимоги до стеку технологій:**

Front-End: React.js + Electron.js.

Back-End: Node.js + Nest.js.

БД: PostgreSQL.
