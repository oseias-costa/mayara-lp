import './globals.css'
import StyledComponentsRegistry from "./lib/registry";
import { Quicksand } from "next/font/google";
import Meta from './lib/Meta';

export const metadata = {
  title: "Técnica Exclusiva Mayara Bechi",
  description: "Preenchimento e Escultura Labial - Domine a técnica MB e entregue lábios perfeitos mas acima de tudo, com resultados satisfatórios e naturais.",
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
      <Meta />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
