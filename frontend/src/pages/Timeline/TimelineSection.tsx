import { Timeline } from "@/components/ui/timeline";
import { Award, Briefcase, Lightbulb, TrendingUp, Users, DollarSign, Target, Rocket } from "lucide-react";

export function TimelineSection() {
  const data = [
    {
      title: "2025 — Present",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Vice President of Products — <a href="https://improvado.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hidden md:inline">Improvado</a><span className="md:hidden">Improvado</span>
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">Vice President of Products at Improvado</p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">San Francisco Bay Area</p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
              Leading product strategy for a marketing data intelligence platform trusted by ASUS, General Electric, and more.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Reduced reporting time by 90%, saving 400 hours/month across enterprise accounts</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Rocket className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>AI-Powered Insights transforming raw data into strategic decisions</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              AI Expert — Senior Executive
            </h3>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm">
              Contributing insights on AI, leadership, and decision-making for top executives across industries.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Expanded Advisory & Mentorship Roles
            </h3>
            <div className="space-y-3 mt-4">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Astana Hub — Mentor</span>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                    Guiding startups on international expansion, sales architecture, and AI adoption
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">PDMA — Professional Member</span>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                    Product Development and Management Association membership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Promoted to Vice President of Products
            </h3>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
              September 2023 — Promoted to VP of Product at Improvado
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Forbes Technology Council — Member</span>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                    Published expert commentaries on AI, data, and product strategy
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Rocket className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Berkeley SkyDeck — Advisor</span>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                    Mentoring founders on AI product strategy, GTM, and scaling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Product Director — Improvado
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Feb 2022 - Sep 2023</p>
            <div className="space-y-2 mb-6">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <DollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Spearheaded AI Revenue Assistant — increased Customer LTV by 35%</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Advanced Attribution product utilizing activity schema arrays</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Achieved 99.5% uptime and reduced critical incidents by 30%</span>
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-primary mb-1">🎉 Major Milestone</p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm">
                <strong>Improvado Raises $22M in Series A Funding</strong> — Led product positioning and collateral
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2018 — 2022",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Head of Product — Improvado
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Sep 2018 - Feb 2022</p>
            <div className="space-y-2 mb-4">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Orchestrated transformative shift to self-serve ETL — reduced time-to-insight by 50%</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Drove +800% ARR growth to $4.5M and +1200% user base expansion</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Rocket className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Spearheaded product positioning for Series A funding</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2017 — 2018",
      content: (
        <div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Senior Product Manager — Improvado
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Jan 2017 - Sep 2018</p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
              Led creation of sophisticated Analytics Platform and drafted holistic product vision and roadmap. 
              Propelled ARR from nascent stage to $600,000.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Co-founder, CPO — Cybermates
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Feb 2017 - Aug 2018</p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm">
              AI-powered gaming platform connecting players and teams for Dota 2, League of Legends, and CS:GO.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2015 — 2017",
      content: (
        <div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Senior Marketing & Product Manager
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">RTB-Media.me • Nov 2015 - Jan 2017</p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
              Drove product innovation and market leadership. Unified campaign management platform debut, 
              revenue growth from zero to $300,000, and comprehensive product roadmaps.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Marketing & Product Manager
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">RTB-Media.ru • Jan 2015 - Nov 2015</p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm">
              30% increase in marketing visibility, 40% boost in engagement, and 50% reduction in lead acquisition costs.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2014 — 2015",
      content: (
        <div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Product Manager — Bank Renaissance Credit
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Feb 2014 - Jan 2015 • Moscow, Russia</p>
            <div className="space-y-2 mb-4">
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Briefcase className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>30% improvement in project onboarding efficiency through enhanced team synergy</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>95% on-time delivery rate through Agile methodologies</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>25% risk mitigation through strategic action plans</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

