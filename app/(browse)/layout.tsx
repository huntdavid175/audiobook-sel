import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import { Providers } from "@/components/providers";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Dollar Book",
  description: "Audio book site for classic books",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <div>
        <Header />
        {children}
      </div>
    </Providers>
  );
};

export default layout;
