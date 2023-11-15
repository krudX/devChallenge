import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--ff-main" });

export const metadata = {
  title: "Simple Coffee Listing",
  description: "Simple Coffee Listing - devChallenges.io",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
