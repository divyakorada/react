import React from 'react'
import Columns from './Columns'

function Table() {
  return (
    <div className="containerFtn">
      <h2 className="ctn-head">Fragment</h2>
      <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This describes the Fragment Demo component</p>
      </React.Fragment>
      <table className="fragmentTable">
        <tbody>
          <tr>
              <Columns/>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table

// fragments let you group a list of children elements with out adding extra nodes to the DOM.
