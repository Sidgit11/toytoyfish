
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCategories />
      <WhyChooseUs />
      <LocationContact />
      <Footer />
    </div>
  );
};

export default Index;
