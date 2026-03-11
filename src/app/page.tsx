import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <header className="sticky top-0 z-20 border-b border-[color:var(--border-subtle)] bg-[color:var(--surface)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_20%_0%,var(--aruba-yellow),var(--aruba-blue))] text-sm font-semibold">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">
                Aruba Digital
              </span>
              <span className="text-xs text-zinc-500">
                Estudio de tecnología
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-5 text-xs font-medium text-zinc-500 sm:flex">
              <a href="#servicios" className="hover:text-[color:var(--foreground)]">
                Servicios
              </a>
              <a href="#productos" className="hover:text-[color:var(--foreground)]">
                Productos
              </a>
              <a href="#clientes" className="hover:text-[color:var(--foreground)]">
                Clientes
              </a>
              <a href="#labs" className="hover:text-[color:var(--foreground)]">
                Labs
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-[color:var(--border-subtle)] px-3 py-1 text-[11px] text-[color:var(--foreground)] hover:border-[color:var(--accent-strong)]"
              >
                Hablemos
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:pt-14">
        <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
              Marcas · Productos · Experimentos
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-[2.4rem]">
              Tecnología para marcas,
              <span className="text-[color:var(--accent-strong)]">
                {" "}
                productos
              </span>{" "}
              y nuevos
              experimentos digitales.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-zinc-600 dark:text-zinc-300">
              Aruba Digital es el espacio donde viven tus marcas activas, como
              Florería Violeta, productos como{" "}
              <span className="font-semibold">Luna Finanzas Digitales</span> y
              proyectos que exploran nuevas fuentes de ingreso.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-2 text-xs font-semibold text-white hover:bg-[color:var(--accent-strong)]"
              >
                Iniciar un proyecto
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface)] px-5 py-2 text-xs font-semibold text-[color:var(--foreground)] hover:border-[color:var(--accent-strong)]"
              >
                Ver productos
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-zinc-500">
              <span className="rounded-full border border-[color:var(--border-subtle)] px-2 py-1">
                Marcas propias
              </span>
              <span className="rounded-full border border-[color:var(--border-subtle)] px-2 py-1">
                Productos digitales
              </span>
              <span className="rounded-full border border-[color:var(--border-subtle)] px-2 py-1">
                Tiendas online
              </span>
              <span className="rounded-full border border-[color:var(--border-subtle)] px-2 py-1">
                Sistemas a medida
              </span>
            </div>
          </div>

          <aside className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
            <div className="mb-3 flex justify-end gap-1 text-[10px]">
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-600 ring-1 ring-emerald-400/50 dark:text-emerald-200">
                Activo
              </span>
              <span className="rounded-full bg-[color:var(--accent-soft)] px-2 py-1 text-[color:var(--accent-strong)] ring-1 ring-[color:var(--accent-strong)]/60">
                En desarrollo
              </span>
            </div>
            <div className="space-y-3 rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-soft)] p-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Marca
                </p>
                <p className="text-sm font-semibold">Florería Violeta</p>
                <p className="text-xs text-zinc-500">
                  E‑commerce de flores con operación estable en Chile.
                </p>
              </div>
              <div className="border-t border-dashed border-zinc-700 pt-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Producto
                </p>
                <p className="text-sm font-semibold">Luna Finanzas Digitales</p>
                <p className="text-xs text-zinc-500">
                  Plataforma para ordenar finanzas personales y hábitos de
                  gasto.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Ideas en pruebas constantes dentro de Aruba Labs.</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="servicios" className="mt-16 border-t border-[color:var(--border-subtle)] pt-10">
          <div className="max-w-xl space-y-2">
            <h2 className="text-lg font-semibold">
              Qué hacemos en Aruba Digital
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Unimos producto, tecnología y negocio para crear activos digitales
              que puedan escalar: marcas propias, productos y proyectos para
              clientes.
            </p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
              <h3 className="text-sm font-semibold">Marcas y tiendas propias</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                Sitios y tiendas online para marcas como Florería Violeta,
                optimizadas para conversión y operación diaria.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                <li>• Tiendas online y landings</li>
                <li>• Optimización de checkout y funnels</li>
                <li>• Automatizaciones de pedidos y notificaciones</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
              <h3 className="text-sm font-semibold">Productos digitales</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                Desarrollo de productos propios como Luna Finanzas Digitales:
                backend, web y futuras apps móviles.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                <li>• APIs y backends robustos</li>
                <li>• Aplicaciones web conectadas</li>
                <li>• Experiencia de usuario centrada en el uso real</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
              <h3 className="text-sm font-semibold">Proyectos para clientes</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                Sitios, tiendas y sistemas a medida para negocios que necesitan
                soluciones específicas.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                <li>• Landings y sitios corporativos</li>
                <li>• Tiendas Shopify u otras plataformas</li>
                <li>• Sistemas y paneles internos ligeros</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="productos" className="mt-16 border-t border-[color:var(--border-subtle)] pt-10">
          <div className="max-w-xl space-y-2">
            <h2 className="text-lg font-semibold">
              Productos bajo Aruba Digital
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Proyectos que viven dentro de Aruba como productos en evolución,
              con espacio para seguir creciendo.
            </p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
              <div className="mb-2 flex gap-2 text-[10px]">
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-300 ring-1 ring-emerald-400/60">
                  Operando
                </span>
              </div>
              <h3 className="text-sm font-semibold">Florería Violeta</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                E‑commerce de flores con marca establecida en Chile.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                <li>• Ventas online todos los días</li>
                <li>• Optimización constante de conversión</li>
                <li>• Automatización parcial de la operación</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
              <div className="mb-2 flex gap-2 text-[10px]">
                <span className="rounded-full bg-violet-500/15 px-2 py-1 text-violet-200 ring-1 ring-violet-400/70">
                  En desarrollo
                </span>
              </div>
              <h3 className="text-sm font-semibold">Luna Finanzas Digitales</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                Plataforma para ordenar finanzas personales, entender gastos y
                construir hábitos financieros más sanos.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                <li>• Backend y web ya conectados</li>
                <li>• Flujos iniciales operativos</li>
                <li>• App móvil en planificación</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="clientes" className="mt-16 border-t border-[color:var(--border-subtle)] pt-10">
          <div className="max-w-xl space-y-2">
            <h2 className="text-lg font-semibold">
              Cómo trabajamos con clientes
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Proyectos claros, alcances definidos y foco en construir algo que
              realmente tenga impacto en tu negocio.
            </p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                01 · Exploración
              </p>
              <h3 className="mt-1 text-sm font-semibold">Entender el negocio</h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                Qué quieres lograr, qué limitantes tienes hoy y qué es
                realista construir en esta etapa.
              </p>
            </div>
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                02 · Diseño
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                Alcance concreto de solución
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                Definimos si necesitas una landing, una tienda, un sistema
                interno o una mezcla de ellos.
              </p>
            </div>
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                03 · Construcción
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                Desarrollo y lanzamiento
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                Construimos, probamos y dejamos documentado lo suficiente para
                que puedas operar tranquilo.
              </p>
            </div>
          </div>
        </section>

        <section id="labs" className="mt-16 border-t border-[color:var(--border-subtle)] pt-10">
          <div className="max-w-xl space-y-2">
            <h2 className="text-lg font-semibold">Aruba Labs</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Un espacio para experimentar con nuevas ideas: landings rápidas,
              tiendas pequeñas y prototipos que pueden convertirse en marcas o
              productos completos.
            </p>
          </div>
          <div className="mt-4 rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-soft)] p-4 text-xs text-zinc-700 dark:text-zinc-200">
            <p>
              Las ideas en etapa temprana viven dentro de{" "}
              <span className="font-mono text-[11px] font-semibold">
                50-labs/
              </span>{" "}
              en el repositorio de Aruba Digital. Cuando alguna demuestra
              tracción real, se gradúa a una marca en{" "}
              <span className="font-mono text-[11px] font-semibold">
                10-brands/
              </span>{" "}
              o a un producto en{" "}
              <span className="font-mono text-[11px] font-semibold">
                20-products/
              </span>
              .
            </p>
          </div>
        </section>

        <section id="contacto" className="mt-16 border-t border-[color:var(--border-subtle)] pt-10 pb-6">
          <div className="grid gap-6 md:grid-cols-[1.1fr,1.1fr]">
            <div>
              <h2 className="text-lg font-semibold">
                ¿Tienes una idea o proyecto?
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Podemos partir con algo pequeño: una landing clara, una tienda
                funcional o un primer módulo de sistema. Lo importante es
                empezar.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                <li>– Describe brevemente tu negocio o idea.</li>
                <li>– Qué quieres lograr (ventas, automatización, validación).</li>
                <li>– Plazo aproximado y nivel de inversión estimado.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface)] p-3 text-xs text-zinc-600 dark:text-zinc-300">
              <h3 className="text-sm font-semibold">Guía rápida para contactarme</h3>
              <p className="mt-2">
                Usa este esquema al enviarme un correo o mensaje:
              </p>
              <p className="mt-2 font-mono text-[11px] leading-relaxed">
                Asunto: Proyecto Aruba Digital – [Tipo de proyecto]
                <br />
                <br />
                1. Nombre / Empresa:
                <br />
                2. Tipo de proyecto (landing / tienda / sistema / producto):
                <br />
                3. Qué quieres lograr:
                <br />
                4. Plazo ideal:
                <br />
                5. Presupuesto aproximado:
              </p>
              <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                Este sitio no envía formularios directamente: está pensado para
                que puedas copiar esta estructura y enviarla por tu canal de
                contacto favorito (correo, WhatsApp, etc.).
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-[color:var(--border-subtle)] pt-3 text-[11px] text-zinc-500">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} Aruba Digital. Marcas, productos y
              experimentos digitales.
            </span>
            <span className="text-zinc-500">
              Construido con Next.js, TypeScript y Tailwind CSS.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
