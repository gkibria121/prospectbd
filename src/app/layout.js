import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <script src="js/jquery.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/jquery.fancybox.js"></script>
      <script src="js/appear.js"></script>
      <script src="js/owl.js"></script>
      <script src="js/wow.js"></script>
      <script src="js/parallax.min.js"></script>
      <script src="js/tilt.jquery.min.js"></script>
      <script src="js/jquery.paroller.min.js"></script>
      <script src="js/jquery-ui.js"></script>
      {/* <script src="js/script.js"></script> */}
      </body>
    </html>
  );
}