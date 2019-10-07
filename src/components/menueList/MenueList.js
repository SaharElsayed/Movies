import React from 'react';
import PrimaryButton from '../button/Button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './MenueList.scss';

class MenueList extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <React.Fragment>
        <h2>{title.toUpperCase()}</h2>
        <ul className='list'>
          <li className="list__item">
            <PrimaryButton
              text='Popular'
              className='btn-block list__btn'
              icon={faArrowLeft}
              order='0'
              size='lg'
              dir='r'
            />
          </li>
          <li className="list__item">
            <PrimaryButton
              text='Popular'
              className='btn-block list__btn'
              icon={faArrowLeft}
              order='0'
              size='lg'
              dir='r'
            />
          </li>
        </ul>
      </React.Fragment>
    )
  }
}

export default MenueList;