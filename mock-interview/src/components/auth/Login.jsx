import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SignInWithGoogle from "./Signinwithgoogle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully!", { position: "top-center" });
      navigate("/profile");
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
<div className="flex items-center justify-center min-h-screen  font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border-t-4 border-yellow-400"
      >
        <h3 className="text-2xl font-bold text-center mb-6 text-[#012A4A]">
          Login to your Account
        </h3>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email address</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#012A4A] py-2 rounded-lg font-bold uppercase tracking-wide hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          New user?{" "}
          <a
            href="/register"
            className="text-yellow-500 hover:underline font-medium"
          >
            Register Here
          </a>
        </p>

        <div className="mt-6">
          <SignInWithGoogle />
        </div>
      </form>
    </div>
  );
}

export default Login;
