import { ArrowLeft, Facebook, Mail, MessageSquareHeart, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tmdLogo from "@/assets/tmd/tmd-logo.jpg";

const reviewLinks = [
  {
    title: "Leave a 5-star Google review",
    text: "If we earned your trust, a 5-star review and a few kind words help other homeowners find a remodeler they can rely on.",
    href: "https://www.google.com/search?q=TMD+Remodeling+review",
    label: "Leave 5 stars",
    icon: Star,
  },
  {
    title: "Follow us on Facebook",
    text: "See project photos, before/afters, and updates from the TMD Remodeling crew.",
    href: "https://facebook.com/",
    label: "Follow on Facebook",
    icon: Facebook,
  },
  {
    title: "Send a referral",
    text: "Know someone planning a renovation? A quick introduction means the world to a small local business.",
    href: "mailto:devanx08@gmail.com?subject=Referral%20for%20TMD%20Remodeling",
    label: "Email a referral",
    icon: Mail,
  },
];

const Reviews = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border bg-panel-gradient">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <img src={tmdLogo} alt="TMD Remodeling logo" className="h-12 w-12 rounded-md object-cover" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-foreground sm:inline">TMD Remodeling</span>
          </Link>
          <Button asChild variant="subtle">
            <Link to="/"><ArrowLeft /> Home</Link>
          </Button>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="reveal-up">
            <p className="mb-4 inline-flex items-center gap-2 border-l-4 border-accent bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-accent shadow-soft">
              <MessageSquareHeart className="h-4 w-4" /> Share good intentions
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Loved the work? Leave us 5 stars.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              If TMD Remodeling brought care, craftsmanship, and clear communication to your project, a 5-star review or follow helps the next homeowner feel confident reaching out.
            </p>
            <div className="mt-6 flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-accent" />
              ))}
              <span className="ml-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">5-star service, 5-star reviews</span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-7 shadow-crafted">
            <div className="flex items-start gap-4">
              <img src={tmdLogo} alt="TMD Remodeling logo" className="h-20 w-20 rounded-md object-cover" />
              <div>
                <h2 className="text-3xl font-semibold">Thank you for the support.</h2>
                <p className="mt-3 leading-7 text-muted-foreground">A 5-star review, follow, or referral is one of the most meaningful ways to support local craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {reviewLinks.map((item) => (
              <article key={item.title} className="rounded-lg border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-crafted">
                <item.icon className="mb-6 h-9 w-9 text-accent" />
                <h2 className="text-3xl font-semibold">{item.title}</h2>
                <p className="mt-4 min-h-28 leading-7 text-muted-foreground">{item.text}</p>
                <Button asChild variant="hero" size="lg" className="mt-6 w-full justify-between">
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                    {item.label} <item.icon />
                  </a>
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-border bg-primary p-8 text-primary-foreground shadow-crafted sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Prefer to share directly?</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/80">
                  Call or email TMD with a kind note, project photo, or referral introduction.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <Button asChild variant="hero" size="xl" className="justify-between">
                  <a href="tel:6174802895">Call (617) 480-2895 <Phone /></a>
                </Button>
                <Button asChild variant="subtle" size="xl" className="justify-between">
                  <a href="mailto:devanx08@gmail.com">Email TMD <Mail /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
