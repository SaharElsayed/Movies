import React from 'react';
import Button from '../button/Button';
import {connect} from 'react-redux';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './List.scss';
import history from '../../app/history';
class List extends React.Component {
  render(){
    const { title, links, activeLink, handleClick } = this.props;
    console.log(history);
    
    return (
      <React.Fragment>
        <h3>{title}</h3>
        <ul className='list'>
          {
            links && (links.length > 0) &&
            links.map(link => {
              return (
                <li
                  className={`list__item ${link.id === activeLink ? "active_item" : ""}`}
                  key={link.id}
                  onClick={() => handleClick(link.api, link.id, link.name)}
                >
                  <Button
                    text={link.name}
                    className='btn-block list__btn'
                    icon={link.icon || faDotCircle}
                    order='0'
                    size='lg'
                    dir='r'
                  />
                </li>
              )
            })}
        </ul>
      </React.Fragment>
    )
  }
}
const mapStateToprops = state => {
  return { ...state };
}
export default connect(mapStateToprops)(List);