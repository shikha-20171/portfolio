import "./globals.css";

export const metadata = {
  title: "Shikha Gour | Premium Full Stack Developer Portfolio",
  description:
    "Premium developer portfolio for Shikha Gour featuring full-stack projects, internships, modern product thinking, and polished web experiences."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
