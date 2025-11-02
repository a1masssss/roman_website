import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"

export function Achievements() {
  return (
    <section id="achievements" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Achievements
        </h2>
        
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  )
}

