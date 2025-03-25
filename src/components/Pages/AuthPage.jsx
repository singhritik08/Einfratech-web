import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-0">
      <div className="bg-white p-6 sm:p-6 md:p-8 shadow-2xl rounded-3xl w-full max-w-lg sm:max-w-md mx-4 border border-gray-100 transition-all duration-500 mt-3 md:mt-1 hover:shadow-3xl">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-center mb-4 sm:mb-6 text-gray-900 tracking-tight">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form className="space-y-5 sm:space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 sm:p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-base text-gray-800 placeholder-gray-500 transition-all duration-300 hover:border-gray-300"
            required
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-3 sm:p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-base text-gray-800 placeholder-gray-500 transition-all duration-300 hover:border-gray-300"
              required
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 sm:p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-base text-gray-800 placeholder-gray-500 transition-all duration-300 hover:border-gray-300"
            required
          />
          {!isSignUp && (
            <a
              href="#"
              className="text-blue-500 text-sm sm:text-sm float-right hover:underline transition duration-200 font-medium"
            >
              Forgot Password?
            </a>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 sm:py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 text-base sm:text-base font-semibold shadow-lg hover:shadow-xl"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm sm:text-sm mt-2 md:mt-4 sm:mt-6">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:underline font-semibold transition duration-200"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
        <div className="flex items-center justify-center mt-2 md:mt-4 sm:mt-6">
          <div className="w-10 sm:w-12 h-px bg-gray-300"></div>
          <span className="mx-3 sm:mx-4 text-gray-500 text-sm sm:text-sm font-medium">
            Or
          </span>
          <div className="w-10 sm:w-12 h-px bg-gray-300"></div>
        </div>
        <div className="space-y-3 sm:space-y-3 mt-2 md:mt-4 sm:mt-6">
          <button className="w-full flex items-center justify-center bg-blue-600  text-white py-3 sm:py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 text-base sm:text-base font-semibold shadow-md hover:shadow-lg">
            <FaFacebook className="mr-2 sm:mr-2 text-xl sm:text-xl" /> Login with
            Facebook
          </button>
          <button className="w-full flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-3 sm:py-3 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 text-base sm:text-base font-semibold shadow-md hover:shadow-lg border border-gray-200">
            <FaGoogle className="mr-2 sm:mr-2 text-xl sm:text-xl" /> Login with
            Google
          </button>
        </div>
      </div>
    </div>
  );
}