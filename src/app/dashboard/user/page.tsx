"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card";
import {
  LocationIcon,
  BookOpenIcon,
  MessageSquareIcon,
  UsersIcon,
  TrendingUpIcon,
  StarIcon,
  CrownIcon,
  SparklesIcon,
  TargetIcon,
  AwardIcon,
  ArrowRightIcon,
  PlayIcon,
  HeartIcon,
  ShieldIcon,
  CompassIcon,
} from "@/components/icons";

export default function UserDashboardPage() {
  return (
    <main className="min-h-screen bg-[#244848] text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1">
          {/* Top bar */}
          <motion.header
            className="flex items-center justify-end gap-3 px-6 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/3.png"
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full ring-2 ring-white/20"
              />
              <div>
                <span className="text-sm font-medium text-white">Amara</span>
                <div className="text-xs text-white/70">Heritage Seeker</div>
              </div>
            </motion.div>
          </motion.header>

          <div className="px-6 pb-20">
            {/* Welcome Section */}
            <motion.section
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <SparklesIcon size={32} className="text-[#F4B942]" />
                </motion.div>
                <div>
                  <h1 className="text-3xl font-semibold text-white/95">Welcome back, Amara! 👋</h1>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[#E9B448]">
                      <CrownIcon size={16} />
                      <span>Heritage Seeker</span>
                    </div>
                    <span className="text-white/40">•</span>
                    <div className="flex items-center gap-2 text-[#9CA3AF]">
                      <TargetIcon size={16} />
                      <span>
                        Afrofeast Score: <span className="text-[#E9B448] font-semibold">78</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Dashboard Grid */}
            <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Journey Progress */}
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card variant="dark" className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-white/90">
                      <LocationIcon size={20} className="text-[#F4B942]" />
                      Your Journey Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/80">Stage 1: Emotional Preparation</span>
                        <span className="text-green-400">✓ Completed</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/80">Stage 2: Cultural Intelligence</span>
                        <span className="text-[#F4B942]">🌺 In Progress</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white/70">
                        <span>Overall Progress</span>
                        <span>20% complete</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-white/20 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#F4B942] to-[#E8A63A] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "20%" }}
                          transition={{ duration: 1, delay: 0.8 }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Continue Reading */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card variant="dark" className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-white/90">
                      <BookOpenIcon size={20} className="text-[#F4B942]" />
                      Continue Reading
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-white/5 p-4 space-y-3">
                      <div className="text-sm text-white/90 font-medium">
                        "Understanding Asante Governance"
                      </div>
                      <div className="text-xs text-white/60">15 min read • Stage 2 content</div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-white/20">
                          <div className="h-2 w-3/4 rounded-full bg-[#F4B942]" />
                        </div>
                        <span className="text-xs text-white/70">75%</span>
                      </div>
                      <Button
                        variant="premium"
                        size="sm"
                        className="w-full"
                        rightIcon={<ArrowRightIcon size={14} />}
                      >
                        Continue Reading
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cultural Consultant */}
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card variant="dark" className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-white/90">
                      <MessageSquareIcon size={20} className="text-[#F4B942]" />
                      Your Cultural Consultant
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Image
                            src="/1.png"
                            alt="consultant"
                            width={48}
                            height={48}
                            className="rounded-full ring-2 ring-[#F4B942]/30"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white/90">Mama Efua</div>
                          <div className="text-xs text-white/60">Accra, Ghana • Cultural Guide</div>
                          <div className="text-xs text-white/70 mt-1">
                            "Ready for your castle visit prep?"
                          </div>
                        </div>
                      </div>
                      <Button variant="success" size="sm" rightIcon={<ArrowRightIcon size={14} />}>
                        Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Community Hub */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card variant="dark" className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-white/90">
                      <UsersIcon size={20} className="text-[#F4B942]" />
                      Community Hub
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-sm text-white/90">
                          <HeartIcon size={16} className="text-pink-400" />
                          Love Hub
                        </div>
                        <div className="text-xs text-white/60 mt-1">
                          "Dating across cultures discussion"
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full bg-white/20 border-2 border-white/30"
                              ></div>
                            ))}
                          </div>
                          <span className="text-xs text-white/70">12 active</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-white border-white/20 hover:bg-white/10"
                        rightIcon={<ArrowRightIcon size={14} />}
                      >
                        Join Conversation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Upgrade + Feedback Section */}
            <motion.section
              className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="md:col-span-2">
                <Card variant="premium" className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-[#1E332F]">
                      <CrownIcon size={24} className="text-[#1E332F]" />
                      Unlock Your Full Heritage Journey
                    </CardTitle>
                    <CardDescription className="text-[#1E332F]/80">
                      Access all 6 stages, the Love Hub, and our service directory.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-[#1E332F]">
                          <ShieldIcon size={16} />
                          <span>Premium Features</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#1E332F]">
                          <CompassIcon size={16} />
                          <span>Guided Experiences</span>
                        </div>
                      </div>
                      <Button
                        variant="default"
                        size="lg"
                        className="bg-[#1E332F] text-white hover:bg-[#2A3A3A]"
                        rightIcon={<ArrowRightIcon size={16} />}
                      >
                        Upgrade to Premium - $29/month
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="warning"
                    size="lg"
                    className="w-full h-16"
                    rightIcon={<ArrowRightIcon size={16} />}
                  >
                    Feedback Collection
                  </Button>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <motion.footer
        className="bg-[#17262A] py-8 text-center text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="mx-auto max-w-6xl px-6 text-sm">
          © 2025 OurRoots.Africa. All rights reserved.
          <div className="mt-1 text-white/50">Your Guided Journey to Ghanaian Heritage.</div>
        </div>
      </motion.footer>
    </main>
  );
}
