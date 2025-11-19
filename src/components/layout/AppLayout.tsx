import { ReactNode } from "react";
import { FooterMenu } from "./FooterMenu";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <FooterMenu />
    </div>
  );
};
