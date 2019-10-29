import React from 'react';
import Button from '../button/Button';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './List.scss';

const List = ({ title, links, activeLink, handleClick }) => {
  console.log(links);

  return (
    <React.Fragment>
      <h2>{title.toUpperCase()}</h2>
      <ul className='list'>
        {links && (links.length > 0) &&
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

export default List;