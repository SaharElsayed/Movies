import React from 'react';
import PrimaryButton from '../button/Button';
import './List.scss';

const List = ({ title, links, activeLink, handleClick }) => {

  return (
    <React.Fragment>
      <h2>{title.toUpperCase()}</h2>
      <ul className='list'>
        {links.map(link => {
          return (
            <li
              className={link.className + ' ' + (link.id === activeLink ? "active_item" : "")}
              key={link.id}
              onClick={() => handleClick(link.id)}
            >
              <PrimaryButton
                text={link.name}
                className='btn-block list__btn'
                icon={link.icon}
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