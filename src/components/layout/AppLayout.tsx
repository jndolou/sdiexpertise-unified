import { ReactNode } from "react";
import { FooterMenu } from "./FooterMenu";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/grid copy.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      />

      <div className="fixed top-0 left-0 w-16 h-full z-0 pointer-events-none"
           style={{ background: 'linear-gradient(to right, rgba(170, 127, 251, 0.1), transparent)' }} />
      <div className="fixed top-0 right-0 w-16 h-full z-0 pointer-events-none"
           style={{ background: 'linear-gradient(to left, rgba(170, 127, 251, 0.1), transparent)' }} />

      <main className="flex-1 relative z-10">{children}</main>
      <FooterMenu />
    </div>
  );
};
