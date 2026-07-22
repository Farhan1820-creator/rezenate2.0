// app/(site)/page.tsx
import Hero from "./Hero";
import ValuesSection from "./ValuesSection";
import StrategySection from "./StrategySection";
import HowWePartner from "./HowWePartner";
import TheFounders from "./Founders";
import LeadershipCTA from "./LeadershipCTA";
import LeadTheWayCTA from "./LTW";

export default function HomePage() {
  return (
    <div className="bg-background">
      <Hero />
      <StrategySection/>
      <ValuesSection />
      <HowWePartner/>
      <TheFounders/>
      <LeadershipCTA/>
      <LeadTheWayCTA/>
      </div>
  );
}