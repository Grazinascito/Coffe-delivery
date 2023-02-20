import { ReactNode } from "react";

export interface IntroItemsProps {
  children: ReactNode;
  icons: string;
  alt: string;
}

export const IntroItems = ({ children, icons, alt }: IntroItemsProps) => {
  return (
    <div>
      <img src={icons} alt={alt} />
      <span>{children}</span>
    </div>
  );
};
