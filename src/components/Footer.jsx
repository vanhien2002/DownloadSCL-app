
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" h-14  border-t flex justify-center">
      <div className="m-2">copyright - {year}</div>
      <div className="m-2">SoundCloud Downloader</div>
    </footer>
  );
}
export default Footer;
