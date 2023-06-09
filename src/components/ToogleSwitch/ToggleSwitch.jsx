import "./ToggleSwitch.scss";
import React from "react";
function ToggleSwitch({ checked, onChange }) {
  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='toggle-switch-checkbox'
        name='toggleSwitch'
        id='toggleSwitch'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className='toggle-switch-label' htmlFor='toggleSwitch'>
        <span className='toggle-switch-inner' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  );
}

export default ToggleSwitch;
