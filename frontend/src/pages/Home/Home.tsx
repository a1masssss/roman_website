import { TimelineSection } from "@/pages/Timeline"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

export function Home() {
  return (
    <>
      <section id="home" className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-6xl font-semibold text-black dark:text-white mb-4">
                Roman Vinogradov
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground mb-6">
                Vice President of Products at <span className="font-bold text-primary">Improvado</span>
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Product Executive | AI Innovator | Marketing Data Intelligence Leader
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
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>
      
      <TimelineSection />
    </>
  )
}

