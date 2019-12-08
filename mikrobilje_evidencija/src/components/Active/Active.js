import React, { PureComponent } from 'react';

class Active extends PureComponent {
  render() {
    return (
      <div>
        <table className="table">
          <tr>
            <th>Plant</th>
            <th>Planting date</th>
            <th>Quantity planted</th>
            <th>Time under light</th>
            <button>DONE</button>
          </tr>
        </table>
        <button className='addNew'>
          <h4>ADD NEW</h4>
        </button>
      </div>
    );
  }
}

export default Active;