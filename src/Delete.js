import React from 'react'

function Delete({clickButton}) {
    return (
      <div className="Delete">
        <button onClick={clickButton}>Empty playlist</button>
      </div>
    );
  }

export default Delete