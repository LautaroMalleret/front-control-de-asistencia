import "./globals.css";

// import Footer from "./components/Footer";
import TopBar from "./components/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen`}>
        <main className="flex-grow">
          <TopBar />
          {children}
        {/* <Footer /> */}
        </main>
        
      </body>
      
    </html>
  );
}
