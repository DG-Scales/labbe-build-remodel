import { ArrowLeft, Facebook, Mail, MessageSquareHeart, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import labbeLogo from "@/assets/labbe/labbe-logo.png";

const reviewLinks = [
  {
    title: "Leave a Google review",
    text: "Share a few kind words about your experience so local homeowners can find a remodeler they can trust.",
    href: "https://www.google.com/search?q=Labbe+Build+Remodel+review",
    label: "Review on Google",
    icon: Star,
  },
  {
    title: "Follow on Facebook",
    text: "Keep up with project updates, craftsmanship, and community work from Labbe Build + Remodel.",
    href: "http://facebook.com/labbehomeimprovement",
    label: "Follow on Facebook",
    icon: Facebook,
  },
  {
    title: "Send a referral",
    text: "Know someone planning a renovation? A thoughtful introduction helps good work reach good people.",
    href: "mailto:kevinlabbe@comcast.net?subject=Referral%20for%20Labbe%20Build%20%2B%20Remodel",
    label: "Email a referral",
    icon: Mail,
  },
];

const Reviews = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border bg-panel-gradient craft-grain">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <img src={labbeLogo} alt="Labbe Build + Remodel logo" className="h-14 w-auto" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-foreground sm:inline">Labbe Build + Remodel</span>
          </Link>
          <Button asChild variant="subtle">
            <Link to="/"><ArrowLeft /> Home</Link>
          </Button>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="reveal-up">
            <p className="mb-4 inline-flex items-center gap-2 border-l-4 border-accent bg-card/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-accent shadow-soft">
              <MessageSquareHeart className="h-4 w-4" /> Share good intentions
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Help good work reach more good homes.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              If Labbe Build + Remodel brought care, craftsmanship, and trust to your project, your review or follow helps the next homeowner feel confident reaching out.
            </p>
          </div>

          <div className="border border-border bg-card p-7 shadow-crafted">
            <div className="flex items-start gap-4">
              <img src={labbeLogo} alt="Labbe Build + Remodel review logo" className="h-20 w-auto rounded-sm bg-background p-2" />
              <div>
                <h2 className="text-3xl font-semibold">Thank you for the support.</h2>
                <p className="mt-3 leading-7 text-muted-foreground">A positive review, follow, or referral is one of the most meaningful ways to support local craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {reviewLinks.map((item) => (
              <article key={item.title} className="border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-crafted">
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

          <div className="mt-12 border border-border bg-primary p-8 text-primary-foreground shadow-crafted sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Prefer to share directly?</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/80">
                  Call or email Kevin with a kind note, project photo, or referral introduction.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <Button asChild variant="hero" size="xl" className="justify-between">
                  <a href="tel:6179539498">Call (617) 953-9498 <Phone /></a>
                </Button>
                <Button asChild variant="subtle" size="xl" className="justify-between">
                  <a href="mailto:kevinlabbe@comcast.net">Email Kevin <Mail /></a>
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