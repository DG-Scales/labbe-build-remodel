import { ArrowRight, Bath, Brush, Hammer, Home, Mail, MapPin, Phone, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroHome from "@/assets/labbe/hero-home.jpg";
import luxuryKitchen from "@/assets/labbe/luxury-kitchen.jpg";
import bathroomImage from "@/assets/labbe/bathroom.jpeg";
import windowImage from "@/assets/labbe/window.jpeg";
import paintImage from "@/assets/labbe/paint.jpeg";
import labbeLogo from "@/assets/labbe/labbe-logo.png";

const services = [
  { icon: Home, title: "Whole-home remodeling", text: "Thoughtful renovations that transform everyday rooms into durable, comfortable living spaces." },
  { icon: Bath, title: "Kitchens & bathrooms", text: "Detailed updates for the hardest-working rooms in the home, from layout improvements to finish carpentry." },
  { icon: Ruler, title: "Additions & restorations", text: "Careful planning and construction for expanded footprints, restored interiors, and exterior improvements." },
  { icon: Hammer, title: "Custom carpentry", text: "Built-ins, trim, windows, repairs, and detail work finished with a craftsman’s eye." },
];

const values = [
  { image: bathroomImage, title: "Excellence", text: "We build, remodel, renovate, and restore interior and exterior spaces with a clear goal: make every renovation a success." },
  { image: windowImage, title: "Expertise", text: "Every project is completed with high standards and craftsmanship, turning houses into homes and dwellings into castles." },
  { image: paintImage, title: "Professionalism", text: "LBR works to exceed expectations while being a positive influence in the communities we serve." },
];

const areas = ["Boston", "Cambridge", "North Shore", "Swampscott", "Marblehead", "Salem", "Beverly"];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroHome}
          alt="A refreshed home exterior representing Labbe Build + Remodel renovation work"
          className="absolute inset-0 h-full w-full object-cover motion-safe:animate-slow-pan"
        />
        <img
          src={luxuryKitchen}
          alt="Warm luxury kitchen renovation with wood cabinetry and stone counters"
          className="hero-crossfade absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <img src={labbeLogo} alt="Labbe Build + Remodel logo" className="h-16 w-auto drop-shadow-lg" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground sm:inline">Labbe Build + Remodel</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-primary-foreground/85 md:flex">
            <a className="transition hover:text-primary-foreground" href="#services">Services</a>
            <a className="transition hover:text-primary-foreground" href="#about">About</a>
            <a className="transition hover:text-primary-foreground" href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top" className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-16 pt-24 sm:px-8 lg:min-h-[76vh] lg:pb-24">
          <div className="max-w-3xl reveal-up">
            <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-accent bg-card/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
              <ShieldCheck className="h-4 w-4" /> Massachusetts home improvement
            </p>
            <div className="relative min-h-[11rem] sm:min-h-[15rem] lg:min-h-[16rem]">
              <h1 className="hero-crossfade-out absolute inset-0 max-w-3xl text-3xl font-semibold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Soak in the<br />comfort of your<br />new space
              </h1>
              <h1 className="hero-crossfade absolute inset-x-0 top-8 max-w-4xl font-semibold leading-[1.02] text-primary-foreground opacity-0 sm:top-10 sm:text-6xl lg:top-12 lg:text-7xl text-8xl">
                Quality You<br />Can See.<br />Results That Last.
              </h1>
            </div>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-primary-foreground drop-shadow-lg sm:text-xl">
              Labbe Build + Remodel builds, remodels, renovates, and restores homes across greater Boston, Cambridge, and the North Shore.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="tel:6179539498">Call (617) 953-9498 <Phone /></a>
              </Button>
              <Button asChild variant="subtle" size="xl">
                <a href="mailto:kevinlabbe@comcast.net">Email Kevin <Mail /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative border-y border-border bg-card py-20 craft-grain sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">Build · Remodel · Renovate · Restore</p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Detailed work for the spaces that make a house feel like home.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              From full interior renovations to exterior upgrades and custom carpentry, LBR brings steady project management, quality materials, and precise finish work to every home improvement project.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="group border border-border bg-background/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-crafted">
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">About us</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Locally owned, carefully operated, and built around trust.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Labbe Build + Remodel is a locally owned and operated home improvement company specializing in all areas of home renovation throughout Massachusetts.
            </p>
          </div>
          <div className="grid gap-5">
            {values.map((value, index) => (
              <article key={value.title} className="grid overflow-hidden border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-crafted sm:grid-cols-[220px_1fr]" style={{ animationDelay: `${index * 110}ms` }}>
                <img src={value.image} alt={`${value.title} remodeling example`} className="h-64 w-full object-cover sm:h-full" loading="lazy" />
                <div className="p-7 sm:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-accent">
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
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">Service area</p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Serving greater Boston, Cambridge, and the North Shore.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <span key={area} className="inline-flex items-center gap-2 border border-border bg-card/80 px-4 py-3 text-sm font-semibold shadow-soft">
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/70">Get in touch</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Ready to talk through your next renovation?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/82">
              Share what you want to build, remodel, renovate, or restore, and start the conversation with Labbe Build + Remodel.
            </p>
          </div>
          <div className="border border-primary-foreground/20 bg-primary-foreground/8 p-7 shadow-crafted backdrop-blur">
            <img src={labbeLogo} alt="Labbe Build + Remodel contact logo" className="mb-7 max-h-28 w-auto rounded-sm bg-card p-3" loading="lazy" />
            <div className="space-y-4">
              <Button asChild variant="hero" size="xl" className="w-full justify-between">
                <a href="tel:6179539498">(617) 953-9498 <Phone /></a>
              </Button>
              <Button asChild variant="subtle" size="xl" className="w-full justify-between">
                <a href="mailto:kevinlabbe@comcast.net">kevinlabbe@comcast.net <ArrowRight /></a>
              </Button>
              <Button asChild variant="subtle" size="xl" className="w-full justify-between">
                <a href="http://facebook.com/labbehomeimprovement" target="_blank" rel="noreferrer">Facebook page <Brush /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;