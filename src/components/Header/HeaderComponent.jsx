import React, { useState } from 'react';
import HeaderWidget from './HeaderWidget';

function HeaderComponent() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <HeaderWidget toggle={ toggle } handleClick={ handleClick } />
    </>
  )
}

export default HeaderComponent