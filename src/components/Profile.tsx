import React, { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Button } from "./ui/button";

interface PlayerStats {
  gamesPlayed: number;
  goals: number;
  assists: number;
  // Add more stats as needed
}

interface Achievement {
  title: string;
  year: number;
}

interface Video {
  title: string;
  url: string;
}

interface PlayerProfileProps {
  name: string;
  dob: string;
  height: string;
  weight: string;
  position: string;
  stats: PlayerStats;
  photoGallery: string[];
  achievements: Achievement[];
  videos: Video[];
}
 
const Profile: React.FC<PlayerProfileProps> = ({
  name,
  dob,
  height,
  weight,
  position,
  stats,
  photoGallery,
  achievements,
  videos,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">MU Sports</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-primary">
                About
              </a>
              <a href="/games" className="text-gray-700 hover:text-primary">
                Games
              </a>
              <a href="/news" className="text-gray-700 hover:text-primary">
                News
              </a>
              <a href="/schedules" className="text-gray-700 hover:text-primary">
                Schedules
              </a>
              {/* <a href="/signin">
                <Button variant="secondary" className="flex items-center gap-2">
                  <UserCircle size={20} />
                  Sign In
                </Button>
              </a> */}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
                >
                  About
                </a>
                <a
                  href="/games"
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
                >
                  Games
                </a>
                <a
                  href="/news"
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
                >
                  News
                </a>
                <a
                  href="/schedules"
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
                >
                  Schedules
                </a>
                {/* <a
                  href="/signin"
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
                >
                  Sign In
                </a> */}
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="profile p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg md:p-10 lg:p-12">
        <div className="flex flex-col items-center md:flex-row md:items-center md:mb-6">
          <img
            src={photoGallery[0]}
            alt="Profile"
            className="w-20 h-20 object-fit mr-4 gap-3 "
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              {name}
            </h1>
            <p className="text-md md:text-lg text-gray-600">
              Position: {position}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Personal Information
            </h2>
            <p className="text-md md:text-lg">
              <span className="font-semibold">Date of Birth:</span> {dob}
              <br />
              <span className="font-semibold">Height:</span> {height}
              <br />
              <span className="font-semibold">Weight:</span> {weight}
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Stats</h2>
            <p className="text-md md:text-lg">
              Games Played this season: {stats.gamesPlayed}
              <br />
              Goals this season: {stats.goals}
              <br />
              Assists this season: {stats.assists}
            </p>
          </div>
        </div>

        <section className="photo-gallery mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {photoGallery.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className="object-cover h-50 w-96 rounded-lg"
              />
            ))}
          </div>
        </section>

        <section className="achievements mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Achievements
          </h2>
          <ul className="list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-md md:text-lg">
                {achievement.title} - {achievement.year}
              </li>
            ))}
          </ul>
        </section>

        <section className="videos">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Videos</h2>
          {videos.map((video, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg md:text-xl font-medium mb-2">
                {video.title}
              </h3>
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 md:h-64 lg:h-80"
              ></iframe>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Profile;

