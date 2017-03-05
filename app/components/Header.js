import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';

class Header extends React.Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const active = { borderBottomColor: '#3f51b5' };
    const rightNav = this.props.user && this.props.token ? (
      <div className="nav-dropdown">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-dropdown-menu">
            <a href="#" className="navbar-avatar dropdown-toggle">
              <img src={this.props.user.picture || this.props.user.gravatar}/>
              {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
              <i className="caret"></i>
            </a>
            <ul className="nav-dropdown-menu">
              <li><Link to="/account">My Account</Link></li>
              <li><a href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    ) : (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup" activeStyle={active}>Sign up</Link></li>
      </ul>
    );
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">
              <svg width="92px" height="32px" viewBox="-87 89 268 93" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                  <defs></defs>
                  <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-87.000000, 81.000000)">
                      <g id="noun_577123_cc" transform="translate(0.000000, 7.000000)" fill-rule="nonzero" fill="#FFFFFF">
                          <path d="M0,58.5644172 L0,4.2208589 C0.686792453,2.08404908 2.08679245,0.685889571 4.22641509,0 L65.7735849,0 C67.9132075,0.685889571 69.3132075,2.08404908 70,4.2208589 L70,58.3006135 C69.3924528,60.1208589 68.2037736,61.4398773 66.6716981,62.5742331 C60.4641509,67.1644172 54.2566038,71.7546012 48.0754717,76.3711656 C43.8226415,79.5368098 39.6226415,82.7815951 35.3962264,86 L35.1320755,86 C35.0528302,85.8944785 34.9735849,85.7889571 34.8679245,85.709816 C24.5132075,78.0595092 14.1320755,70.4355828 3.7509434,62.8116564 C2.19245283,61.6509202 0.686792453,60.490184 0,58.5644172 Z M35.1056604,2.63803681 L5.91698113,2.63803681 C3.56603774,2.63803681 2.64150943,3.56134969 2.64150943,5.90920245 C2.64150943,22.8717791 2.64150943,39.8343558 2.61509434,56.7969325 C2.61509434,58.0631902 3.03773585,59.0128834 4.04150943,59.7251534 C5.17735849,60.5429448 6.33962264,61.3343558 7.4754717,62.1785276 C16.4037736,68.7472393 25.3056604,75.3423313 34.2075472,81.9374233 C34.7622642,82.3595092 35.1849057,82.7815951 36.0037736,82.1484663 C45.8037736,74.7883436 55.6566038,67.4546012 65.4830189,60.1208589 C66.7773585,59.1711656 67.3849057,57.9840491 67.3584906,56.3220859 C67.3056604,39.5705521 67.3320755,22.8190184 67.3320755,6.09386503 C67.3320755,3.48220859 66.4603774,2.61165644 63.845283,2.61165644 C54.2830189,2.63803681 44.6943396,2.63803681 35.1056604,2.63803681 Z" id="Shape"></path>
                          <path d="M29.7169811,39.5969325 C32.2,37.1171779 34.6037736,34.7165644 36.9811321,32.3159509 C41.3396226,27.9631902 45.6716981,23.6104294 50.0037736,19.2312883 C51.6415094,17.5693252 53.4113208,17.5429448 55.0754717,19.1785276 C56.290566,20.3656442 57.5056604,21.5791411 58.7207547,22.8190184 C60.2792453,24.4018405 60.3584906,26.1429448 58.8264151,27.6993865 C49.9245283,36.6423313 40.9962264,45.5588957 32.0415094,54.4490798 C30.5622642,55.9263804 28.8716981,55.8736196 27.3660377,54.396319 C22.2415094,49.3312883 17.1433962,44.2398773 12.0716981,39.1220859 C10.5660377,37.6184049 10.5924528,35.8773006 12.0716981,34.3472393 C13.3132075,33.0546012 14.5811321,31.7619632 15.9018868,30.5220859 C17.4867925,28.9920245 19.2037736,29.0447853 20.7622642,30.601227 C23.6943396,33.5558282 26.6264151,36.5104294 29.7169811,39.5969325 Z M18.2792453,31.9730061 C17.9358491,32.2368098 17.6716981,32.4214724 17.4075472,32.6588957 C16.3509434,33.7141104 15.3207547,34.7957055 14.2113208,35.8245399 C13.4716981,36.4840491 13.5245283,36.9588957 14.2113208,37.6447853 C19.0981132,42.4723926 23.9320755,47.3263804 28.7660377,52.1803681 C29.4528302,52.8662577 29.9018868,52.9190184 30.5886792,52.1803681 C32.2,50.4920245 33.8641509,48.8828221 35.5283019,47.2208589 C42.5018868,40.2564417 49.4490566,33.2920245 56.4490566,26.3539877 C57.2679245,25.5625767 57.3735849,25.0349693 56.4754717,24.2435583 C55.3924528,23.293865 54.3622642,22.2386503 53.3849057,21.1834356 C52.7509434,20.497546 52.3283019,20.5503067 51.6679245,21.1834356 C45.2490566,27.6466258 38.8301887,34.0834356 32.3849057,40.5202454 C30.3509434,42.5779141 28.9773585,42.5515337 26.9169811,40.4674847 C24.3283019,37.8822086 21.7660377,35.2969325 19.1773585,32.7380368 C18.9396226,32.5006135 18.6226415,32.2631902 18.2792453,31.9730061 Z" id="Shape"></path>
                      </g>
                      <text id="vettit" font-family="Futura-Bold, Futura" font-weight="bold" fill="#FFFFFF">
                          <tspan x="92" y="66">vettit</tspan>
                      </text>
                  </g>
              </svg>
            </IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/" activeStyle={active}>Home</IndexLink></li>
              <li><Link to="/contact" activeStyle={active}>Contact</Link></li>
              {<li><Link to="/org/applicants" activeStyle={active}>Applicants</Link></li>}
              {<li><Link to="/org/approved" activeStyle={active}>Approved</Link></li>}
            </ul>
            {rightNav}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
