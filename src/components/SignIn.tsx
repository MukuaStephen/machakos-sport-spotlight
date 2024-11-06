import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
            <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission logic here
              // After successful sign in, redirect to profile dashboard
              window.location.href = "/profile";
            }}
            >
            <div>
              <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
              >
              Name
              </label>
              <input
              type="text"
              id="name"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
              htmlFor="schoolId"
              className="block text-sm font-medium text-gray-700"
              >
              School ID
              </label>
              <input
              type="text"
              id="schoolId"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
              htmlFor="sport"
              className="block text-sm font-medium text-gray-700"
              >
              Experience
              </label>
              <select
              id="sport"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              </select>
            </div>
            <div>
              <label
              htmlFor="sport"
              className="block text-sm font-medium text-gray-700"
              >
              Sport Chosen
              </label>
              <select
              id="sport"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
              <option>Football</option>
              <option>Basketball</option>
              <option>Volleyball</option>
              <option>Swimming</option>
              </select>
            </div>
            <div>
              <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
              >
              School Email Address
              </label>
              <input
              type="email"
              id="email"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <Button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
              Sign In
              </Button>
            </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
