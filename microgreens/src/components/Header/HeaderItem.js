import React from 'react';
import '../../App.scss';

class HeaderItem extends React.PureComponent {

  renderStyle = () => {
    return this.props.currentlyActive === this.props.itemName ?
      {
        textDecorationLine: 'underline',
        textDecorationStyle: 'wavy'
      } : null
  };

  render() {
    return (
      <div onClick={() =>this.props.changeActivePage(this.props.itemName)}>
        <h3 style={ this.renderStyle() }>{ this.props.itemName }</h3>
      </div>
    )
  }
}

export default HeaderItem;