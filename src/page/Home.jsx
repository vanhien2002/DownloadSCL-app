import FormInput from "../components/FormInput.jsx";
import "./Home.css";
import Track from "../components/Track.jsx";
import { useState } from "react";
import Pagination from "../components/Pagination.jsx";
import { Card, CardIcon, CardTitle, CardDescription } from "../components/FeatureCard.jsx";

// Dữ liệu 100 bài hát thử nghiệm
const mock100Tracks = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `SoundCloud Track #${index + 1}`,
  artist: `Nghệ sĩ ${index + 1}`,
  duration: `0${Math.floor(Math.random() * 3) + 2}:${Math.floor(Math.random() * 50) + 10}`,
  image: `https://picsum.photos/300/300?random=${index + 1}`
}));


function Home() {
  const [tracks, settracks] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerpage = 3;

  const indexOfLastTrack = currentPage * itemPerpage;
  const indexOfFirstTrack = indexOfLastTrack - itemPerpage;
  const currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack);
  const totalPages = Math.ceil(tracks.length / itemPerpage);

  const handlePageChange = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  const handleStartSubmitForm = (url, status, trackData) => {
    if(status == "susscess")
    {
      if (trackData) {
        settracks([trackData]); 
      } else {
        settracks(mock100Tracks); 
      }
    }
    else {settracks([]);}
  }

  const handleStartDownload = (url) => {
    // Hiển thị mock data sau khi submit URL hợp lệ
    settracks(mock100Tracks);
    setcurrentPage(1); // Reset về trang 1
  };

  return (
    <main className="home-container"> 
      {/* Animated background elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      
      <div className="home-header">
        <h1 className="home-title">
          SoundCloud <span className="title-gradient">Downloader</span>
        </h1>
        <p className="home-subtitle">
          Công cụ tải nhạc và danh sách phát từ SoundCloud cực nhanh, chất lượng cao và hoàn toàn miễn phí. Hãy trải nghiệm ngay nhé!
        </p>
      </div>

      <div className="block-input">
        <FormInput onStartDownload={handleStartDownload} handleStartSubmitForm = {handleStartSubmitForm}/>
      </div>

      {tracks.length > 0 && (
        <>
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
                <span>Danh sách bản nhạc của bạn</span>
                <span className="track-count-badge">{tracks.length}</span>
              </h2>
            </div>

            <div className="track-list w-8/10 mx-auto">
              {currentTracks.map((track) => (
                <Track
                  key={track.id}
                  title={track.title}
                  artist={track.artist}
                  duration={track.duration}
                  image={track.image}
                  onDownload={() => window.open(track.urlDownload, "_blank")}
                />
              ))}
            </div> 
          </div> 
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {/* Hướng dẫn sử dụng Section */}
      <section className="how-to-section">
        <div className="section-header">
          <h2 className="section-title">Cách Tải Nhạc Đơn Giản</h2>
          <p className="section-subtitle">Chỉ với 3 bước cơ bản, bạn đã có ngay bản nhạc yêu thích</p>
        </div>
        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <h3>Sao chép liên kết</h3>
            <p>Mở SoundCloud và sao chép đường dẫn (URL) của bài hát hoặc danh sách phát bạn muốn tải.</p>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <h3>Dán vào ô nhập</h3>
            <p>Dán đường dẫn vừa sao chép vào ô trống ở phía trên và nhấn biểu tượng Tải xuống.</p>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <h3>Tải về máy</h3>
            <p>Đợi giây lát để hệ thống xử lý, sau đó nhấn Tải về để lưu file MP3 chất lượng cao.</p>
          </div>
        </div>
      </section>

      {/* Tính năng nổi bật Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Tính Năng Nổi Bật</h2>
          <p className="section-subtitle">Vì sao hàng ngàn người dùng tin tưởng chúng tôi?</p>
        </div>
        <div className="features-grid">
          <Card>
            <CardIcon>⚡</CardIcon>
            <CardTitle className="!text-gray-800 dark:!text-slate-50">Tốc độ siêu tốc</CardTitle>
            <CardDescription className="!text-gray-600 dark:!text-slate-400">
              Hệ thống xử lý mạnh mẽ giúp chuyển đổi và tải file chỉ trong vài giây.
            </CardDescription>
          </Card>
          
          <Card>
            <CardIcon>🎧</CardIcon>
            <CardTitle className="!text-gray-800 dark:!text-slate-50">Chất lượng cao nhất</CardTitle>
            <CardDescription className="!text-gray-600 dark:!text-slate-400">
              Giữ nguyên chất lượng âm thanh gốc, lên đến 320kbps MP3 tuyệt hảo.
            </CardDescription>
          </Card>
          
          <Card>
            <CardIcon>🆓</CardIcon>
            <CardTitle className="!text-gray-800 dark:!text-slate-50">Miễn phí 100%</CardTitle>
            <CardDescription className="!text-gray-600 dark:!text-slate-400">
              Không cần đăng ký, không giới hạn số lần tải, hoàn toàn miễn phí trọn đời.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>📱</CardIcon>
            <CardTitle className="!text-gray-800 dark:!text-slate-50">Hỗ trợ mọi thiết bị</CardTitle>
            <CardDescription className="!text-gray-600 dark:!text-slate-400">
              Sử dụng mượt mà trên cả điện thoại, máy tính bảng và PC.
            </CardDescription>
          </Card>
        </div>
      </section>

    </main>
  );
}

export default Home;
