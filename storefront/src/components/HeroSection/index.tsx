export const HeroSection = () => {
  return (
    <div className="px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            StoreManager showcase using React + Serverless Backend
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-blue-100 shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              GitHub
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
