import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl bg-background/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
      <nav aria-label="Navegação principal" className="flex items-center justify-between px-6 py-3">
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
