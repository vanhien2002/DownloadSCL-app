import './css/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-block">
      <div>copyright - {year}</div>
      <div>SoundCloud Downloader</div>
    </footer>
  );
}
export default Footer;
