import React from 'react';
import { connect } from 'react-redux';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import history from '../../app/history';
import './List.scss';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      mobile: false
    }
  }
  componentDidMount() {
    this.setState({ mobile: this.props.mobile });
  }
  render() {
    const { title, links, activeLink, handleClick } = this.props;
    const { pathname } = history.location;
    const { mobile } = this.state;
    return (
      <React.Fragment>
        <h3 className={`${mobile ? 'text-white mb-4' : ''}`}>{title}</h3>
        <div className="list">
          {
            links && (links.length > 0) &&
            links.map(link => {
              return (
                <a className="menu-item" key={link.id}>
                  <div
                    className={`
                    list__item 
                    ${(link.id === activeLink && pathname === '/Movies' && !mobile) ? "active_item" : ''}
                    ${(link.id === activeLink && pathname === '/Movies' && mobile) ? 'active_item_mobile' : ''}
                    `}
                    key={link.id}
                    onClick={() => handleClick(link.api, link.id, link.name)}
                  >
                    <Button
                      text={link.name}
                      className={`btn-block list__btn`}
                      icon={link.icon || faDotCircle}
                      order='0'
                      size='sm'
                      dir='r'
                    />
                  </div>
                </a>
              )
            })}
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToprops = state => {
  return { ...state };
}
export default connect(mapStateToprops)(List);