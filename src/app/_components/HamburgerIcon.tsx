import Image from "next/image";

const HamburgerIcon = () => {
  return (
    <div>
      <Image
        src={"/images/icons/menu-mobile.svg"}
        alt={"Hamburger Menu"}
        width={24}
        height={24}
      />
    </div>
  );
};

export default HamburgerIcon;
