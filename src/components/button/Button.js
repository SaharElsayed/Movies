import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Button.scss';

const PrimaryButton = (props) => {
  return (
    <React.Fragment>
      <Button className="button button_type_transparent" variant={props.bg}>
        {props.text}
        <FontAwesomeIcon icon={props.icon} size="lg" className='icon' />
      </Button>
    </React.Fragment>
  );
};

export default PrimaryButton;