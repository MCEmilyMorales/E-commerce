"use client";

import Button from "@/components/Button";

export default function LognUp() {
  const lognUp = () => {
    console.log("deberia crear una cuenta");
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center justify-center w-full dark:bg-gray-950">
          Create Account
        </h1>

        <form action="#">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name/s
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 mb-2"
              placeholder="Name/s"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Last Name/s
            </label>
            <input
              type="text"
              id="last-named"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 mb-2"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="birthday"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Birthday
            </label>
            <input
              type="date"
              id="birthday"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 mb-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dato"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Otro dato
            </label>
            <input
              type="text"
              id="dato"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 mb-2"
              placeholder="otros datos"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 mb-2"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 mb-2"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="remember"
              className=" h-4 w-4 rounded border border-gray-300 text-customColor focus:ring-customColor-light
              focus:outline-none"
              defaultChecked={true}
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <div className="flex w-full py-2 px-4 justify-center">
            <Button text="Create account" onClick={lognUp} />
          </div>
        </form>
      </div>
    </div>
  );
}
