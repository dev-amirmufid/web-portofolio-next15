import type { Metadata } from "next";
import "../assets/css/style.css";
import "../assets/css/swap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Loader } from "@/components/common/Loader";
import { Cursor } from "@/components/common/Cursor";

import { Header } from "@/components/layout/Header";
    
export const metadata: Metadata = {
  title: "Amir Mufid",
  description: "Professional Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <Loader />
        
      <div className="site_container">
        {/* <!-- ====================================== Cusrsor ===================================== --> */}
        <Cursor />
        {/* <!-- ====================================== Cursor End ===================================== --> */}
          
        {/* <!-- ====================================== Header ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header End ===================================== --> */}

        {children}
      </div>
      </body>
    </html>
  );
}
