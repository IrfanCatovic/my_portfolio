import { useEffect, useRef, useState } from "react";
import "./reveal.css";

function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  variant = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal-on-scroll",
    `reveal-on-scroll--${variant}`,
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
