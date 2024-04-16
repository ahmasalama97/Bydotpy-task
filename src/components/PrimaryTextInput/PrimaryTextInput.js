import React from 'react';
import PropTypes from 'prop-types';

const PrimaryTextInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <label
        style={{
          display: 'block',
          marginBottom: 5,
          color: '#344054',
          fontWeight: '500',
          fontSize: '14px',
        }}
      >
        {label}
      </label>
      <input
        {...props}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: 360,
          height: 44,
          padding: '10px 14px',
          border: '1px solid #D0D5DD',
          borderRadius: 8,
          boxSizing: 'border-box',
          backgroundColor: '#F9FAFB',
        }}
      />
    </div>
  );
};

PrimaryTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.func.isRequired,
};

export default PrimaryTextInput;
