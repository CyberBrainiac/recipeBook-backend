# Mustage Todo - Full Stack Application

## Technologies Used

### Backend

- **NestJS**
- **TypeScript**

### Frontend

- **React**
- **TypeScript**

## Backend Setup

1. **Clone the backend repository**:

   ```bash
   git clone <backend-repo-url>
   ```

2. **Navigate to the backend directory**:

   ```bash
   cd <recipeBook-backend>
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Build and start the server**:

   ```bash
   npm run build
   npm run serve
   ```

   - The server will start on `http://localhost:4202/` by default.
   - .env file ready to use, i add it to repository

---

## Frontend Setup

1. **Clone the frontend repository**:

   ```bash
   git clone <frontend-repo-url>
   ```

2. **Navigate to the frontend directory**:

   ```bash
   cd <recipeBook-frontend>
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Build the frontend**:

   ```bash
   npm run build
   npm run start
   ```



## **Загальний опис завдання:**

# Full-Stack JS engineer test assessment - the **Recipe book**

**Overview**

This documentation provides detailed instructions for completing the test assessment, which involves building two small applications to provide information about recipes. The application includes a Backend (BE) built with Node.js (Nest or Express) and a Frontend (FE) built with React (Next.js is a plus).

### **Project Overview**

### **Backend:**

**Tech Stack:**

- Node.js (Nest.js or Express.js)
- Typescript

**Tasks:**

1. **Endpoint: Get Available Recipes**
    1. Create an API endpoint, using [Recipe API](https://www.themealdb.com/api.php)
    2. This endpoint should support prescription filtering:
        1. **List of All Available Recipes:** `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        2. **List of Recipes Filtered By Ingredient:** `www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
        3. **List of Recipes Filtered By Country:** `www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
        4. **List of Recipes Filtered By Category:** `www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
2. **Endpoint: Get Recipe Info**
    1. Create an API endpoint to retrieve detailed information about a specific recipe `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`

### **Front-end:**

**Tech Stack:**

- React.js
- Typescript
- Next.js (preferred but not mandatory)

**Tasks:**

1. **Recipe List Page**
    1. Display title based on the applied filter
    2. Display a list of recipes fetched from the endpoint (all  recipes by default)
    3. Each recipes item should be clickable and navigate the user to the Recipes Info Page
2. **Recipe Info Page**
    1. Display detailed information about the selected recipe, including:
        1. **Recipe image:** Displayed prominently at the top-left
        2. **Recipe name:** Displayed at the center
        3. **Recipe country:** Displayed under the name, should be clickable and navigate the user to list of recipes (**Recipe List Page)** filtered by country
        4. **Recipe Instructions:** Displayed below at the center
        5. **Recipe Ingredients:**  Displays a list of ingredients, each of which is clickable and navigate the user to a list of recipes (**Recipe List Page)** filtered by ingredient
    2. Right sidebar:
        1. Display the list of recipes of the current recipe category
        2. Should be clickable and navigate the user to list of recipes filtered by category

### Additional Requirements

1. **Styling**:
    1. You can use any CSS framework or custom styles to design the components.
    2. Ensure that the UI is responsive and user-friendly.
2. **Environment Variables**:
    1. Create a `.env` file to store sensitive data such as API keys and base URLs.
    2. Ensure that environment variables are loaded and used securely in the application.
    3. Add `.env` to the repository.
3. **Code Quality**:
    1. Set up ESLint and Prettier to ensure consistent code formatting and quality.
    2. Ensure that all files are properly linted and formatted before submission.
4. **Documentation**:
    1. Include a `README.md` file that provides instructions on how to install, run, and test the application.
    2. Include any necessary setup steps, such as installing dependencies or configuring environment variables.

### **API Documentation**

- **Recipe API:** [Free Recipe API Support](https://www.themealdb.com/api.php)

### **Additional Instructions**

We will be testing your application locally. Please ensure the following:

- **Separate Folders**: Place the frontend (FE) and backend (BE) code in separate folders 
within the root directory. Do not create a monorepo structure.
- **Parallel Execution**: Ensure that both the frontend and backend can be run simultaneously on different ports. The frontend should be able to communicate with the backend without any issues.
- **Instructions for Running**: Provide clear instructions in the README.md file on how to start both the frontend and backend servers, including any necessary environment variables or configurations.

By following these instructions, we will be able to test your application smoothly and verify that both parts work together as expected.
