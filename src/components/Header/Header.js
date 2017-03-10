import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const Header = props => (<AppBar title={props.title} />);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
