"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { login, register } from "../services/auth_service";
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    // const result = await register(formData);
    // if ("error" in result) {
    //   setError(result.error);
    // } else {
    //   // Successful login
    //   router.push("/initial/home");
    // }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form action={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
          <div>
            Already have an account? <Link href="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
