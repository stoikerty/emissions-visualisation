import StyledComponentsRegistry from "./StyledComponentsRegistry";
import "./globals.css";
import Navigation from "src/components/Navigation";
import PageContainer from "src/components/PageContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Navigation />
        <PageContainer>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </PageContainer>
      </body>
    </html>
  );
}
