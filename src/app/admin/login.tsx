"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

interface AdminLoginProps {
  onLoginSuccess: (token: string) => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setStatus("loading");
    setErrorMessage("");

    const mockToken = "mock_admin_token_yash_vijay";
    setStatus("success");
    sessionStorage.setItem("admin_token", mockToken);

    setTimeout(() => {
      onLoginSuccess(mockToken);
    }, 1000);
  };

  const bgGridStyle = {
    backgroundSize: "40px 40px",
    backgroundImage: `
      linear-gradient(to right, rgba(153, 143, 143, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(153, 143, 143, 0.03) 1px, transparent 1px)
    `,
  };

  const luminaCardStyle = {
    background: "rgba(29, 27, 26, 0.7)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(153, 143, 143, 0.1)",
  };

  const glowOrangeStyle = {
    boxShadow: "0 0 20px rgba(244, 108, 56, 0.2)",
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative p-6 bg-[#151312] text-[#e7e1df]"
      style={bgGridStyle}
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#F46C38]/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-[#C5FF41]/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Login Container */}
      <main className="w-full max-w-[440px] z-10">
        {/* Logo Area */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 rounded-xl bg-[#2c2928] flex items-center justify-center border border-[#998F8F]/20 mb-4">
            <span className="font-bold text-2xl text-[#F46C38] tracking-tighter">YV</span>
          </div>
          <h1 className="text-3xl font-semibold text-[#e7e1df] tracking-tight">Super Admin</h1>
          <p className="text-sm text-[#998F8F] mt-2">Manage the digital ecosystem of Yash Vijay</p>
        </div>

        {/* Login Card */}
        <div 
          className="p-8 rounded-xl shadow-2xl relative overflow-hidden"
          style={luminaCardStyle}
        >
          {/* Accent Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#F46C38]"></div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="flex items-center gap-2 p-3 bg-red-950/40 border border-red-500/20 text-red-400 rounded-lg text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#e0c0b5] block" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#998F8F] w-5 h-5" />
                <input 
                  className="w-full bg-[#1d1b1a] border border-[#998F8F]/20 rounded-lg py-3.5 pl-12 pr-4 text-[#e7e1df] text-base focus:outline-none focus:border-[#F46C38] focus:ring-1 focus:ring-[#F46C38]/50 transition-all placeholder:text-[#998F8F]/40" 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@yashvijay.dev" 
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#e0c0b5] block" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#998F8F] w-5 h-5" />
                <input 
                  className="w-full bg-[#1d1b1a] border border-[#998F8F]/20 rounded-lg py-3.5 pl-12 pr-12 text-[#e7e1df] text-base focus:outline-none focus:border-[#F46C38] focus:ring-1 focus:ring-[#F46C38]/50 transition-all placeholder:text-[#998F8F]/40" 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#998F8F] hover:text-[#e7e1df] transition-colors" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              className={`w-full text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] transition-all mt-2 cursor-pointer ${
                status === "success" 
                  ? "bg-[#C5FF41] !text-[#151312]" 
                  : "bg-[#F46C38]"
              }`}
              style={status !== "success" ? glowOrangeStyle : undefined}
              type="submit"
              disabled={status === "loading" || status === "success"}
            >
              {status === "idle" && (
                <>
                  Sign In to Portal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
              {status === "loading" && (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </div>
              )}
              {status === "success" && (
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle className="w-5 h-5 text-[#151312]" />
                  Access Granted
                </div>
              )}
              {status === "error" && (
                <>
                  Try Again
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
