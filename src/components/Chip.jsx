export default function Chip({ label, variant }) {
  return (
    <span className={`chip chip--${variant}`}>
      {label}
    </span>
  );
}
