import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./components/AboutUs";
import GamesSection from "./components/GamesSection";
import News from "./components/News";
import Schedules from "./components/Schedules";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import image1 from "./images/images2.jpeg";
import image2 from "./images/image1.jpeg";
import Basketball from "./pages/games/Basketball";
import Football from "./pages/games/Football";
import Rugby from "./pages/games/Rugby";
import Recruting from "./components/Recruting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="games" element={<GamesSection />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route
            path="/profile"
            element={
              <Profile
                name={"Jerry Alex"}
                dob={"10/10/2000"}
                height={"189cm"}
                weight={"62kg"}
                position={"Mid"}
                stats={{ assists: 2, gamesPlayed: 4, goals: 0 }}
                photoGallery={[image1, image2, image1, image2]}
                achievements={[]}
                videos={[
                  {
                    title: "Sample Video 1",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                  },
                  {
                    title: "Sample Video 2",
                    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
                  },
                  {
                    title: "Sample Video 3",
                    url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
                  },
                ]}
              />
            }
          />
          <Route path="/games/rugby" element={<Rugby />} />
          <Route path="/games/football" element={<Football />} />
          <Route path="/games/basketball" element={<Basketball />} />
          <Route path="/recruiting" element={<Recruting />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;