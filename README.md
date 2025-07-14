# Demo Web App (Vike, TailwindCSS, JWT-based RBAC)

This is a demo web application built with Vike (Vite + SSR), TailwindCSS, and JWT-based Role-Based Access Control (RBAC). It aims to demonstrate the workflow integration between Manus, GitHub, and automated test cases.

## Technologies Used

- **Vike**: A framework for building server-rendered React applications.
- **Vite**: A fast build tool for modern web projects.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.
- **Role-Based Access Control (RBAC)**: To manage user permissions based on their roles.

## Project Structure

```
demo_webapp/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.ts
├── renderer/
│   ├── _default.page.client.ts
│   ├── _default.page.server.ts
│   └── PageShell.tsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

1.  **Install Dependencies**:
    ```bash
    cd demo_webapp
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Workflow Demonstration

This application will demonstrate the following workflow:

1.  **Code Changes**: Manus AI makes changes to the codebase.
2.  **Commit to GitHub**: Changes are committed and pushed to a GitHub repository.
3.  **CI/CD Trigger**: GitHub webhook triggers a Continuous Integration/Continuous Deployment (CI/CD) pipeline.
4.  **Automated Tests**: The CI/CD pipeline runs automated tests (unit, integration, end-to-end).
5.  **Deployment**: If all tests pass, the application is automatically deployed.
6.  **Monitoring**: Manus AI monitors the deployed application and test results.

## RBAC Implementation

-   Users will have different roles (e.g., Admin, Developer, Viewer).
-   Access to certain features or data will be restricted based on the user's role, enforced by JWT in the backend.

## Test Cases

Automated tests will be implemented for both frontend and backend components to ensure code quality and functionality.

