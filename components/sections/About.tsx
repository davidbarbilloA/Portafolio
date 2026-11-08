export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-12 md:gap-8">
        <h2 className="text-sm text-ink-tertiary md:col-span-3">Sobre mí</h2>

        <div className="md:col-span-9">
          <p className="font-display text-display-2 text-ink-primary">
            Empecé administrando los sistemas que las empresas dan por sentado.
            Esa base es hoy parte de cómo diseño software.
          </p>

          <div className="mt-10 grid gap-6 text-base leading-relaxed text-ink-secondary md:grid-cols-2 md:gap-10">
            <p>
              Construyo interfaces en React y TypeScript con estándares de
              producción, y estoy extendiendo esa base hacia el backend con Java
              y Spring Boot para moverme con soltura en todo el stack.
            </p>
            <p>
              Administro redes, accesos, activos e identidad corporativa, así
              que entiendo cómo se opera un sistema después de construirlo. Busco
              un equipo de ingeniería donde seguir creciendo como desarrollador Full Stack y
              aportar ese criterio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
