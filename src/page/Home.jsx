import FormInput from "../components/FormInput.jsx";
import "./Home.css";
import Track from "../components/Track.jsx";
import { useState } from "react";
import Pagination from "../components/Pagination.jsx";

// Dữ liệu 100 bài hát thử nghiệm
const mock100Tracks = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `SoundCloud Track #${index + 1}`,
  artist: `Nghệ sĩ ${index + 1}`,
  duration: `0${Math.floor(Math.random() * 3) + 2}:${Math.floor(Math.random() * 50) + 10}`,
  image: `https://picsum.photos/300/300?random=${index + 1}`
}));


function Home() {
  const [tracks, settracks] = useState(mock100Tracks);
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerpage = 3;
 
  const indexOfLastTrack = currentPage * itemPerpage;
  const indexOfFirstTrack = indexOfLastTrack - itemPerpage;
  const currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack);
  const totalPages = Math.ceil(tracks.length / itemPerpage);

  const handlePageChange = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  return (
    <main className="home-container"> 
      <div className="home-header">
        <h1 className="home-title">
          SoundCloud <span className="title-gradient">Downloader</span>
        </h1>
        <p className="home-subtitle">
          Convert and download SoundCloud tracks & playlists to MP3 in high
          quality
        </p>
      </div>

      <div className="block-input">
        <FormInput />
      </div>

      <div className="track-list-section">
        <div className="track-list-header">
          <h2 className="track-list-title">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
            <span>Tracks List</span>
            <span className="track-count-badge">{tracks.length}</span>
          </h2>
        </div>

        <div className="track-list">
          {currentTracks.map((track) => (
            <Track
              key={track.id}
              title={track.title}
              artist={track.artist}
              duration={track.duration}
              image={track.image}
            />
          ))}
        </div>
        <div>
          <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
        </div>
      </div>
    </main>
  );
}

export default Home;
