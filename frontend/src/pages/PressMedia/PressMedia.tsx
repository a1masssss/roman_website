import { Newspaper, FileText } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"

export function PressMedia() {
  const mediaItems = [
    {
      id: 1,
      icon: Newspaper,
      title: "Improvado offers tool for deeper marketing insights, nabs Series A",
      source: "VentureBeat",
      date: "May 2022",
      description: "Coverage of Improvado's $22M Series A and product capabilities.",
      link: "https://venturebeat.com/marketing/improvado-offers-tool-for-deeper-marketing-insights-nabs-series-a/",
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
      id: 2,
      icon: Newspaper,
      title: "Companies Increased Ad Spend During The Pandemic",
      source: "Adweek",
      date: "March 1, 2021",
      description: "Industry piece citing Improvado's domain; includes expert commentary.",
      link: "https://www.adweek.com/media/companies-increased-ad-spend-pandemic/",
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    },
    {
      id: 3,
      icon: FileText,
      title: "Improvado Raises $22 Million in Series A Funding",
      source: "GlobeNewswire",
      date: "May 12, 2022",
      description: "Official press release on funding and platform launch.",
      link: "https://www.globenewswire.com/news-release/2022/05/12/2442352/0/en/Improvado-Raises-22-Million-in-Series-A-Funding-Launches-Marketing-Sales-Data-Aggregation-Platform-for-Enterprise.html",
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/2/8]",
    },
    {
      id: 4,
      icon: FileText,
      title: "Regulated AI: Protect Public Safety, Drive Innovation",
      source: "Senior Executive",
      date: "January 2025",
      description: "Expert round-up featuring Roman's commentary on AI policy.",
      link: "https://seniorexecutive.com/regulated-ai-protect-public-safety-drive-innovation/",
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    },
    {
      id: 5,
      icon: Newspaper,
      title: "19 In-Demand Tech Skills Everyone Can (Even Should) Learn",
      source: "Forbes Technology Council",
      date: "February 2025",
      description: "Expert panel article including Roman's perspective.",
      link: "https://www.forbes.com/councils/forbestechcouncil/2025/02/10/19-in-demand-tech-skills-everyone-can-even-should-learn/",
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/10]",
    },
    {
      id: 6,
      icon: FileText,
      title: "Unlock Cross-Channel Attribution",
      source: "AdRoll × Improvado",
      date: "May 2024",
      description: "Partner blog explaining the integration and outcomes.",
      link: "https://www.adroll.com/blog/adroll-improvado-unlock-cross-channel-attribution",
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]",
    },
  ]

  return (
    <section id="press-media" className="min-h-screen py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
          Press & Media
        </h2>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[80rem] xl:grid-rows-2">
          {mediaItems.map((item) => (
            <MediaGridItem
              key={item.id}
              area={item.area}
              icon={<item.icon className="h-4 w-4" />}
              title={item.title}
              source={item.source}
              date={item.date}
              description={item.description}
              link={item.link}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

interface MediaGridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  source: string
  date: string
  description: string
  link: string
}

const MediaGridItem = ({
  area,
  icon,
  title,
  source,
  date,
  description,
  link,
}: MediaGridItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div 
        onClick={handleClick}
        className="relative h-full cursor-pointer group"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(link, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 transition-all duration-200 group-hover:scale-[1.02] group-hover:border-primary/50">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 transition-colors">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                {icon}
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-primary">
                    {source}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{date}</span>
                </div>
                <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                  {description}
                </p>
                <div className="inline-flex items-center text-primary group-hover:underline group-hover:translate-x-1 text-sm font-semibold transition-all">
                  Read More →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

