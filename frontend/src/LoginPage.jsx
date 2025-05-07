import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600 via-transparent to-red-800 animate-pulse opacity-20 z-0"></div>
      <div className="relative z-10 w-full max-w-md p-8 bg-black bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl border border-red-600">
        <h1 className="text-3xl font-bold text-red-500 text-center mb-6 drop-shadow-md animate-pulse">
          SASIYA SONG DOWNLOAD
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="py-3 mt-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-red-400 mt-4">Don't have an account? <a href="#" className="underline">Sign up</a></p>
      </div>
    </div>
  );
}
