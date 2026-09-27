import { useEffect, useId, useRef, useState } from "react";
import { navLinks, site } from "../../data/site";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const menuId = useId();
  const progressRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        progressRef.current?.style.setProperty("--progress", progress);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
          className={`navbar__toggle ${open ? "navbar__toggle--open" : ""}`}
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
                  className={`navbar__link ${
                    activeId === link.id ? "navbar__link--active" : ""
                  }`}
                  aria-current={activeId === link.id ? "true" : undefined}
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
      <span ref={progressRef} className="navbar__progress" aria-hidden="true" />
    </header>
  );
}

export default Navbar;
