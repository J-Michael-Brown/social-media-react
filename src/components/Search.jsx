import React from 'react';

function Search(){
  const inputStyle = {
    padding: '10px',
    color: 'gray',
    borderRadius: '5px',
    borderStyle: 'none',
    marginTop: '15px',
    width: '200px',
    marginRight: '20px'
  };
  return (
    <div>
      <form>
        <input placeholder="Search" style={inputStyle}></input>
      </form>
    </div>
  );
}

export default Search;
