"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card";
import {
  MailIcon,
  LockIcon,
  GoogleIcon,
  FacebookIcon,
  PalmLogo,
  SparklesIcon,
  ShieldIcon,
  UsersIcon,
  CompassIcon,
} from "@/components/icons";

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const message = searchParams.get('message');
    if (message) {
      setSuccessMessage(message);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - redirect to dashboard
        router.push('/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Panel - Hero Section */}
      <motion.section
        className="relative hidden md:flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/landingpage.png"
          alt="Heritage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2D5A5A]/60" />
        <motion.div
          className="z-10 max-w-md text-center px-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="mx-auto mb-7 h-12 w-12 rounded-lg border border-white/20 bg-[#FFF3C4] flex items-center justify-center text-[#2F6C66] shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <PalmLogo size={20} />
          </motion.div>
          <h1 className="text-3xl font-semibold tracking-wide">OurRoots.Africa</h1>
          <h2 className="mt-6 text-lg font-semibold">Welcome Back</h2>
          <p className="mt-4 text-white/85">
            Continue your Ghana heritage journey with personalized guidance and cultural
            connections.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/80">
            <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
              <ShieldIcon size={14} />
              Cultural Heritage
            </motion.span>
            <span className="opacity-60">•</span>
            <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
              <CompassIcon size={14} />
              Guided Journeys
            </motion.span>
            <span className="opacity-60">•</span>
            <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
              <UsersIcon size={14} />
              Expert Support
            </motion.span>
          </div>
        </motion.div>
      </motion.section>

      {/* Right Panel - Login Form */}
      <motion.section
        className="flex items-center justify-center bg-[#F5F6F8]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-full max-w-[420px] px-6 md:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card variant="elevated" className="border-0 shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-[#2F6C66] text-2xl font-semibold flex items-center justify-center gap-2">
                  <SparklesIcon size={24} className="text-[#F4B942]" />
                  Sign In
                </CardTitle>
                <CardDescription className="text-[#8E98A4]">
                  Welcome back to your heritage journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Success Message */}
                {successMessage && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
                    {successMessage}
                  </div>
                )}
                
                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold text-[#7E8893] mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      leftIcon={<MailIcon size={16} />}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <label className="block text-sm font-semibold text-[#7E8893] mb-2">
                      Password
                    </label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      leftIcon={<LockIcon size={16} />}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <label className="inline-flex items-center gap-2 text-[#7E8893] cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#D5DAE0] text-[#F4B942] focus:ring-[#F4B942]"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      Remember me
                    </label>
                    <a href="#" className="text-[#F0AE3F] hover:text-[#E8A63A] transition-colors">
                      Forgot password?
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      loading={isLoading}
                      variant="premium"
                    >
                      Sign In
                    </Button>
                  </motion.div>

                  <motion.div
                    className="relative my-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                  >
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#E5E7EB]" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-[#F5F6F8] px-4 text-sm text-[#9AA5B1]">
                        Or continue with
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-2 gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      className="flex items-center justify-center gap-2"
                    >
                      <GoogleIcon size={18} />
                      Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex items-center justify-center gap-2"
                    >
                      <FacebookIcon size={18} />
                      Facebook
                    </Button>
                  </motion.div>

                  <motion.p
                    className="text-center text-sm text-[#7E8893]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                  >
                    Don't have an account?{" "}
                    <a
                      href="/signup"
                      className="text-[#F0AE3F] hover:text-[#E8A63A] transition-colors font-medium"
                    >
                      Sign up
                    </a>
                  </motion.p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}
