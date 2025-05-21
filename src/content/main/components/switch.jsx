
import '../styles/switch.css'; 

export default function Switch({ checked, disabled, onChange }) {
  return (
    <input
      className="switch"
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={e => onChange(e.target.checked)}
    />
  );
}
