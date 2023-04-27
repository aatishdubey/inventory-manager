import { APP_NAME } from "src/config";

export const HeroSection = () => {
  return (
    <div className="relative px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-xl py-32 sm:py-48 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {APP_NAME} showcase using React + AWS Lambda
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This app is a demo showcase built with React, AWS Lambda, and DynamoDB. The app is styled with TailwindCSS, and uses React Query for data fetching and caching. The frontend app is deployed on Netlify, and the lambda functions are deployed to AWS through the Serverless Framework.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://github.com/aatishdubey/inventory-manager"
              target="_blank"
              className="flex items-center rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-blue-100 shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <img className="mr-1" src="/github.svg" width={16} height={16} />GitHub
            </a>
            <a
              href="#products"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              See Products <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
