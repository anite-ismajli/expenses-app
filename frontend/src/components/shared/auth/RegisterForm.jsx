import React, { useState } from "react";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import { Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";
import Logo from "@/assets/img/ExpensesAppLogo1.svg";

const formSchema = z
  .object({
    username: z.string().min(2, "Username must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    toast("You submitted:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 rounded-md p-4 w-[320px] overflow-x-auto">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

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
            <ArrowLeft size={18} className="mr-1" />
            Back to Home
          </Link>
        </div>

        {/* Headers */}
        <h1 className="text-4xl font-bold text-blue-700 mb-2 text-center">
          Register Here!
        </h1>
        <p className="text-white text-center mb-8">
          Please register to continue
        </p>

        {/* FORM */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          {/* Username */}
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <label className="block mb-1 text-sm font-medium text-white">
                  Name and Surname
                </label>

                <input
                  {...field}
                  type="text"
                  placeholder="Name & Surname"
                  className={`w-full px-4 py-2 mb-3 border rounded-xl bg-white/20 text-white 
                  placeholder:text-slate-200 focus:ring-2 focus:outline-none ${
                    fieldState.invalid
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white focus:ring-blue-600"
                  }`}
                />

                {fieldState.error && (
                  <p className="text-red-200 text-sm">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <label className="block mb-1 text-sm font-medium text-white">
                  Email Address
                </label>

                <input
                  {...field}
                  type="email"
                  placeholder="you@example.com"
                  className={`w-full px-4 py-2 border rounded-xl bg-white/20 text-white 
                  placeholder:text-slate-200 focus:ring-2 focus:outline-none ${
                    fieldState.invalid
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white focus:ring-blue-600"
                  }`}
                />

                {fieldState.error && (
                  <p className="text-red-200 text-sm">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <label className="block mb-1 text-sm font-medium text-white">
                  Password
                </label>

                <div className="relative">
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className={`w-full px-4 py-2 border rounded-xl bg-white/20 text-white 
                    placeholder:text-slate-200 pr-10 focus:ring-2 focus:outline-none ${
                      fieldState.invalid
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white focus:ring-blue-600"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {fieldState.error && (
                  <p className="text-red-200 text-sm">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Confirm Password */}
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <label className="block mb-1 text-sm font-medium text-white">
                  Retype your password
                </label>

                <div className="relative">
                  <input
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="********"
                    className={`w-full px-4 py-2 border rounded-xl bg-white/20 text-white 
                    placeholder:text-slate-200 pr-10 focus:ring-2 focus:outline-none ${
                      fieldState.invalid
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white focus:ring-blue-600"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-slate-200"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {fieldState.error && (
                  <p className="text-red-200 text-sm">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Register Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 
              bg-purple-600 hover:bg-purple-800 text-white rounded-xl text-lg font-semibold transition"
          >
            <LogIn size={20} />
            Register
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

export default RegisterForm;