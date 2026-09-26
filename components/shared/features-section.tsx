import { Layers, Palette, ShieldCheck, Zap } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Layers,
    title: "Feature-based architecture",
    description:
      "Routes stay thin in app/ while every domain owns its components, hooks, actions, and types.",
  },
  {
    icon: ShieldCheck,
    title: "Type-safe forms",
    description:
      "React Hook Form with shared Zod schemas, ready to wire up to server actions.",
  },
  {
    icon: Palette,
    title: "Polished UI kit",
    description:
      "shadcn/ui on Base UI with Tailwind CSS v4 and automatic class sorting.",
  },
  {
    icon: Zap,
    title: "Motion included",
    description:
      "Framer Motion animations that honour the reduced-motion preference.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Everything wired up, nothing to rip out
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          The boring parts are already done, so the first commit you ship is
          your own.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <span className="mb-2 inline-flex size-9 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
                <feature.icon aria-hidden="true" className="size-4" />
              </span>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
