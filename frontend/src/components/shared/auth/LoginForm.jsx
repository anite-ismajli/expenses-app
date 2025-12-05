import React, { useState } from "react";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import { Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";
import Logo from "@/assets/img/ExpensesAppLogo1.svg";

const formSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    toast("Submitted:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 rounded-md p-4 w-[320px] overflow-x-auto">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-accent-foreground px-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">

        {/* Logo + Back Link */}
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="ExpensesAppLogo" className="w-56 mb-1" />

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

        {/* FORM */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          {/* EMAIL */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-slate-600">
                  Email Address
                </label>

                <input
                  {...field}
                  type="email"
                  placeholder="you@example.com"
                  className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-slate-500 focus:outline-none 
                    ${fieldState.invalid ? "border-red-500" : "border-slate-300"}`}
                />

                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* PASSWORD */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-slate-600">
                  Password
                </label>

                <div className="relative">
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`w-full px-4 py-2 border rounded-xl pr-12 focus:ring-2 focus:ring-slate-500 focus:outline-none
                      ${fieldState.invalid ? "border-red-500" : "border-slate-300"}`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg font-semibold transition"
          >
            <LogIn size={20} />
            Login
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-slate-700 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginForm;