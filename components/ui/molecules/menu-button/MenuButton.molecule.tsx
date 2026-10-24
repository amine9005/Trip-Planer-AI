"use client";
import { Button } from "@/components/ui/atoms/button/button";
import { MenuIcon, XIcon } from "lucide-react";

interface MenuButtonProps {
  setIsOpen: (state: boolean) => void;
  isOpen: boolean;
}

const MenuButtonMolecule = ({ isOpen, setIsOpen }: MenuButtonProps) => {
  return (
    <Button
      name="Navigation Button"
      className="md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
    </Button>
  );
};

export default MenuButtonMolecule;
