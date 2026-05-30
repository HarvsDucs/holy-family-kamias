import "./globals.css";

export const metadata = {
  title: "Holy Family Parish – Kamias | Roman Catholic Church",
  description:
    "Holy Family Parish in West Kamias, Quezon City — a Roman Catholic community. Find Mass schedules, confession, baptism, sacraments, and how to reach the parish office.",
  keywords: [
    "Holy Family Parish",
    "Kamias",
    "Quezon City",
    "Roman Catholic Church",
    "Mass schedule",
    "Catholic Church Kamias",
  ],
  openGraph: {
    title: "Holy Family Parish – Kamias",
    description:
      "A Roman Catholic community in West Kamias, Quezon City. Mass schedules, sacraments, and parish life.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
