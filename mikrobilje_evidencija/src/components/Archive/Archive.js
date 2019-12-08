import React, { Component } from 'react';

class Archive extends Component {
  render() {
    return (
      <div>
        <div>
          <table className="table">
            <tr>
              <th>Plant</th>
              <th>Planting date</th>
              <th>Quantity planted</th>
              <th>Time under light</th>
              <th>Harvest quantity</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Archive;