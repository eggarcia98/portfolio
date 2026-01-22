import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturedProjects from "@/components/featured-projects";

export default function HomePage() {
    return (
        <div className="min-h-dvh">
            <Navbar />

            <main className="container-page">
                <HeroSection />
                <FeaturedProjects />
            </main>

            <Footer />
        </div>
    );
}
