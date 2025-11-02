import { Newspaper, Video, Mic, Radio, Tv, FileText } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"

export function PressMedia() {
  const mediaItems = [
    {
      id: 1,
      icon: Newspaper,
      title: "Featured Article in Tech Magazine",
      source: "Tech Magazine",
      date: "January 2024",
      description: "An in-depth interview about my work, vision, and the future of technology innovation",
      link: "#",
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
      id: 2,
      icon: Video,
      title: "Video Interview: Industry Trends",
      source: "YouTube Channel",
      date: "December 2023",
      description: "Discussion about industry trends, innovations, and what's coming next in the field",
      link: "#",
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    },
    {
      id: 3,
      icon: Mic,
      title: "Podcast Episode: Insights & Experiences",
      source: "Industry Podcast",
      date: "November 2023",
      description: "Sharing insights and experiences in the field with industry experts",
      link: "#",
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/2/8]",
    },
    {
      id: 4,
      icon: Radio,
      title: "Radio Interview: Vision for the Future",
      source: "Tech Radio",
      date: "October 2023",
      description: "Discussing the future of technology and innovation strategies",
      link: "#",
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    },
    {
      id: 5,
      icon: Tv,
      title: "TV Appearance: Innovation Summit",
      source: "Tech TV Network",
      date: "September 2023",
      description: "Live appearance at the annual Innovation Summit discussing breakthrough technologies",
      link: "#",
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/10]",
    },
    {
      id: 6,
      icon: FileText,
      title: "Published Research Paper",
      source: "Academic Journal",
      date: "August 2023",
      description: "Peer-reviewed research on emerging technologies and their impact on society",
      link: "#",
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]",
    },
  ]

  return (
    <section id="press-media" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
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
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
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
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
              <a
                href={link}
                className="inline-flex items-center text-primary hover:underline text-sm font-semibold transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

