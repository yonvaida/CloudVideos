/* eslint-disable linebreak-style */
import React, {PureComponent } from 'react';
import '../Style/nav.css';
import { NavLink } from 'react-router-dom';
import {Button} from '@material-ui/core'

class Navigation extends PureComponent {
  render() {
    return (
      <div id="mainNav" className="navbar navbar-expand-lg ">
            <Button variant="text" className="nav-item" activeClassName="active">
              <NavLink className="nav-link " to="/Movies" >Movies</NavLink>
            </Button>
            <Button variant="text" className="nav-item" activeClassName="active">
              <NavLink className="nav-link " to="/TvShows">Tv Shows</NavLink>
            </Button>
            <Button variant="text" className="nav-item" activeClassName="active">
              <NavLink className="nav-link " to="/Music">Music</NavLink>
            </Button>
      </div>
    );
  }
}

export default Navigation;
