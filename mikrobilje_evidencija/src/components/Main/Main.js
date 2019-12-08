import React from 'react';
import '../../App.scss';
import Header from '../Header/Header';
import Active from '../Active/Active';
import Archive from '../Archive/Archive';

const titleOptions = ['Active', 'Archive'];

class Main extends React.PureComponent {

  state = {
    currentlyActive: titleOptions[0]
  };

  changeActivePage = (page) => {
    this.setState({
      currentlyActive: page
    })
  };

  renderSelectedContent = () => {
    switch (this.state.currentlyActive) {
      case titleOptions[0]: {
        return <Active/>
      }
      case titleOptions[1]: {
        return <Archive/>
      }
      default: return null;
    }
  };

  render() {
    return (
      <div className="main">
        <Header
          titleOptions={titleOptions}
          currentlyActive={this.state.currentlyActive}
          changeActivePage={this.changeActivePage}
        />
        {this.renderSelectedContent()}
      </div>
    )
  }
}

export default Main;