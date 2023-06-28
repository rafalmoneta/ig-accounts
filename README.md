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
- [Repository on Codesandbox](https://codesandbox.io/p/github/rafalmoneta/ig-accounts/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljfv3h66000b3587prmgqa04%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljfv3h66000d35871foqpf30%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B33.61788721939233%252C66.38211278060767%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cljfv3h66000b3587prmgqa04%2522%253A%257B%2522id%2522%253A%2522cljfv3h66000b3587prmgqa04%2522%252C%2522activeTabId%2522%253A%2522cljfw8npq006a35874v9oaujf%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljfv3h66000a3587qf3wiebf%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.env%2522%252C%2522id%2522%253A%2522cljfw8npq006a35874v9oaujf%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522cljfv3h66000d35871foqpf30%2522%253A%257B%2522id%2522%253A%2522cljfv3h66000d35871foqpf30%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522cljfv3vlo00b23587pi1bibig%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522cljfv400i00fv35872v1bs08d%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252Fig-accounts%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cljfv400i00fv35872v1bs08d%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) - But you need to update your env variables. In left top corner, click on the square (menu) and navigate to the Project Settings -> Variables and put required variables (use example.env to know what variables you need)
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
