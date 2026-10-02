"use client";
import ButtonDownload from "./ButtonDownload";
import "./css/Track.css";

interface TrackProps {
  image?: string;
  title?: string;
  artist?: string;
  duration?: string | number;
  onDownload?: () => void;
}

function Track({
  image = "https://i1.sndcdn.com/artworks-x9Ee1zlKgCXEq31K-f6dqlw-t1080x1080.jpg",
  title = "Starboy (feat. Daft Punk)",
  artist = "The Weeknd",
  duration = "03:50",
  onDownload,
}: TrackProps) {
  // Format duration helper if passed as number of seconds
  const formatDuration = (val: string | number) => {
    if (typeof val === "number") {
      const minutes = Math.floor(val / 60);
      const seconds = Math.floor(val % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    return val || "00:00";
  };

  const formattedDuration = formatDuration(duration);

  return (
    <div className="block-track mt-1.5">
      <div className="track-card">
        <div className="track-cover-container">
          <img
            className="img-track"
            src={image}
            alt={title}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              (e.target as HTMLImageElement).src =
                "https://i1.sndcdn.com/artworks-x9Ee1zlKgCXEq31K-f6dqlw-t1080x1080.jpg";
            }}
          />
          <div className="track-duration-badge h-5">
            <svg
              className="badge-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{formattedDuration}</span>
          </div>
        </div>

        <div className="track-details">
          <div className="track-main-info"> 
            <h3 className="track-title" title={title}>
              {title}
            </h3>
            <p className="track-artist"> 
            </p>
            <div className="meta-item">
              <svg
                className="meta-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="meta-label">Duration:</span>
              <span className="meta-value">{formattedDuration}</span>
            </div>
          </div>

          <div className="track-meta">
            <div className="track-action">
              <ButtonDownload
                text="Download MP3"
                size="sm"
                onClick={onDownload}
              />
            </div>
            <div className="track-action">
              <ButtonDownload
                text="Download MP3 320"
                size="sm"
                onClick={onDownload}
              />
            </div>
            <div className="meta-info-group">
              <div className="meta-item quality"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
