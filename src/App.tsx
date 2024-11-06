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
          <Route path="/games" element={<GamesSection />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/profile"
            element={
              <Profile
                name={" Eric"}
                dob={"20/09/2002"}
                height={"189cm"}
                weight={"67kg"}
                position={"Flanker"}
                stats={{ assists: 2, gamesPlayed: 2, goals: 2 }}
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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
