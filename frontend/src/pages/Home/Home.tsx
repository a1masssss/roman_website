import { TimelineSection } from "@/pages/Timeline"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

export function Home() {
  return (
    <>
      <section id="home" className="overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
                Roman Vinogradov
              </h1>
              <p className="text-xl md:text-3xl font-semibold text-muted-foreground">
                Improvado Executive
              </p>
              <p className="text-lg md:text-2xl text-muted-foreground mt-2">
                Product Leader & Marketing Innovator
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="#contact"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition"
                >
                  Get in Touch
                </a>
                <a
                  href="#achievements"
                  className="border border-border hover:border-primary px-8 py-3 rounded-full font-semibold transition"
                >
                  View Achievements
                </a>
              </div>
            </>
          }
        >
          <img
            src="/improvado_demo.jpg"
            alt="Improvado Platform Demo"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>
      
      <TimelineSection />
    </>
  )
}

