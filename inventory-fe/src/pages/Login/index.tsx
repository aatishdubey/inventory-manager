import { TextInput } from "@components/Inputs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCognitoAuth } from "src/hooks/useCognitoAuth";

export const Login = () => {
  const { authenticateUser, userAuth, authErrorMessage, authLoading } =
    useCognitoAuth();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuth.accessToken && !authLoading) {
      navigate("/", { replace: true });
    }
  }, [navigate, userAuth.accessToken, authLoading]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    authenticateUser(username, password);
  };

  return (
    <div
      className="flex flex-col justify-center px-6 py-12 lg:px-8"
      style={{ height: "calc(100vh - 84px)" }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {authErrorMessage && (
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex items-center">
              <img
                className="mr-1"
                src="/alert-circle.svg"
                width={16}
                height={16}
              />
              <div className="ml-3">
                <h3 className="text-sm leading-5 font-medium text-red-800">
                  {authErrorMessage}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <TextInput
                id="username"
                name="username"
                autoComplete="username"
                disableCheckError={["onBlur", "onChange"]}
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <TextInput
                id="password"
                name="password"
                type="password"
                disableCheckError={["onBlur", "onChange"]}
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
