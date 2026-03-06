import { Hero } from "@/sections/Hero";
import { FinancialHealthScore } from "@/sections/FinancialHealthScore";
import { PlatformCapabilities } from "@/sections/PlatformCapabilities";
import { MobileAppExperience } from "@/sections/MobileAppExperience";
import { FinancialTools } from "@/sections/FinancialTools";
import { ScenarioAnalysis } from "@/sections/ScenarioAnalysis";
import { LearnAssets } from "@/sections/LearnAssets";
import { Insights } from "@/sections/Insights";
import { AppDownloadCTA } from "@/sections/AppDownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FinancialHealthScore />
      <PlatformCapabilities />
      <MobileAppExperience />
      <FinancialTools />
      <ScenarioAnalysis />
      <LearnAssets />
      <Insights />
      <AppDownloadCTA />
    </>
  );
}
