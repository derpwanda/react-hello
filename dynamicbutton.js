import React from 'react';

const DynamicButton = props => {
  return (
    <button style={{ backgroundColor: props.color }}>
      {props.buttonText}
    </button>
  )
}

export default DynamicButton;