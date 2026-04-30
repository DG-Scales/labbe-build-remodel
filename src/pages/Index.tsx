import { ArrowRight, Bath, Hammer, Home, Mail, MapPin, MessageSquareHeart, Phone, Ruler, ShieldCheck, Sparkles, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroHome from "@/assets/tmd/hero-home.jpg";
import modernKitchen from "@/assets/tmd/modern-kitchen.jpg";
import bathroomImage from "@/assets/tmd/bathroom.jpg";
import livingRoom from "@/assets/tmd/living-room.jpg";
import carpentryImage from "@/assets/tmd/carpentry.jpg";
import tmdLogo from "@/assets/tmd/tmd-logo.jpg";

const services = [
  { icon: Home, title: "Whole-home remodels", text: "End-to-end renovations that modernize layouts, finishes, and the way you use your space." },
  { icon: Bath, title: "Kitchens & bathrooms", text: "Sleek, functional updates with premium materials, smart layouts, and clean finish work." },
  { icon: Ruler, title: "Additions & restorations", text: "Expand your footprint or restore character with careful planning and quality construction." },
  { icon: Hammer, title: "Custom carpentry", text: "Built-ins, trim, doors, and detail work crafted to fit your home perfectly." },
];

const values = [
  { image: bathroomImage, title: "Craftsmanship", text: "Every cut, tile, and fixture is installed with attention to detail. We treat your home like our own." },
  { image: livingRoom, title: "Communication", text: "Clear timelines, honest pricing, and steady updates from first walkthrough to final punch list." },
  { image: carpentryImage, title: "Reliability", text: "We show up on time, finish what we start, and back our work with a craftsman's guarantee." },
];

const areas = ["Salem", "Revere", "Malden", "Everett", "Boston", "Marblehead", "Swampscott", "Danvers", "Peabody"];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroHome}
          alt="Modern home exterior remodeled by TMD Remodeling"
          className="absolute inset-0 h-full w-full object-cover motion-safe:animate-slow-pan"
        />
        <img
          src={modernKitchen}
          alt="Sleek modern kitchen renovation by TMD Remodeling"
          className="hero-crossfade absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <img src={tmdLogo} alt="TMD Remodeling logo" className="h-12 w-12 rounded-md object-cover shadow-crafted" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground sm:inline">TMD Remodeling</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-primary-foreground/85 md:flex">
            <a className="transition hover:text-accent" href="#services">Services</a>
            <a className="transition hover:text-accent" href="#about">About</a>
            <Link className="transition hover:text-accent" to="/reviews">Reviews</Link>
            <a className="transition hover:text-accent" href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top" className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-16 pt-24 sm:px-8 lg:min-h-[76vh] lg:pb-24">
          <div className="max-w-3xl reveal-up">
            <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-accent bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-accent" /> Massachusetts remodeling experts
            </p>
            <div className="relative min-h-[11rem] sm:min-h-[15rem] lg:min-h-[16rem]">
              <h1 className="hero-crossfade-out absolute inset-0 max-w-3xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-7xl text-6xl">
                Modern Spaces.<br />Built To Last.
              </h1>
              <h1 className="hero-crossfade absolute inset-0 max-w-3xl font-bold leading-[1.05] text-primary-foreground opacity-0 sm:text-5xl lg:text-7xl text-6xl">
                Quality You<br />Can See. Results<br />That Last.
              </h1>
            </div>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-primary-foreground/90 drop-shadow-lg sm:text-xl">
              TMD Remodeling builds, remodels, and restores homes across Boston's North Shore — from kitchens and baths to full-home transformations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="tel:6174802895">Call (617) 480-2895 <Phone /></a>
              </Button>
              <Button asChild variant="subtle" size="xl">
                <a href="mailto:devanx08@gmail.com">Email Us <Mail /></a>
              </Button>
              <Button asChild variant="subtle" size="xl">
                <Link to="/reviews">Leave a review <MessageSquareHeart /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative border-y border-border bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Build · Remodel · Restore</p>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Modern remodeling for the way you actually live.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              From full interior renovations to custom carpentry, TMD brings clean project management, premium materials, and precise finish work to every job.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="group rounded-lg border border-border bg-background/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-crafted">
                <service.icon className="mb-6 h-8 w-8 text-accent transition group-hover:scale-110" />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="sticky top-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">About TMD</p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Local crew. High standards. Built around trust.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              TMD Remodeling is a locally owned home improvement company serving the North Shore and greater Boston. We focus on modern design, durable construction, and a smooth experience from quote to keys.
            </p>
          </div>
          <div className="grid gap-5">
            {values.map((value, index) => (
              <article key={value.title} className="grid overflow-hidden rounded-lg border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-crafted sm:grid-cols-[220px_1fr]" style={{ animationDelay: `${index * 110}ms` }}>
                <img src={value.image} alt={`${value.title} remodeling example`} className="h-64 w-full object-cover sm:h-full" loading="lazy" />
                <div className="p-7 sm:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl font-semibold">{value.title}</h3>
                  <p className="mt-4 leading-8 text-muted-foreground">{value.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-panel-gradient py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Service area</p>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Serving the North Shore & greater Boston.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <span key={area} className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 px-4 py-3 text-sm font-semibold shadow-soft">
                  <MapPin className="h-4 w-4 text-accent" /> {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Get in touch</p>
            <h2 className="text-4xl font-bold leading-tight sm:text-6xl">Ready to talk about your next project?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/82">
              Tell us what you want to build, remodel, or restore. We'll walk through it with you and put together an honest plan.
            </p>
          </div>
          <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-7 shadow-crafted backdrop-blur">
            <img src={tmdLogo} alt="TMD Remodeling logo" className="mb-7 h-20 w-20 rounded-md object-cover" loading="lazy" />
            <div className="space-y-4">
              <Button asChild variant="hero" size="xl" className="w-full justify-between">
                <a href="tel:6174802895">(617) 480-2895 <Phone /></a>
              </Button>
              <Button asChild variant="subtle" size="xl" className="w-full justify-between">
                <a href="mailto:devanx08@gmail.com">devanx08@gmail.com <ArrowRight /></a>
              </Button>
              <Button asChild variant="subtle" size="xl" className="w-full justify-between">
                <Link to="/reviews">Leave us a review <Facebook /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
