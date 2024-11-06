import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import football from "../images/football.jpg"
import rugby from "../images/rugbyball.jpg"
const News = () => {
  const sportsNews = [
    {
      title: "Football Team Advances to National Finals",
      date: "March 20, 2024",
      image: football,
      description:
        "Our university football team has made history by qualifying for the national finals after a thrilling victory in the semifinals.",
    },
    {
      title: "Rugby Team Welcomes New Coach",
      date: "29 october, 2024",
      image: rugby,
      description:
        "Former national team player joins Machakos University as the new head coach for our rugby program.",
    },
    {
      title: "Basketball Tournament Success",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
      description:
        "Our basketball team secured third place in the regional university championships.",
    },
  ];

  const communityNews = [
    {
      title: "Sports Facility Upgrade",
      date: "March 16, 2024",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      description:
        "University announces major upgrades to sports facilities including new equipment and renovated courts.",
    },
    {
      title: "Student Athletes Recognition",
      date: "March 14, 2024",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      description:
        "Annual awards ceremony celebrates outstanding achievements of our student athletes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Sports News & Updates
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, achievements, and developments
              in Machakos University's sports community.
            </p>
          </div>

          <Tabs defaultValue="sports" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="sports">Sports News</TabsTrigger>
              <TabsTrigger value="community">Community Updates</TabsTrigger>
            </TabsList>

            <TabsContent value="sports">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sportsNews.map((news, index) => (
                  <NewsCard key={index} {...news} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {communityNews.map((news, index) => (
                  <NewsCard key={index} {...news} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="mt-16">
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
              <CardDescription>
                Get the latest sports news and updates delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 border rounded-md"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
