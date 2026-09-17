import FormInput from '../components/FormInput.jsx';
import './Home.css';
import Track from '../components/Track.jsx'
import { useState } from 'react';
// 1. Tạo mảng chứa dữ liệu mẫu của 10 bài hát
const mockTracksData = [
  {
    id: 1,
    title: "Starboy (feat. Daft Punk)",
    artist: "The Weeknd",
    duration: "03:50",
    image: "https://i1.sndcdn.com/artworks-x9Ee1zlKgCXEq31K-f6dqlw-t1080x1080.jpg"
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "03:20",
    image: "https://picsum.photos/300/300?random=2"
  },
  {
    id: 3,
    title: "Die For You",
    artist: "The Weeknd & Ariana Grande",
    duration: "04:12",
    image: "https://picsum.photos/300/300?random=3"
  },
  {
    id: 4,
    title: "Save Your Tears",
    artist: "The Weeknd",
    duration: "03:35",
    image: "https://picsum.photos/300/300?random=4"
  },
  {
    id: 5,
    title: "As It Was",
    artist: "Harry Styles",
    duration: "02:47",
    image: "https://picsum.photos/300/300?random=5"
  },
  {
    id: 6,
    title: "Levitating",
    artist: "Dua Lipa",
    duration: "03:23",
    image: "https://picsum.photos/300/300?random=6"
  },
  {
    id: 7,
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    duration: "02:21",
    image: "https://picsum.photos/300/300?random=7"
  },
  {
    id: 8,
    title: "Sunflower",
    artist: "Post Malone & Swae Lee",
    duration: "02:38",
    image: "https://picsum.photos/300/300?random=8"
  },
  {
    id: 9,
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: "03:53",
    image: "https://picsum.photos/300/300?random=9"
  },
  {
    id: 10,
    title: "Bad Habits",
    artist: "Ed Sheeran",
    duration: "03:51",
    image: "https://picsum.photos/300/300?random=10"
  }
];



function Home() {
  const [tracks, settracks] = useState(mockTracksData);

  return (
    <main className="home-container">
      <div className="home-header">
        <h1 className="home-title">
          SoundCloud <span className="title-gradient">Downloader</span>
        </h1>
        <p className="home-subtitle">
          Convert and download SoundCloud tracks & playlists to MP3 in high quality
        </p>
      </div>

      <div className="block-input">
        <FormInput />
      </div>

      <div className="track-list-section">
        <div className="track-list-header">
          <h2 className="track-list-title">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
            <span>Tracks List</span>
            <span className="track-count-badge">{tracks.length}</span>
          </h2>
        </div>

        <div className="track-list">
          {tracks.map((track) => (
            <Track
              key={track.id}
              title={track.title}
              artist={track.artist}
              duration={track.duration}
              image={track.image}
            /> 
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;