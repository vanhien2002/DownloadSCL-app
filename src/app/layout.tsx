import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";

export const metadata = {
  title: "downloadscl-app",
  description: "DownloadSCL App",
};


const ItemHeaderPropos = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <Header items={ItemHeaderPropos} />
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
