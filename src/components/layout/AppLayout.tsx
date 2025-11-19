import { ReactNode } from "react";
import { FooterMenu } from "./FooterMenu";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/grid copy.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          zIndex: 1
        }}
      />

      <div
        className="fixed top-0 left-0 w-20 h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(170, 127, 251, 0.15), transparent)',
          zIndex: 2
        }}
      />
      <div
        className="fixed top-0 right-0 w-20 h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(170, 127, 251, 0.15), transparent)',
          zIndex: 2
        }}
      />

      <main className="flex-1 relative" style={{ zIndex: 10 }}>{children}</main>
      <div className="relative" style={{ zIndex: 10 }}>
        <FooterMenu />
      </div>
    </div>
  );
};
