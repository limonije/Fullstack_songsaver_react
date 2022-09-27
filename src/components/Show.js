import React from 'react'

function Show({clickButton}) {
    return (
      <div className="Show">
        <button onClick={clickButton}>Undo Genre Filter</button>
      </div>
    );
}

export default Show