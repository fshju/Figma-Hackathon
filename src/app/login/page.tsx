"use client"
import { useState } from "react";
import Link from "next/link";

interface FormData {
  name?: string;
  email: string;
  password: string;
}

const App = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setFormData({ name: "", email: "", password: "" });
    setSuccessMessage(null); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup && (!formData.name || !formData.email || !formData.password)) {
      alert("Please fill out all fields.");
      return;
    } else if (!formData.email || !formData.password) {
      alert("Please fill out all fields.");
      return;
    }

    const message = isSignup
      ? "Thanks for signing up!"
      : "Thanks for logging in!";
    setSuccessMessage(message);
  };

  if (successMessage) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-500 to-yellow-300  text-black">
        <h1 className="text-5xl font-bold mb-4">😊</h1>
        <h1 className="text-xl mb-6">{successMessage}</h1>
        <Link href="/">
        <button
          onClick={() => {
            setSuccessMessage(null);
            setFormData({ name: "", email: "", password: "" });
          }}
          
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Go Back
        </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full hover:transition-transform transform hover:-translate-y-3 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                required={isSignup}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={handleToggle}
            className="text-blue-500 underline hover:text-blue-600"
          >
            {isSignup ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default App;
