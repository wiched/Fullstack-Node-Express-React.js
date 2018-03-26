import React, { Fragment, Component } from 'react';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a>Login With Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Header;
