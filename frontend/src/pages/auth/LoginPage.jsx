import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Logo from "@/assets/img/ExpensesAppLogo1.svg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-accent-foreground px-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">

        {/* Logo + Back Link */}
        <div className="flex flex-col items-center mb-6">
          <img 
            src={Logo} 
            alt="ExpensesAppLogo"
            className="w-56 mb-1"
          />

          <Link 
            to="/"
            className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back to Home
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-700 mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-slate-500 text-center mb-8">
          Please log in to continue
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-600">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-600">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:outline-none"
                placeholder="********"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg font-semibold transition"
          >
            <LogIn size={20} />
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-slate-700 font-semibold hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </main>
  );
};

export default LoginPage;