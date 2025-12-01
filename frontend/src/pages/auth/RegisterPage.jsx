import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, LogIn } from 'lucide-react';
import Logo from "@/assets/img/ExpensesAppLogo1.svg";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-accent-foreground px-6">
      <div className="w-full max-w-md bg-blue-300 shadow-xl rounded-3xl p-8">

        {/* Logo & Back */}
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="ExpensesAppLogo" className="w-56 mb-1" />

          <Link
            to="/"
            className="inline-flex items-center text-sm text-white hover:text-slate-200"
          >
            <ArrowLeft size={18} className="mr-1" /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-700 mb-2 text-center">
          Register Here!
        </h1>
        <p className="text-white text-center mb-8">
          Please register to continue
        </p>

        {/* FORM */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Name and Surname
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mb-3 border border-white rounded-xl 
                         focus:ring-2 focus:ring-blue-600 focus:outline-none
                         placeholder:text-slate-200 bg-white/20 text-white"
              placeholder="Name & Surname"
            />

            {/* Email */}
            <label className="block mb-1 text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-white rounded-xl 
                         focus:ring-2 focus:ring-blue-600 focus:outline-none
                         placeholder:text-slate-200 bg-white/20 text-white"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-white rounded-xl 
                           focus:ring-2 focus:ring-blue-600 focus:outline-none
                           placeholder:text-slate-200 bg-white/20 text-white"
                placeholder="********"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 
                           text-white hover:text-slate-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Retype your password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-white rounded-xl 
                           focus:ring-2 focus:ring-blue-600 focus:outline-none
                           placeholder:text-slate-200 bg-white/20 text-white"
                placeholder="********"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 
                           text-white hover:text-slate-200"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 
                       bg-purple-600 hover:bg-purple-800
                       text-white rounded-xl text-lg font-semibold transition"
          >
            <LogIn size={20} /> Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white mt-6">
          You already have an account?{" "}
          <Link to="/login" className="text-blue-800 font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;