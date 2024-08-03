import React from "react";
import Link from "next/link";
import { Logo } from "../Logos/Logo";
import { Button } from "../Buttons/Button";


export const TopNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[--white-primary] dotted-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo size="nav" />
          </div>
          <div className="flex items-center space-x-4">
            <Button text="Home" href="/" variant="secondary" />
            <Button text="About" href="/about" variant="secondary" />
            <Button text="Contact" href="/contact" variant="primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};
