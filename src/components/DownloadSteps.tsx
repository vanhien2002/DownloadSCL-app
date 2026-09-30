"use client";
import React from 'react';

const stepsDownloadData = [
  {
    id:1,
    title:'Sao chép liên kết',
    description:'Mở SoundCloud và sao chép đường dẫn (URL) của bài hát hoặc danh sách phát bạn muốn tải.'
  },
]


const stepsData = [
  {
    id: 1,
    title: 'Sao chép liên kết',
    description: 'Mở SoundCloud và sao chép đường dẫn (URL) của bài hát hoặc danh sách phát bạn muốn tải.',
  },
  {
    id: 2,
    title: 'Dán vào ô nhập',
    description: 'Dán đường dẫn vừa sao chép vào ô trống ở phía trên và nhấn biểu tượng Tải xuống.',
  },
  {
    id: 3,
    title: 'Tải về máy',
    description: 'Đợi giây lát để hệ thống xử lý, sau đó nhấn Tải về để lưu file MP3 chất lượng cao.',
  },
];

const DownloadSteps = () => {
  return (
    <section className="w-full mt-16 flex flex-col items-center">
      <div className="mb-10 text-center">
        <h2 className="text-[1.75rem] sm:text-2xl font-bold text-[var(--text-h,#08060d)] mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-[8px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[linear-gradient(90deg,#ff5500,#aa3bff)] after:rounded-[3px]">
          Cách Tải Nhạc Đơn Giản
        </h2>
        <p className="text-[1.05rem] text-[var(--text,#6b6375)] mt-4">
          Chỉ với 3 bước cơ bản, bạn đã có ngay bản nhạc yêu thích
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[900px]">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="bg-white/50 dark:bg-[#1f2028]/50 border border-[var(--border,#e5e4e7)] rounded-[20px] px-6 py-8 text-center transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[5px] hover:shadow-[var(--shadow)]"
          >
            <div className="w-[50px] h-[50px] bg-[linear-gradient(135deg,#ff5500_0%,#aa3bff_100%)] text-white text-2xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_10px_rgba(255,85,0,0.3)]">
              {step.id}
            </div>
            <h3 className="text-[1.2rem] font-semibold text-[var(--text-h,#08060d)] mb-3">
              {step.title}
            </h3>
            <p className="text-[0.95rem] text-[var(--text,#6b6375)] leading-[1.5]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadSteps;
