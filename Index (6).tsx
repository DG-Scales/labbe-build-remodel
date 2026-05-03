import { ArrowRight, Bath, Check, Hammer, Home, Mail, MapPin, MessageSquareHeart, Phone, Ruler, ShieldCheck, Star, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroHome from "@/assets/tmd/hero-home.jpg";
import modernKitchen from "@/assets/tmd/modern-kitchen.jpg";
import bathroomImage from "@/assets/tmd/bathroom.jpg";
import livingRoom from "@/assets/tmd/living-room.jpg";
import carpentryImage from "@/assets/tmd/carpentry.jpg";
import tmdLogo from "@/assets/tmd/tmd-logo.png";

const services = [
  { icon: Bath, title: "Kitchens & Bathrooms", text: "Sleek, functional updates with premium materials, smart layouts, and clean finish work." },
  { icon: TreePine, title: "Hardscaping", text: "Paver patios, walkways, fire pits, retaining walls, and outdoor living spaces built to last." },
  { icon: Hammer, title: "Custom Carpentry", text: "Built-ins, trim, doors, decks, and detail work crafted to fit your home perfectly." },
  { icon: Home, title: "Whole-Home Remodels", text: "End-to-end renovations that modernize layouts, finishes, and the way you use your space." },
  { icon: Ruler, title: "Additions & Restorations", text: "Expand your footprint or restore character with careful planning and quality construction." },
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
            <img src={tmdLogo} alt="TMD Remodeling logo" className="h-24 w-auto object-contain drop-shadow-lg sm:h-28 lg:h-32" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground sm:inline">TMD Remodeling</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-primary-foreground/85 md:flex">
            <a className="transition hover:text-accent" href="#services">Services</a>
            <a className="transition hover:text-accent" href="#about">About</a>
            <Link className="transition hover:text-accent" to="/gallery">Gallery</Link>
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
                Your Vision.<br />Our Craft.
              </h1>
              <h1 className="hero-crossfade absolute inset-0 max-w-3xl font-bold leading-[1.05] text-primary-foreground opacity-0 sm:text-5xl lg:text-7xl text-6xl">
                Building The<br />Home You've<br />Always Wanted.
              </h1>
            </div>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-primary-foreground/90 drop-shadow-lg sm:text-xl">
              From the first swing of the hammer to the final coat of paint — TMD Remodeling builds homes you'll be proud of for years to come.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="hero" size="xl">
                <a href="tel:6174802895">Call (617) 480-2895 <Phone /></a>
              </Button>
              <Button asChild variant="subtle" size="xl">
                <a href="mailto:tmdremodeling0227@gmail.com">Email Us <Mail /></a>
              </Button>
              <Button asChild variant="subtle" size="xl">
                <Link to="/reviews">Leave A 5-Star Review <MessageSquareHeart /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip — minimal */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x">
          {[
            { k: "200+", v: "Projects completed" },
            { k: "10+", v: "Towns served" },
            { k: "5★", v: "Average rating" },
            { k: "100%", v: "Licensed & insured" },
          ].map((s) => (
            <div key={s.v} className="px-6 py-10 text-center">
              <div className="text-3xl font-bold text-accent sm:text-4xl">{s.k}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — clean editorial rows */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">What we do</p>
            <h2 className="text-4xl font-bold leading-[1.1] sm:text-5xl">Built For The Way You Live.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Five core services. One crew. From first sketch to final walkthrough.
            </p>
          </div>

          <div className="border-t border-border">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-x-6 border-b border-border py-7 transition sm:grid-cols-[4rem_3rem_1fr_auto] sm:gap-x-8 sm:py-8"
              >
                <div className="font-mono text-sm font-medium text-muted-foreground sm:text-base">
                  0{i + 1}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-accent transition group-hover:bg-accent/10 sm:h-12 sm:w-12">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{service.title}</h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{service.text}</p>
                </div>
                <ArrowRight className="hidden h-5 w-5 text-muted-foreground/40 transition group-hover:translate-x-1 group-hover:text-accent sm:block" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About — simple two column */}
      <section id="about" className="border-t border-border bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="grid grid-cols-2 gap-3">
              <img src={bathroomImage} alt="Bathroom remodel" className="aspect-[3/4] w-full rounded-md object-cover" loading="lazy" />
              <div className="grid gap-3 pt-12">
                <img src={livingRoom} alt="Living room remodel" className="aspect-square w-full rounded-md object-cover" loading="lazy" />
                <img src={carpentryImage} alt="Custom carpentry" className="aspect-square w-full rounded-md object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">About TMD</p>
              <h2 className="text-4xl font-bold leading-[1.1] sm:text-5xl">Local Crew. High Standards. Built Around Trust.</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                TMD Remodeling is a locally owned home improvement company serving the North Shore and greater Boston. Modern design, durable construction, and a smooth experience from quote to keys.
              </p>
              <ul className="mt-10 space-y-6">
                {values.map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">{v.title}</div>
                      <p className="mt-1 leading-7 text-muted-foreground">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service area — minimal chips */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Where we work</p>
          <h2 className="text-4xl font-bold leading-[1.1] sm:text-5xl">Serving The North Shore & Greater Boston.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-accent hover:text-accent">
                <MapPin className="h-3.5 w-3.5" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — centered, clean */}
      <section id="contact" className="border-t border-border bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="mb-6 flex items-center justify-center gap-1 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
          </div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Get in touch</p>
          <h2 className="text-4xl font-bold leading-[1.1] sm:text-5xl">Let's Talk About Your Next Project.</h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/75">
            Tell us what you want to build, remodel, or restore. We'll walk through it and put together an honest plan.
          </p>
          <div className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
            <Button asChild variant="hero" size="xl" className="justify-center">
              <a href="tel:6174802895"><Phone /> (617) 480-2895</a>
            </Button>
            <Button asChild variant="subtle" size="xl" className="justify-center">
              <a href="tel:8574885197"><Phone /> (857) 488-5197</a>
            </Button>
            <Button asChild variant="subtle" size="xl" className="justify-center sm:col-span-2">
              <a href="mailto:tmdremodeling0227@gmail.com"><Mail /> tmdremodeling0227@gmail.com</a>
            </Button>
            <Button asChild variant="subtle" size="xl" className="justify-center sm:col-span-2">
              <Link to="/reviews"><MessageSquareHeart /> Leave A 5-Star Review</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary-foreground/10 bg-primary py-10 text-primary-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <img src={tmdLogo} alt="TMD Remodeling logo" className="h-8 w-auto object-contain" />
            <span>© {new Date().getFullYear()} TMD Remodeling</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition hover:text-accent">Privacy Policy</Link>
            <Link to="/gallery" className="transition hover:text-accent">Gallery</Link>
            <Link to="/reviews" className="transition hover:text-accent">Reviews</Link>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> Licensed & insured · MA</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
