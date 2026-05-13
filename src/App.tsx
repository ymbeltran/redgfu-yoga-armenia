import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import logoImg from "@/assets/logo.png";
import communityImg from "@/assets/community.jpg";
import ashramImg from "@/assets/ashram.jpg";
import familyImg from "@/assets/family.jpg";
import natureImg from "@/assets/nature.jpg";

const WHATSAPP_URL =
  "https://wa.me/573006185909?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20actividades%20de%20la%20GFU.";

function Btn({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:translate-y-[-1px]";
  const styles =
    variant === "primary"
      ? "bg-accent-green text-white shadow-[0_8px_24px_-8px_var(--accent-green)] hover:shadow-[0_12px_28px_-8px_var(--accent-green)]"
      : "border border-deep-green/20 text-deep-green hover:bg-deep-green hover:text-white";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-24 md:py-32 lg:px-12 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Inicio", "#inicio"],
    ["Quiénes somos", "#quienes"],
    ["Actividades", "#actividades"],
    ["Ashram", "#ashram"],
    ["Contacto", "#contacto"],
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#inicio" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="Red GFU Armenia" className="h-10 md:h-11 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hover:text-deep-green transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-accent-green px-5 py-2 text-sm text-white hover:opacity-90 transition"
        >
          WhatsApp
        </a>
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-deep-green hover:bg-deep-green/5 transition"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-border/50 bg-background/95 backdrop-blur-md ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-foreground/80 hover:text-deep-green border-b border-border/40 last:border-b-0 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-accent-green px-5 py-3 text-sm text-white hover:opacity-90 transition"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const activities = [
    { t: "Yoga", d: "Prácticas para fortalecer el cuerpo, mejorar la flexibilidad, cultivar equilibrio y desarrollar mayor conciencia corporal." },
    { t: "Meditación", d: "Espacios guiados para aquietar la mente, reducir el estrés y desarrollar atención plena." },
    { t: "Desarrollo humano", d: "Talleres y encuentros orientados al autoconocimiento, la gestión emocional y el crecimiento personal." },
    { t: "Actividades familiares", d: "Experiencias para compartir en comunidad y fortalecer vínculos desde el bienestar y la convivencia." },
    { t: "Alimentación consciente", d: "Promoción de hábitos saludables y una relación más consciente con la alimentación." },
    { t: "Encuentros en la naturaleza", d: "Actividades realizadas en el Ashram El Edén, un entorno natural pensado para la conexión, el descanso y la reflexión." },
  ];

  const valores = [
    "La fraternidad humana",
    "La conciencia ecológica",
    "La salud integral",
    "La convivencia armónica",
    "El autoconocimiento",
    "La cultura de paz",
  ];

  const beneficios = [
    "Reducir el estrés y la ansiedad",
    "Encontrar mayor tranquilidad mental",
    "Mejorar su salud física",
    "Recuperar energía y vitalidad",
    "Conectar consigo mismas",
    "Compartir con una comunidad consciente",
    "Aprender herramientas para vivir con mayor bienestar",
  ];

  const ashramItems = [
    "Jornadas de bienestar",
    "Encuentros familiares",
    "Actividades culturales",
    "Prácticas de yoga y meditación",
    "Senderismo contemplativo",
    "Retiros y convivencias",
  ];

  const filosofiaItems = [
    "La conciencia",
    "La salud integral",
    "El respeto por la vida",
    "La fraternidad",
    "El aprendizaje continuo",
    "La conexión con la naturaleza",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-24 px-6 lg:px-12 overflow-hidden"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-natural-green">
              Armenia · Quindío · Colombia
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-deep-green">
              Un espacio para reconectar contigo y vivir con mayor bienestar
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              Yoga, meditación, desarrollo humano y encuentros conscientes en Armenia, Quindío.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              La Red GFU Armenia es un espacio cultural y humano donde cultivamos equilibrio físico, emocional, mental y espiritual a través de prácticas conscientes, actividades grupales y experiencias en comunidad.
            </p>
            <div className="pt-2">
              <Btn>Conoce nuestras actividades</Btn>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-soft-green/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Práctica de yoga en la naturaleza"
              width={1920}
              height={1280}
              className="relative w-full h-[60vh] md:h-[75vh] object-cover rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(11,59,46,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* QUÉ ES LA RED GFU */}
      <Section id="quienes" className="bg-beige">
        <div className="grid gap-16 md:grid-cols-2 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-natural-green">
              Quiénes somos
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-deep-green leading-tight">
              ¿Qué es la Red GFU?
            </h2>
            <p className="mt-4 text-lg text-natural-green font-serif italic">
              Una red internacional dedicada al desarrollo humano
            </p>
            <img
              src={communityImg}
              alt="Comunidad meditando en círculo"
              loading="lazy"
              width={1600}
              height={1200}
              className="mt-10 w-full h-80 object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              La Red GFU es una organización cultural y humanista presente en distintos países del mundo, orientada al desarrollo integral del ser humano a través de la educación, la cultura, la salud y la convivencia consciente.
            </p>
            <p>
              En Armenia, nuestra sede ofrece espacios de aprendizaje, práctica y encuentro para personas de todas las edades que desean mejorar su calidad de vida y cultivar mayor bienestar físico, emocional y mental.
            </p>
            <p className="font-medium text-deep-green pt-2">Promovemos valores como:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {valores.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-green flex-shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ACTIVIDADES */}
      <Section id="actividades">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-natural-green">
            Actividades
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-deep-green leading-tight">
            Espacios para el bienestar y el crecimiento humano
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <div
              key={a.t}
              className="group p-8 rounded-3xl bg-card border border-border/60 hover:border-soft-green/60 hover:shadow-[0_20px_40px_-20px_rgba(11,59,46,0.2)] transition-all duration-500"
            >
              <div className="text-soft-green font-serif text-3xl mb-4">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl text-deep-green mb-3">
                {a.t}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Btn>Quiero información</Btn>
        </div>
      </Section>

      {/* BENEFICIOS */}
      <Section className="bg-beige">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={familyImg}
              alt="Familia compartiendo un momento de bienestar"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full h-[28rem] object-cover rounded-[2rem] shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-natural-green">
              Beneficios
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-deep-green leading-tight">
              Un espacio para volver al equilibrio
            </h2>
            <p className="mt-6 text-foreground/80">Muchas personas llegan buscando:</p>
            <ul className="mt-6 space-y-3">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-green flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-foreground/80 italic">
              Aquí encuentran un espacio cálido, humano y respetuoso para comenzar ese proceso.
            </p>
          </div>
        </div>
      </Section>

      {/* ASHRAM */}
      <Section id="ashram">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-natural-green">
              Sede campestre
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-deep-green leading-tight">
              Ashram El Edén
            </h2>
            <p className="mt-4 text-lg text-natural-green font-serif italic">
              Un espacio rodeado de naturaleza para reconectar contigo
            </p>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              El Ashram El Edén es la sede campestre de la Red GFU Armenia, ubicada en un entorno natural del Quindío pensado para el encuentro humano, la convivencia y el bienestar integral.
            </p>
            <p className="mt-6 text-deep-green font-medium">Allí se realizan:</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {ashramItems.map((it) => (
                <li key={it} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-green flex-shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Es un lugar donde la naturaleza, el silencio y la vida consciente se integran para favorecer el descanso y la reconexión personal.
            </p>
            <div className="mt-8">
              <Btn>Visitar el Ashram</Btn>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-soft-green/20 blur-2xl" />
            <img
              src={ashramImg}
              alt="Ashram El Edén rodeado de naturaleza"
              loading="lazy"
              width={1600}
              height={1200}
              className="relative w-full h-[32rem] object-cover rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* FILOSOFÍA */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={natureImg}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep-green/85" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <span className="text-xs uppercase tracking-[0.25em] text-soft-green">
            Filosofía
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Una visión integral del ser humano
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/85">
            Creemos que el bienestar verdadero surge cuando cultivamos equilibrio en todas las dimensiones de nuestra vida: física, emocional, mental, social y espiritual.
          </p>
          <p className="mt-6 text-white/85">
            Por eso promovemos prácticas y espacios que favorezcan:
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filosofiaItems.map((it) => (
              <li
                key={it}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm py-4 px-3 text-white/90 font-serif text-lg"
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EVENTOS */}
      <Section className="bg-sand">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-natural-green">
            Eventos
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-deep-green leading-tight">
            Próximos eventos
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Encuentra espacios de aprendizaje, bienestar y convivencia consciente para compartir en comunidad.
          </p>
          <div className="mt-10">
            <Btn>Reservar mi lugar</Btn>
          </div>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto">
        <div className="rounded-[2.5rem] bg-deep-green text-white p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-soft-green/20 blur-3xl" />
          <div className="relative grid gap-12 md:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-soft-green">
                Contacto
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                Te invitamos a vivir la experiencia GFU
              </h2>
              <p className="mt-6 text-white/80 leading-relaxed max-w-md">
                Ya sea que estés comenzando o lleves tiempo en este camino, aquí encontrarás un espacio abierto para aprender, compartir y cultivar bienestar.
              </p>
              <div className="mt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-green px-7 py-3.5 text-sm font-medium text-white shadow-lg hover:translate-y-[-1px] transition"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-5 text-white/90">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xl">📍</span>
                <div>
                  <div>Carrera 15 #4N-13, Nueva Cecilia</div>
                  <div className="text-white/60 text-sm mt-1">Armenia, Quindío</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xl">📞</span>
                <span>300 618 5909</span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xl">📷</span>
                <span>@yoga_armenia</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border py-10 px-6 text-center text-sm text-muted-foreground">
        <img src={logoImg} alt="Red GFU Armenia" className="mx-auto h-12 w-auto mb-3" />
        <p className="mt-2">© {new Date().getFullYear()} · Armenia, Quindío · Colombia</p>
      </footer>
    </main>
  );
}
