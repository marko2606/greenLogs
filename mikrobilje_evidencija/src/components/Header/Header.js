import React from 'react';
import '../../App.scss';
import HeaderItem from './HeaderItem';



class Header extends React.PureComponent {

  renderItems = () => {
    return this.props.titleOptions.map(item => {
      return (
        <HeaderItem
          changeActivePage={this.props.changeActivePage}
          currentlyActive={ this.props.currentlyActive }
          itemName={ item }
        />
      );
    })
  };

  render() {
    return (
      <div className="header">
        { this.renderItems() }
      </div>
    )
  }
}

export default Header;