import { TimelineSection } from "@/pages/Timeline"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

export function Home() {
  return (
    <>
      <section id="home" className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white mb-3 md:mb-4 px-4">
                Roman Vinogradov
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 md:mb-6 px-4">
                Vice President of Products at <span className="font-bold text-primary">Improvado</span>
              </p>
            </>
          }
        >
          <a
            href="https://improvado.io"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            {/* Desktop version */}
            <img
              src="/improvado_demo.jpg"
              alt="Improvado Platform Demo"
              className="hidden md:block mx-auto rounded-2xl object-cover h-full object-left-top transition-opacity hover:opacity-90"
              draggable={false}
            />
            {/* Mobile version */}
            <img
              src="/imrpovado_phone.png"
              alt="Improvado Mobile Demo"
              className="block md:hidden mx-auto rounded-2xl object-contain h-full transition-opacity hover:opacity-90"
              draggable={false}
            />
          </a>
        </ContainerScroll>
      </section>
      
      <TimelineSection />
    </>
  )
}

