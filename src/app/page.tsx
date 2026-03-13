import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      {/* Placeholder for Step 6: 4-Arm Selection Section */}
      <section id="sections" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-charcoal mb-4">Our Brand Entities</h2>
          <p className="font-body text-mid max-w-2xl mx-auto italic mb-12">
            Explore the four pillars of FAYEMEES, each dedicated to providing a unique and premium experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/5] bg-cream border border-stone/10 rounded-sm flex items-center justify-center text-stone text-xs uppercase tracking-widest">
                Component Loading...
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
