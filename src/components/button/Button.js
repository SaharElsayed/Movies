import React from 'react';
import { Button as PrimaryButton } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Button.scss';

const Button = ({ text, icon, size, order, dir, className, action }) => {

  return (
    <PrimaryButton className={`d-flex button align-items-center ${className}`} onClick={action}>
      <FontAwesomeIcon
        icon={icon}
        size={size}
        className={`order-${order} m${dir}-2`}
      />
      {text}
    </PrimaryButton>
  );
};

export default Button;