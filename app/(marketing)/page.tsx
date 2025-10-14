import { HeroHeader } from "@/app/_components/header";
import HeroSection from "@/app/_components/hero-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    
    < HeroHeader />

    <HeroSection />
   </div>
  );
}
