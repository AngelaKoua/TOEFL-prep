import "./globals.css";
import Rail from "@/components/Rail";

export const metadata = {
  title: "Atelier TOEFL",
  description:
    "Plateforme personnelle de preparation au TOEFL iBT, format 2026 : 200 exercices en reading, listening, writing et speaking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Karla:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="shell">
          <Rail />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
