import { LandingHero } from "@/components/landing/LandingHero";
import { LandingSections } from "@/components/landing/LandingSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-center">
      <LandingHero />
      <LandingSections />
    </main>
  );
}
