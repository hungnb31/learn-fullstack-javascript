import React from 'react';
import PropTypes from 'prop-types';

export default class Contest extends React.Component {
  render() {
    return (
      <div className="Contest">
        {this.props.id}
      </div>
    );
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired
};