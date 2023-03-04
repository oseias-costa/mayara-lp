// import './globals.css'
import StyledComponentsRegistry from "./lib/registry";
import { Quicksand } from "next/font/google";

export const metadata = {
  title: "Método Mayara Bechi",
  description: "Método Mayara Bechi",
};
const quicksand = Quicksand({
  weight: ["300", "400", "500", "700", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={quicksand.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </html>
  );
}
