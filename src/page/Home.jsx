import FormInput from "../components/FormInput.jsx";
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
    <main className="max-w-[900px] mx-auto px-6 py-16 flex flex-col items-center text-center relative z-10"> 
      {/* Animated background elements */}
      <div className="absolute rounded-full blur-[60px] -z-10 opacity-50 w-[300px] h-[300px] -top-[50px] -left-[100px] animate-[float_8s_ease-in-out_infinite_alternate] bg-[radial-gradient(circle,rgba(255,85,0,0.3)_0%,rgba(255,130,73,0.1)_100%)]"></div>
      <div className="absolute rounded-full blur-[60px] -z-10 opacity-50 w-[250px] h-[250px] bottom-[200px] -right-[80px] animate-[float_8s_ease-in-out_infinite_alternate] [animation-delay:-4s] bg-[radial-gradient(circle,rgba(170,59,255,0.3)_0%,rgba(192,132,252,0.1)_100%)]"></div>
      
      <div className="mb-9 flex flex-col items-center gap-3">
        <div className="inline-flex items-center px-4 py-2 bg-[#aa3bff]/10 text-[#aa3bff] text-sm font-semibold rounded-full mb-4 border border-[#aa3bff]/20 shadow-[0_4px_10px_rgba(170,59,255,0.05)] animate-[slideDown_0.6s_ease-out_forwards]">✨ Xin chào! Rất vui được hỗ trợ bạn</div>
        <h1 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold tracking-[-1.2px] leading-[1.15] m-0 text-[var(--text-h,#08060d)]">
          SoundCloud <span className="bg-[linear-gradient(135deg,#ff5500_0%,#ff8249_50%,#aa3bff_100%)] bg-clip-text text-transparent inline-block drop-shadow-[0_2px_8px_rgba(255,85,0,0.2)]">Downloader</span>
        </h1>
        <p className="text-[0.95rem] sm:text-[1.1rem] text-[var(--text,#6b6375)] max-w-[600px] leading-[1.6] font-normal mt-2 animate-[fadeIn_0.8s_ease-out_forwards]">
          Công cụ tải nhạc và danh sách phát từ SoundCloud cực nhanh, chất lượng cao và hoàn toàn miễn phí. Hãy trải nghiệm ngay nhé!
        </p>
      </div>

      <div className="w-full mb-11">
        <FormInput onStartDownload={handleStartDownload} handleStartSubmitForm = {handleStartSubmitForm}/>
      </div>

      {tracks.length > 0 && (
        <>
          <div className="w-full max-w-[650px] mx-auto">
            <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-[var(--border,#e5e4e7)] relative after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-[80px] after:h-[2px] after:bg-[linear-gradient(90deg,#ff5500,#aa3bff)] after:rounded-[2px]">
              <h2 className="text-[1.15rem] sm:text-[1.35rem] font-bold text-[var(--text-h,#08060d)] m-0 flex items-center gap-[0.6rem] text-left">
                <svg
                  className="w-[22px] h-[22px] text-[#ff5500] shrink-0"
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
                <span className="bg-[#ff5500]/12 text-[#ff5500] text-xs font-bold px-[10px] py-[2px] rounded-[20px] border border-[#ff5500]/25 ml-[0.4rem]">{tracks.length}</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 w-4/5 mx-auto">
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
      <section className="w-full mt-16 flex flex-col items-center">
        <div className="mb-10 text-center">
          <h2 className="text-[1.75rem] sm:text-2xl font-bold text-[var(--text-h,#08060d)] mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-[8px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[linear-gradient(90deg,#ff5500,#aa3bff)] after:rounded-[3px]">Cách Tải Nhạc Đơn Giản</h2>
          <p className="text-[1.05rem] text-[var(--text,#6b6375)] mt-4">Chỉ với 3 bước cơ bản, bạn đã có ngay bản nhạc yêu thích</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[900px]">
          <div className="bg-white/50 dark:bg-[#1f2028]/50 border border-[var(--border,#e5e4e7)] rounded-[20px] px-6 py-8 text-center transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[5px] hover:shadow-[var(--shadow)]">
            <div className="w-[50px] h-[50px] bg-[linear-gradient(135deg,#ff5500_0%,#aa3bff_100%)] text-white text-2xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_10px_rgba(255,85,0,0.3)]">1</div>
            <h3 className="text-[1.2rem] font-semibold text-[var(--text-h,#08060d)] mb-3">Sao chép liên kết</h3>
            <p className="text-[0.95rem] text-[var(--text,#6b6375)] leading-[1.5]">Mở SoundCloud và sao chép đường dẫn (URL) của bài hát hoặc danh sách phát bạn muốn tải.</p>
          </div>
          <div className="bg-white/50 dark:bg-[#1f2028]/50 border border-[var(--border,#e5e4e7)] rounded-[20px] px-6 py-8 text-center transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[5px] hover:shadow-[var(--shadow)]">
            <div className="w-[50px] h-[50px] bg-[linear-gradient(135deg,#ff5500_0%,#aa3bff_100%)] text-white text-2xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_10px_rgba(255,85,0,0.3)]">2</div>
            <h3 className="text-[1.2rem] font-semibold text-[var(--text-h,#08060d)] mb-3">Dán vào ô nhập</h3>
            <p className="text-[0.95rem] text-[var(--text,#6b6375)] leading-[1.5]">Dán đường dẫn vừa sao chép vào ô trống ở phía trên và nhấn biểu tượng Tải xuống.</p>
          </div>
          <div className="bg-white/50 dark:bg-[#1f2028]/50 border border-[var(--border,#e5e4e7)] rounded-[20px] px-6 py-8 text-center transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[5px] hover:shadow-[var(--shadow)]">
            <div className="w-[50px] h-[50px] bg-[linear-gradient(135deg,#ff5500_0%,#aa3bff_100%)] text-white text-2xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_10px_rgba(255,85,0,0.3)]">3</div>
            <h3 className="text-[1.2rem] font-semibold text-[var(--text-h,#08060d)] mb-3">Tải về máy</h3>
            <p className="text-[0.95rem] text-[var(--text,#6b6375)] leading-[1.5]">Đợi giây lát để hệ thống xử lý, sau đó nhấn Tải về để lưu file MP3 chất lượng cao.</p>
          </div>
        </div>
      </section>

      {/* Tính năng nổi bật Section */}
      <section className="w-full mt-16 flex flex-col items-center">
        <div className="mb-10 text-center">
          <h2 className="text-[1.75rem] sm:text-2xl font-bold text-[var(--text-h,#08060d)] mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-[8px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[linear-gradient(90deg,#ff5500,#aa3bff)] after:rounded-[3px]">Tính Năng Nổi Bật</h2>
          <p className="text-[1.05rem] text-[var(--text,#6b6375)] mt-4">Vì sao hàng ngàn người dùng tin tưởng chúng tôi?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]">
          <Card>
            <CardIcon>⚡</CardIcon>
            <CardTitle className="!text-[var(--text-h,#08060d)]">Tốc độ siêu tốc</CardTitle>
            <CardDescription className="!text-[var(--text,#6b6375)]">
              Hệ thống xử lý mạnh mẽ giúp chuyển đổi và tải file chỉ trong vài giây.
            </CardDescription>
          </Card>
          
          <Card>
            <CardIcon>🎧</CardIcon>
            <CardTitle className="!text-[var(--text-h,#08060d)]">Chất lượng cao nhất</CardTitle>
            <CardDescription className="!text-[var(--text,#6b6375)]">
              Giữ nguyên chất lượng âm thanh gốc, lên đến 320kbps MP3 tuyệt hảo.
            </CardDescription>
          </Card>
          
          <Card>
            <CardIcon>🆓</CardIcon>
            <CardTitle className="!text-[var(--text-h,#08060d)]">Miễn phí 100%</CardTitle>
            <CardDescription className="!text-[var(--text,#6b6375)]">
              Không cần đăng ký, không giới hạn số lần tải, hoàn toàn miễn phí trọn đời.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>📱</CardIcon>
            <CardTitle className="!text-[var(--text-h,#08060d)]">Hỗ trợ mọi thiết bị</CardTitle>
            <CardDescription className="!text-[var(--text,#6b6375)]">
              Sử dụng mượt mà trên cả điện thoại, máy tính bảng và PC.
            </CardDescription>
          </Card>
        </div>
      </section>

    </main>
  );
}

export default Home;
