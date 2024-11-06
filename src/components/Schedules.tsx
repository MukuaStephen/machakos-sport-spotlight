import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";

const Schedules = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const scheduleData = {
    football: [
      {
        time: "4:00 PM - 6:00 PM",
        days: "Monday - Friday",
        venue: "Main Stadium",
        team: "Men's Team",
      },
      {
        time: "9:00 AM - 11:00 AM",
        days: "Saturday",
        venue: "Training Ground",
        team: "Women's Team",
      },
    ],
    rugby: [
      {
        time: "4:00 PM - 6:00 PM",
        days: "Tuesday & Thursday",
        venue: "Rugby Field",
        team: "Men's Team",
      },
      {
        time: "8:00 AM - 10:00 AM",
        days: "Saturday",
        venue: "Rugby Field",
        team: "Women's Team",
      },
    ],
    basketball: [
      {
        time: "4:00 PM - 6:00 PM",
        days: "Monday & Wednesday",
        venue: "Indoor Court",
        team: "Men's Team",
      },
      {
        time: "2:00 PM - 4:00 PM",
        days: "Sunday",
        venue: "Indoor Court",
        team: "Women's Team",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Sports Schedules</h1>

          <div className="grid md:grid-cols-[300px,1fr] gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            <div>
              <Tabs defaultValue="football" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="football">Football</TabsTrigger>
                  <TabsTrigger value="rugby">Rugby</TabsTrigger>
                  <TabsTrigger value="basketball">Basketball</TabsTrigger>
                </TabsList>

                {Object.entries(scheduleData).map(([sport, schedules]) => (
                  <TabsContent key={sport} value={sport}>
                    <div className="rounded-lg border p-4">
                      <h3 className="text-xl font-semibold mb-4 capitalize">
                        {sport} Training Schedule
                      </h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Team</TableHead>
                            <TableHead>Days</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Venue</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {schedules.map((schedule, index) => (
                            <TableRow key={index}>
                              <TableCell>{schedule.team}</TableCell>
                              <TableCell>{schedule.days}</TableCell>
                              <TableCell>{schedule.time}</TableCell>
                              <TableCell>{schedule.venue}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Schedules;
