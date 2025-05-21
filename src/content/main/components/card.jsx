import { useState } from 'react';
import '../styles/card.css';
import Switch from './switch';
import Modal from './modal';


export default function Card({ title, description, icon, status, onRemove, onStatusChange }) {

  const [isOpen, setIsOpen] = useState(false)

  const handleSwitch = (checked) => {
    onStatusChange(checked, title);
  }

  const onRemovehandle = () => {
    setIsOpen(true);
  }

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleContinue = () => {
    onRemove(title)
    handleCancel();
    console.log('Continue action');
  };

  return (
    <>

      <div className="card">
        <div className="card-header">
          <img src={icon} alt="icon_image" />
          <div className="header-text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="card-actions">
          <button onClick={() => onRemovehandle()}>Remove</button>
          <Switch onChange={handleSwitch} checked={status} />
        </div>
      </div>
      <Modal
        open={isOpen}
        titleContent={<h2>Confirm Action</h2>}
        content={<p>Are you sure you want to proceed?</p>}
        closeIcon="X"
        actions={
          <div className="custom-actions">
            <button id='cancelBtn' onClick={handleCancel}>Cancel</button>
            <button onClick={handleContinue}>Continue</button>
          </div>
        }
      />

    </>
  );
}
