import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import MobileDropdownMenu from "./MobileDropdownMenu";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        <HamburgerIcon />
      </button>

      {/* Mobile Dropdown Menu — just rendered conditionally */}
      {isOpen && (
        <div className="fixed top-14 left-0 w-full z-50">
          <MobileDropdownMenu isOpen onClose={toggleMenu} />{" "}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
