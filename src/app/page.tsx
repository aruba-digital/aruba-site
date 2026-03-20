"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] selection:bg-[color:var(--aruba-sand)] selection:text-black font-sans overflow-hidden">
      
      {/* Decorative ultra-minimalist lines */}
      <div className="fixed left-6 top-0 bottom-0 w-[1px] bg-[color:var(--border-subtle)] z-[-1]"></div>
      <div className="fixed right-6 top-0 bottom-0 w-[1px] bg-[color:var(--border-subtle)] z-[-1]"></div>

      {/* NAVBAR */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full bg-[color:var(--background)]/70 backdrop-blur-xl border-b border-[color:var(--border-subtle)] transition-colors duration-300"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center">
            <span className="text-[17px] font-bold tracking-tight text-[color:var(--foreground)] transition-colors cursor-pointer">
              Aruba Digital
            </span>
            <span className="hidden sm:inline-block text-[12px] text-zinc-400 font-semibold ml-4 border-l border-[color:var(--border-subtle)] pl-4">
              Estudio de tecnología
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[12px] font-semibold tracking-wide text-zinc-500 uppercase">
              <a href="#servicios" className="hover:text-[color:var(--foreground)] transition-colors duration-300">Servicios</a>
              <a href="#metodologia" className="hover:text-[color:var(--foreground)] transition-colors duration-300">Metodología</a>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </motion.header>

      <main className="mx-auto max-w-6xl px-6 pb-0 pt-32 relative z-10">
        {/* HERO SECTION */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="py-24 md:py-36 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface)] text-[11px] font-semibold mb-8 tracking-wider text-zinc-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e] dark:bg-white"></span>
            <span>Estándar Corporativo Premium</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-balance text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-[7rem] leading-[1.02] text-[color:var(--foreground)]">
            Ingeniería de software.
            <br />
            <span className="text-zinc-300 dark:text-zinc-700">Diseño absoluto.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="mt-8 text-[19px] md:text-[21px] font-medium leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Somos un estudio boutique. Construimos plataformas web, e-commerce y aplicaciones móviles fusionando rendimiento extremo con minimalismo estratégico.
          </motion.p>
          
          <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center">
            {/* BOTÓN PRIMARY CON HOVER SUAVE */}
            <a
              href="#contacto"
              className="flex h-14 items-center justify-center gap-2 rounded-full border border-[color:var(--foreground)] bg-[color:var(--foreground)] px-8 text-[15px] font-bold text-[color:var(--background)] hover:bg-[color:var(--aruba-sand)] hover:text-[color:var(--foreground)] transition-colors duration-500"
            >
              Iniciar proyecto
            </a>
            <a
              href="#servicios"
              className="group flex h-14 items-center justify-center gap-2 rounded-full border border-[color:var(--border-subtle)] bg-transparent px-8 text-[15px] font-bold text-[color:var(--foreground)] hover:bg-[color:var(--surface-soft)] transition-colors duration-500"
            >
              Descubrir servicios
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-y-1"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </a>
          </motion.div>
        </motion.section>

        {/* SERVICIOS */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          id="servicios" className="mt-16 py-24 border-t border-[color:var(--border-subtle)] relative"
        >
          <motion.div variants={fadeUp} className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--foreground)]">Capacidad técnica</h2>
            <p className="mt-4 text-[17px] text-zinc-500 font-medium max-w-xl mx-auto">Soluciones digitales precisas y listas para la exigencia del mercado comercial.</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Tiendas y Landings",
                desc: "E-commerce perfeccionado para ventas sin fricción. Páginas de aterrizaje de carga ultrarrápida que capturan la atención con micro-interacciones sutiles.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="m9 21 3-9 3 9"/></svg>
              },
              {
                title: "Desarrollo Mobile",
                desc: "Aplicaciones multiplataforma funcionales creadas en React Native o Flutter. Experiencia de usuario nativa, elegante y lista para escalar en las App Stores.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              },
              {
                title: "Sistemas (SaaS)",
                desc: "Creación de dashboards operativos, lógicas de datos protegidas y portales corporativos usando el rigor técnico y la seguridad del sector bancario moderno.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              }
            ].map((srv, i) => (
              <motion.div key={i} variants={fadeUp} className="group flex flex-col p-8 border-l border-[color:var(--border-subtle)] hover:bg-[color:var(--aruba-sand)] hover:text-zinc-900 transition-colors duration-500">
                <div className="h-12 w-12 flex items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-soft)] text-[color:var(--foreground)] mb-6 transition-colors duration-500 group-hover:bg-[color:var(--background)] group-hover:border-[color:var(--foreground)]">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-4">{srv.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-zinc-500 dark:text-zinc-600">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* METODOLOGÍA */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          id="metodologia" className="mt-8 py-24 border-t border-[color:var(--border-subtle)]"
        >
          <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
            <motion.div variants={fadeUp} className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Postura de trabajo.</h2>
              <p className="mt-6 text-zinc-500 text-[16px] font-medium leading-relaxed">No dejamos espacio para la improvisación técnica. Entregamos excelencia arquitectónica desde el día uno.</p>
            </motion.div>
            <div className="lg:w-2/3 flex flex-col md:flex-row gap-10">
               <motion.div variants={fadeUp} className="flex-1 space-y-4">
                  <div className="text-[11px] font-bold text-[color:var(--foreground)] tracking-widest uppercase opacity-40">01</div>
                  <h3 className="text-lg font-bold tracking-tight">Comprensión Absoluta</h3>
                  <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">Analizamos primero tu caso de negocio real para diseñar el flujo exacto que maximice ganancias o elimine fricción.</p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex-1 space-y-4">
                  <div className="text-[11px] font-bold text-[color:var(--foreground)] tracking-widest uppercase opacity-40">02</div>
                  <h3 className="text-lg font-bold tracking-tight">Filosofía Visual</h3>
                  <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">Empleamos proporciones armónicas, animaciones refinadas y contrastes sutiles para transmitir un nivel corporativo envidiable.</p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex-1 space-y-4">
                  <div className="text-[11px] font-bold text-[color:var(--foreground)] tracking-widest uppercase opacity-40">03</div>
                  <h3 className="text-lg font-bold tracking-tight">Stack End-to-End</h3>
                  <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">Infraestructura sólida. Tiempos de respuesta imperceptibles y seguridad implacable usando los frameworks de las grandes tecnológicas.</p>
               </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* CTA & FOOTER - Seamless Editorial Layout */}
      <div className="mt-32 w-full bg-[color:var(--aruba-sand)] text-zinc-900 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-12">
          
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            id="contacto" className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-24"
          >
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">Inicia tu<br />proyecto hoy.</h2>
              <p className="text-[19px] opacity-60 font-medium leading-relaxed max-w-md">Transformamos visiones complejas en plataformas de altísimo nivel. Hablemos de negocios.</p>
            </div>
            
            <div className="mt-12 md:mt-0 flex-shrink-0 relative">
              <a
                href="mailto:contacto@arubadigital.cl"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-10 text-[15px] font-bold text-white hover:bg-transparent hover:text-zinc-900 transition-colors duration-500"
              >
                Contactar al estudio
              </a>
            </div>
          </motion.section>
          
          <footer className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-between text-[13px] font-medium opacity-60">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-[16px] tracking-tight uppercase">Aruba Digital.</span>
            </div>
            <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest">
              <a href="#servicios" className="hover:opacity-100 transition-opacity">Servicios</a>
              <a href="#metodologia" className="hover:opacity-100 transition-opacity">Metodología</a>
            </div>
            <div>
              © {new Date().getFullYear()} Todos los derechos reservados.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
