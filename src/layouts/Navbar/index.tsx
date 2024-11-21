import NavbarDrower from "./NavbarDrower";
interface NavBarProps {
  isOpen: boolean;
}
function NavBar({ isOpen }: NavBarProps) {
  return (
    <div>
      <NavbarDrower isOpen={isOpen} />
    </div>
  );
}

export default NavBar;
