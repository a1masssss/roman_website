import { cn } from "@/lib/utils";
import {
  IconDatabase,
  IconChartLine,
  IconRobot,
  IconNetwork,
  IconRocket,
  IconCurrencyDollar,
  IconShieldCheck,
  IconBulb,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Forbes Technology Council — Member & Contributor",
      description:
        "Published multiple expert commentaries on AI, data, and product strategy.",
      icon: <IconBulb />,
    },
    {
      title: "Senior Executive — AI Expert",
      description:
        "Authored industry analyses on regulated AI, cybersecurity, and the future of work.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Berkeley SkyDeck — Advisor",
      description:
        "Mentor founders on AI product strategy, GTM, and scaling.",
      icon: <IconRocket />,
    },
    {
      title: "Astana Hub — Mentor",
      description:
        "Guided startups on international expansion, sales architecture, and AI adoption.",
      icon: <IconNetwork />,
    },
    {
      title: "Self-Serve ETL Transformation (Improvado)",
      description:
        "Redesigned platform to self-serve pipelines; reduced time-to-insight by 50%.",
      icon: <IconDatabase />,
    },
    {
      title: "AI Revenue Assistant (Improvado)",
      description:
        "Converted raw data into decisions; increased Customer LTV by 35%.",
      icon: <IconRobot />,
    },
    {
      title: "Growth Impact (Improvado)",
      description:
        "Drove +800% ARR to $4.5M and +1200% user expansion through product strategy.",
      icon: <IconChartLine />,
    },
    {
      title: "Series A Readiness (Improvado)",
      description:
        "Led product positioning and collateral supporting a $22M Series A round.",
      icon: <IconCurrencyDollar />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group dark:border-neutral-800 cursor-pointer",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 group-hover:text-primary transition-colors duration-300">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-300 origin-center" />
        <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

