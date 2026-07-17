import { useEffect, useId, useState } from "react";
import { navLinks, site } from "../../data/site";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo" aria-hidden="true">
            {site.initials}
          </span>
          <span className="navbar__name">{site.name}</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav
          id={menuId}
          className={`navbar__nav ${open ? "navbar__nav--open" : ""}`}
          aria-label="Primary"
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="navbar__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {open ? (
          <button
            type="button"
            className="navbar__backdrop"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
