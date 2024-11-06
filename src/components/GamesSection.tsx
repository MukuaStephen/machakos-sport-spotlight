import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import SportTeam from "./SportTeam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GamesSection = () => {
  const sportsData = {
    football: {
      name: "Football",
      coach: "John Kamau",
      players: [
        {
          name: "Alex Mwangi",
          role: "Striker",
          joinedYear: "2022",
          schoolId: "MKSU/SP/2022/001",
          achievements: ["Top Scorer 2023", "Team Captain"],
        },
        {
          name: "Brian Ochieng",
          role: "Goalkeeper",
          joinedYear: "2021",
          schoolId: "MKSU/SP/2021/002",
          achievements: ["Best Goalkeeper 2022"],
        },
        // ... Add more players following the same structure
      ],
    },
    basketball: {
      name: "Basketball",
      coach: "Sarah Ochieng",
      players: [
        {
          name: "James Kiprop",
          role: "Point Guard",
          joinedYear: "2023",
          schoolId: "MKSU/SP/2023/003",
          achievements: ["MVP 2023"],
        },
        // ... Add more players following the same structure
      ],
    },
    rugby15s: {
      name: "Rugby 15s",
      coach: "Michael Weru",
      players: [
        {
          name: "David Mutua",
          role: "Flanker",
          joinedYear: "2022",
          schoolId: "MKSU/SP/2022/004",
          achievements: ["Best Forward 2023"],
        },
        // ... Add more players following the same structure
      ],
    },
    rugby7s: {
      name: "Rugby 7s",
      coach: "Peter Kamau",
      players: [
        {
          name: "Samuel Kiprono",
          role: "Scrum-half",
          joinedYear: "2023",
          schoolId: "MKSU/SP/2023/005",
          achievements: ["Tournament MVP 2023"],
        },
        // ... Add more players following the same structure
      ],
    },
    handball: {
      name: "Handball",
      coach: "Grace Muthoni",
      players: [
        {
          name: "Kevin Otieno",
          role: "Center Back",
          joinedYear: "2022",
          schoolId: "MKSU/SP/2022/006",
          achievements: ["Best Player 2023"],
        },
        // ... Add more players following the same structure
      ],
    },
  };
  const sports = [
    {
      title: "Football",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      description:
        "Join our competitive football teams and participate in regional tournaments.",
      link: "/games/football",
    },
    {
      title: "Rugby",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
      description:
        "Experience the thrill of rugby with our dedicated coaching staff.",
      link: "/games/rugby",
    },
    {
      title: "Basketball",
      image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8",
      description:
        "Be part of our dynamic basketball program and showcase your skills.",
      link: "/games/basketball",
    },
  ];

  return (
    <>
      {" "}
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">
              Sports Programs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sports.map((sport, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={sport.image}
                    alt={sport.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {sport.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{sport.description}</p>
                    <Link to={sport.link}>
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="py-16 bg-gray-50" id="games">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-mksu-blue mb-12 text-center">
                Our Sports Teams
              </h2>
              <Tabs defaultValue="football" className="w-full">
                <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
                  {Object.keys(sportsData).map((sport) => (
                    <TabsTrigger
                      key={sport}
                      value={sport}
                      className="px-6 py-3 rounded-full"
                    >
                      {sportsData[sport].name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {Object.entries(sportsData).map(([key, data]) => (
                  <TabsContent key={key} value={key}>
                    <Card className="p-6">
                      <SportTeam
                        sportName={data.name}
                        coach={data.coach}
                        players={data.players}
                      />
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        </main>
      </div>{" "}
    </>
  );
};

export default GamesSection;
