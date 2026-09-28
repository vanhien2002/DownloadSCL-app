import React from 'react';

// MẢNH 1: CÁI KHUNG NGOÀI CÙNG (Chứa viền, màu nền, hiệu ứng hover)
export const Card = ({ children, className = "" }) => {
  return (
    <div className={`border border-[#333] bg-white/5 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2.5 hover:bg-white/10 hover:border-[#ff5500]/30 hover:shadow-[0_20px_40px_rgba(255,85,0,0.1)] ${className}`}>
      {children} 
    </div>
  );
};

// MẢNH 2: ICON
export const CardIcon = ({ children, className = "" }) => {
  return (
    <div className={`text-5xl mb-6 bg-[#ff5500]/10 w-20 h-20 flex items-center justify-center rounded-full border border-[#ff5500]/20 ${className}`}>
      {children}
    </div>
  );
};

// MẢNH 3: TIÊU ĐỀ
export const CardTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-2xl font-semibold mb-4 text-slate-50 ${className}`}>
      {children}
    </h3>
  );
};

// MẢNH 4: NỘI DUNG CHỮ
export const CardDescription = ({ children, className = "" }) => {
  return (
    <p className={`text-slate-400 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};