export default function Panel({
  title,
  subtitle,
  children,
  className = "",
}) {
  const classes = className ? `panel ${className}` : "panel";

  return (
    <div className={classes}>
      {(title || subtitle) && (
        <header className="panelHeader">
          {title && <h2 className="sectionTitle">{title}</h2>}
          {subtitle && <p className="panelSubtitle">{subtitle}</p>}
        </header>
      )}

      {children}
    </div>
  );
}

