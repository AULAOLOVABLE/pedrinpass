import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-[#0a0a0b]/80 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <nav aria-label="Navegação principal" className="flex items-center justify-between px-8 py-4">
        {/* Left Section: Logo + SearchBar */}
        <div className="flex items-center gap-6">
          <Logo />
          <SearchBar />
        </div>

        {/* Right Section: NavLinks + CTA */}
        <div className="flex items-center gap-2">
          <NavLinks />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
