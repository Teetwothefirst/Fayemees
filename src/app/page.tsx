import Hero from "@/components/sections/Hero";
import BrandGrid from "@/components/sections/BrandGrid";
import Philosophy from "@/components/sections/Philosophy";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Philosophy />
      <BrandGrid />
    </div>
  );
}
