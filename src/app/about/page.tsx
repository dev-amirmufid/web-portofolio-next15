import React from "react";
import HeroSection from "@/components/sections/About/HeroSection";
import DescriptionSection from "@/components/sections/About/DescriptionSection";
import SkillsSection from "@/components/sections/About/SkillsSection";
import ExprerienceSection from "@/components/sections/About/ExprerienceSection";

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <DescriptionSection />
      <SkillsSection />
      <ExprerienceSection />
    </div>
  );
}
