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
          backgroundImage: 'url(/grid%20copy.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.05
        }}
      />

      <div className="fixed top-0 left-0 w-8 h-full z-0 bg-gradient-to-r from-[#aa7ffb]/5 to-transparent pointer-events-none" />
      <div className="fixed top-0 right-0 w-8 h-full z-0 bg-gradient-to-l from-[#aa7ffb]/5 to-transparent pointer-events-none" />

      <main className="flex-1 relative z-10">{children}</main>
      <FooterMenu />
    </div>
  );
};
