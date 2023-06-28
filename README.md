# Task Overview
This web application allows users to view a list of accounts along with their corresponding Name, Profit & Loss, and Account Type. The application fetches data from two API endpoints. The goal of this web application is to:
- [ ] Display a list of accounts to the user.
- [ ] Each account entry should include the Name, Profit & Loss, and Account Type
- [ ] Fetch data from the provided API endpoints
- [ ] Ensure that the user is always aware when data is being loaded, using indicators such as spinners or placeholder content. 
- [ ] Include at least one test in the solution.

Additionaly the dev added:
- [ ] Ability to sort and filter accounts by name
- [ ] Ability to create (only to cache) a simple demo account by providing the name and account type
- [ ] Ability to delete (only from cache) the account

## Helpful links:
- [Repository on Codesandbox](https://codesandbox.io/p/github/rafalmoneta/ig-accounts/main) - But you need to update your env variables. In left top corner, click on the square (menu) and navigate to the Project Settings -> Variables and put required variables (use example.env to know which variables you need)
- [Deployed live version of application](https://rafalmoneta.github.io/ig-accounts/)

## Technologies and Tools
- React: React is a popular JavaScript library for building user interfaces. It allows for efficient and reusable component-based development, making it ideal for creating interactive web applications.

- Vite: Vite is a fast build tool that leverages modern JavaScript features to provide near-instantaneous development server startup and fast builds. It offers a great developer experience and optimizes the application's performance.

- React Query: React Query is a data-fetching library for React applications. It simplifies the management of remote data fetching, caching, and synchronization with the UI, making it easier to handle API requests and manage application state.

- Axios: Axios is a widely-used JavaScript library for making HTTP requests from the browser. It provides an easy-to-use interface to communicate with APIs and handle response data.

- TanStack Table: TanStack Table is a React component library for building tables and grids. It provides a set of powerful features, such as sorting, pagination, and filtering, which are essential for displaying tabular data effectively.

- @testing-library/react: The Testing Library is a set of utilities for testing React components in a way that resembles how they are used by end users. It provides a simple and intuitive API for interacting with components and making assertions about their behavior.

## Running the Application
To run the application locally, follow these steps:

1. Clone the repository from the provided GitHub link.
2. Install the project dependencies by running the following command in your terminal:
```shell
yarn install
```
3. Create a .env file in the project root directory by following `example.env`:
4. Start the development server with the following command:
```shell
yarn dev
```
5. Open your browser and navigate to http://localhost:3000 to see the application.

## Testing
The application includes a few small tests to ensure its functionality. To run the tests, execute the following command:

```shell
yarn run test
```
