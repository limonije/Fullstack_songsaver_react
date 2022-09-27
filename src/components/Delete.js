import React from 'react'

function Delete({clickButton}) {
    return (
      <div className="Delete">
        <button onClick={clickButton}>Empty All Songlists</button>
      </div>
    );
}

export default Delete