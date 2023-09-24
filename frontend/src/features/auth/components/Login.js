import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoggedInUser } from '../authSlice';
import { Link, Navigate } from 'react-router-dom';
import { loginUserAsync } from '../authSlice';
import { useForm } from 'react-hook-form';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const user = useSelector(selectLoggedInUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <>
      {user && <Navigate to="/" replace={true}></Navigate>}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="data:image/jpeg;base64,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"
            alt="Dak Ghar Niryat Kendra"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              dispatch(
                loginUserAsync({ email: data.email, password: data.password })
              );
            })}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register('email', {
                    required: 'Email ID is required ',
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: 'Email ID not valid',
                    },
                  })}
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
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
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register('password', {
                    required: 'Password is required ',
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {error && <p className="text-red-500">{error || error.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have you not yet registered? {' '}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
