"use client";

import { ArrowRight } from "lucide-react";
import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--primary)_0%,transparent_70%)] opacity-10"
      />

      <MotionConfig reducedMotion="user">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            Landing page branch
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Launch your marketing site in minutes
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-lg text-balance text-muted-foreground"
          >
            A production-ready Next.js starter with feature-based architecture,
            a polished UI kit, and motion that already respects your users.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" render={<Link href="/login" />}>
              Get started
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/login" />}>
              Sign in
            </Button>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </section>
  );
}
