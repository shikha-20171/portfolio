import "./globals.css";

export const metadata = {
  title: "Shikha Gour | Full Stack Developer",
  description:
    "Animated developer portfolio for Shikha Gour featuring projects, internships, skills, and full-stack experience."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
