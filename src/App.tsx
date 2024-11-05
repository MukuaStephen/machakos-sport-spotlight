import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Games from "./pages/Games";
import News from "./pages/News";
import Football from "./pages/games/Football";
import Rugby from "./pages/games/Rugby";
import Basketball from "./pages/games/Basketball";
import Schedules from "./pages/Schedules";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games" element={<Games />} />
          <Route path="/news" element={<News />} />
          <Route path="/games/football" element={<Football />} />
          <Route path="/games/rugby" element={<Rugby />} />
          <Route path="/games/basketball" element={<Basketball />} />
          <Route path="/schedules" element={<Schedules />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;