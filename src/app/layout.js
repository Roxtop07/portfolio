import './globals.css';

export const metadata = {
  title: 'Manish Srivastav — Backend Developer & AI Engineer',
  description: 'Portfolio of Manish Srivastav — Backend Developer, AI Engineer, and Hackathon Winner.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise-bg">{children}</body>
    </html>
  );
}
