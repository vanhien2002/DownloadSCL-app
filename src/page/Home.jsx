import FormInput from '../components/FormInput.jsx';
import './Home.css';
import Track from '../components/Track.jsx'

function Home() {
    return (
        <main className="home-container">
            <div className="home-header">
                <h1 className="home-title">SoundCloud Downloader</h1>
                <p className="home-subtitle">Convert and download SoundCloud tracks & playlists to MP3 in high quality</p>
            </div>
            <div className="block-input">
                <FormInput />
            </div>
            <div>
                <Track/>
            </div>
        </main>
    );
}

export default Home;