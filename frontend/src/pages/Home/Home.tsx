import { TimelineSection } from "@/pages/Timeline"

export function Home() {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black dark:text-white">
            Roman Vinogradov
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Product Executive, AI Innovator, Marketer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>
      
      <TimelineSection />
    </>
  )
}

