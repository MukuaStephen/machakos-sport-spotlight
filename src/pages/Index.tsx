import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import NewsCard from '../components/NewsCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const newsItems = [
    {
      title: "Football Team Wins Regional Championship",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      description: "Our football team emerged victorious in an intense final match against our rivals."
    },
    {
      title: "New Sports Complex Opening Soon",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
      description: "State-of-the-art facilities coming to enhance our sports programs."
    },
    {
      title: "Athletics Team Sets New Records",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8",
      description: "Multiple records broken at the national university championships."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Highlights</h2>
            <ImageCarousel />
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;