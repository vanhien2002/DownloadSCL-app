"use client";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className=" bg-[#6e6e6e] 
      h-29
     border-t 
     flex 
     justify-center
     items-center
     text-amber-50 
     rounded-sm
     "
    >
      <div className="m-2">copyright - {year}</div>
      <div className="m-2">SoundCloud Downloader</div>
    </footer>
  );
}
export default Footer;
