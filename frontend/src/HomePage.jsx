import React, { useState } from "react";
import { Search } from "lucide-react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults([
      {
        id: 1,
        title: "Sample Song 1",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        download: "https://www.example.com/sample1.mp3",
      },
      {
        id: 2,
        title: "Sample Song 2",
        video: "https://www.w3schools.com/html/movie.mp4",
        download: "https://www.example.com/sample2.mp3",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-700/30 via-transparent to-red-900/40 animate-pulse z-0"></div>
      <div className="relative z-10 px-6 py-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-500 drop-shadow-xl mb-10 animate-pulse">
          SASIYA SONG DOWNLOAD
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a song..."
            className="w-full md:w-2/3 px-4 py-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={handleSearch}
            className="p-3 rounded-xl bg-red-600 hover:bg-red-700 shadow-lg"
          >
            <Search className="text-white" />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {results.map((song) => (
            <div
              key={song.id}
              className="bg-gray-900/70 p-4 rounded-2xl border border-red-600 shadow-xl transform hover:scale-[1.02] transition duration-300"
            >
              <h2 className="text-xl font-semibold text-red-400 mb-2">
                {song.title}
              </h2>
              <video
                controls
                className="w-full rounded-xl mb-4 shadow-md"
                src={song.video}
              ></video>
              <a
                href={song.download}
                className="inline-block px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg"
                download
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
