import type { NextPage } from "next";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-4">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl text-primary-purple font-bold text-center mb-4">
            Register
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-primary-purple text-white rounded hover:bg-primary-purple/90"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary-purple">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
