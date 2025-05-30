
import FeatureCard from "@/components/Cards/FeatureCard";
import HeroCard from "@/components/Cards/HeroCard";
import LogoCarousel from "@/components/Carousel/LogoCarousel";
import TitleVideoSection from "@/components/TitleVideoSection";

export default function Home() {
  return (
    <main>
      {/* Section 1 Start */}
      <div className="bg-primary dark:bg-gray-800 pt-[100px]">
        <div className="container grid grid-cols-1 lg:grid-cols-3 py-5 lg:py-0 gap-5 lg:gap-0">
          <HeroCard title="Jewellery" subtitle="Industry" buttonText="Click Here" buttonUrl="#" otherClasses="bg-[url(/assets/images/gvuk_laserstar_industrial_sectors.png)]" />

          <HeroCard title="Medical" subtitle="Practices" buttonText="Click Here" buttonUrl="#" otherClasses="bg-[url(/assets/images/gvuk_laserstar_medical_practices.png)]" />

          <HeroCard title="Industrial" subtitle="Sectors" buttonText="Click Here" buttonUrl="#" otherClasses="bg-[url(/assets/images/gvuk_laserstar_industrial_sectors-1.png)]" />

        </div>
      </div>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <div className="dark:bg-gray-900 dark:text-white">
        <div className="container flex flex-col items-center justify-between gap-10 py-16">
          <h4 className="h4 text-center">GVUK Design gives you the very best in technology from manufacturing to R&D and prototyping. From Laser welders and engravers/cutting to jewellery CAD software, industry leading fume and dust filtration solutions along with professional-grade 3D printers and 3D scanners.</h4>
          <div className="w-[360px] overflow-hidden lg:w-full">
            <LogoCarousel />
          </div>
          <h4 className="h4 text-center">GVUK Design provide the perfect toolbox solution, backed up by training, service and support. </h4>
        </div>
      </div>
      {/* Section 2 End */}

      {/* Section 3 Start */}
      <div className="bg-gray-200 dark:bg-gray-800 py-16 border-t-2 border-primary">
        <div className="flex flex-col gap-16">
          <TitleVideoSection title="Class Leading Technology" description="Advancements in technology are reshaping the jewellery, medical and industrial sectors in numerous ways. These innovations drive efficiency, reduce costs, and help businesses stay agile in meeting market demands. How do you plan to incorporate these technologies into your operations to enhance your business?" videoUrl="https://www.gvukdesign.co.uk/wp-content/uploads/2021/09/GVUK_2021_v1_960x540.webm" />

          <TitleVideoSection popup reverse title="Laserstar Technologies" description="LaserStar provides a comprehensive range of industrial laser systems for welding, marking, engraving, laser cleaning, multi-axis motion devices, and software solutions. These systems are designed to work with various materials, component parts, and final assemblies." videoUrl="https://www.youtube.com/embed/66bbiOefdwQ?autoplay=0&mute=1&controls=0&loop=1&playlist=66bbiOefdwQ&modestbranding=1&rel=0" />
        </div>
      </div>
      {/* Section 3 End */}

      {/* Section 4 Start */}

      <div className="py-16 dark:bg-gray-900">
        <div className="container flex flex-col gap-10 lg:flex-row">
          <FeatureCard
            imgUrl="/assets/images/marketing-engraving.png"
            title="Laser welding, marking & engraving"
            buttonText="Jewellery industry"
            buttonUrl="#" />

          <FeatureCard
            imgUrl="/assets/images/surface-marketing.png"
            title="Laser welding, cutting & non surface marking"
            buttonText="Medical Practices"
            buttonUrl="#" />
          <FeatureCard
            imgUrl="/assets/images/welding-marketing.png"
            title="Precise and fast laser welding & marking"
            buttonText="Industrial Sectors"
            buttonUrl="#" />
        </div>
      </div>

      {/* Section 4 End */}
    </main>
  );
}
