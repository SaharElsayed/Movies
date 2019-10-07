import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Button.scss';

const PrimaryButton = ({ text, icon, size, order, dir, className }) => {

  return (
    <React.Fragment>
      <Button className={`d-flex button ${className}`}>
        <FontAwesomeIcon
          icon={icon}
          size={size}
          className={`order-${order} m${dir}-2`}
        />
        {text}
      </Button>
    </React.Fragment>
  );
};

export default PrimaryButton;