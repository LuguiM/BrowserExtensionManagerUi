import '../styles/card.css';
import Switch from './switch';

export default function Card({ title, description, icon, status, onRemove, onStatusChange }) {

    const handleSwitch = (checked) => {
        onStatusChange(checked, title);
    }

  return (
    <div className="card">
      <div className="card-header">
        <img src={icon} alt="icon_image" />
        <div className="header-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-actions">
        <button onClick={onRemove}>Remove</button>
        <Switch onChange={handleSwitch} checked={status} />
      </div>
    </div>
  );
}
