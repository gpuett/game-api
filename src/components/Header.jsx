import React from 'react';
import Search from './Search';

function Header(){
  return(
    <div>
      <h1>Giant Bomb</h1>
      <em>Search for a game:</em>
      <Search/>
    </div>
  );
}

export default Header;
