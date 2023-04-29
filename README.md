# Inventory Manager

This repository contains two applications: a frontend React application called `inventory-fe` and a serverless backend called `serverless-http-api`.

## View Live Demo

[Live demo hosted on Netlify](https://cozy-praline-e3dec4.netlify.app/)

## Features

- Frontend React application (`inventory-fe`) with:
  - Inventory management functionality
  - User-friendly interface
  - Integration with React Query for efficient data fetching and caching
  - Routing using React Router for seamless navigation
  - Styling with TailwindCSS for responsive and customizable UI
  - Vite for quick and easy bundling + HMR
  - TypeScript cause React without TypeScript feels handicapped

- Serverless backend (`serverless-http-api`) with:
  - API endpoints to support inventory management operations
  - Lightweight and scalable architecture using the Serverless framework
  - Easy deployment to various cloud platforms (e.g., AWS Lambda, Azure Functions, Google Cloud Functions)

## Prerequisites

To run the applications locally, you need to have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

```shell
git clone https://github.com/aatishdubey/inventory-manager.git
```

2. Install the dependencies for the frontend application:

```shell
cd inventory-fe
npm install
```

3. Install the dependencies for the backend application:

```shell
cd ../serverless-http-api
npm install
```

## Usage

### Frontend Application (`inventory-fe`)

To start the frontend application dev server, navigate to the `inventory-fe` directory and run the following command:

```shell
npm run dev
```

This will start the development server and the application will be accessible at `http://127.0.0.1:5173/`.

To sign in, use these information:

```username: admin```

```password: Admin#123```

### Backend Application (`serverless-http-api`)

To deploy the backend application to your preferred cloud platform, follow the instructions specific to that platform. However, if you want to deploy it to your AWS account, run the following command.

```shell
serverless deploy
```

Yup, its THAT easy!

## Configuration

### Frontend Application (`inventory-fe`)

You can configure the frontend application by modifying the `src/config.js` file. This file contains variables such as API base URL, authentication settings, and other configuration options.

### Backend Application (`serverless-http-api`)

The backend application can be configured by modifying the `serverless.yml` file. This file contains the serverless framework configuration and allows you to specify cloud provider settings, function triggers, and other deployment options.

## Contributing

Contributions to this repository are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

No license as of yet. Feel free to use.

## Acknowledgements

- [React](https://reactjs.org/)
- [React Query](https://react-query.tanstack.com/)
- [React Router](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Serverless Framework](https://www.serverless.com/)
- [Vite](https://vitejs.dev/)
