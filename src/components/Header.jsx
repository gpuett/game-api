import React from 'react';
import Search from './Search';

function Header(){
  return(
    <div>
      <h1>Game Search</h1>
      <em>Search for a game:</em>
      <Search/>
    </div>
  );
}

export default Header;
