import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 py-16 text-center sm:py-20">
        <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          Ready to ship your landing page?
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Start from a template that already builds, formats, and types-checks
          cleanly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<Link href="/login" />}>
            Get started
          </Button>
          <Button size="lg" variant="ghost" render={<Link href="/login" />}>
            Sign in
          </Button>
        </div>
      </div>
    </section>
  );
}
