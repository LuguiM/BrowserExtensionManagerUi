
import '../styles/radioGroup.css';

export default function FilterRadioGroup({
  name = 'status',
  options = [],
  selected = '',
  onChange = () => {},
}) {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="input-radio-label">
          <input
            type="radio"
            name={name}
            className="input-radio"
            value={option.value}
            checked={option.value === selected}
            onChange={e => onChange(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
