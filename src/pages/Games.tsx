import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Games = () => {
  const sports = [
    {
      title: "Football",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      description: "Join our competitive football teams and participate in regional tournaments.",
      link: "/games/football"
    },
    {
      title: "Rugby",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
      description: "Experience the thrill of rugby with our dedicated coaching staff.",
      link: "/games/rugby"
    },
    {
      title: "Basketball",
      image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8",
      description: "Be part of our dynamic basketball program and showcase your skills.",
      link: "/games/basketball"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">Sports Programs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={sport.image} alt={sport.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{sport.title}</h3>
                  <p className="text-gray-600 mb-4">{sport.description}</p>
                  <Link to={sport.link}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;