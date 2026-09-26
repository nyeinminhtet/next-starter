import Link from "next/link";

const links = [
  { href: "/login", label: "Sign in" },
  { href: "/", label: "Back to top" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Next Starter
        </p>
        <nav className="flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
