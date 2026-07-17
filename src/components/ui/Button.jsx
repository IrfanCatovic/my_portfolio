import "./ui.css";

function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
  external = false,
  disabled = false,
  onClick,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
