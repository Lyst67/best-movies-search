import React, { useState } from 'react';
import css from './Header.module.css';
import Navigation from 'components/Navigation/Navigation';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [shown, setShown] = useState(false);

  const handleOpenMenu = () => {
    setShown(true);
    document.body.style.overflow = 'hidden';
  };
  const onClose = () => {
    setShown(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={css.header}>
      <div className={css.nav_buttons}>
        <Navigation onClose={onClose} />
      </div>
      <h1 className={css.title}>Best Movies</h1>
      <GiHamburgerMenu className={css.burger_button} onClick={handleOpenMenu} />
      <MobileMenu isVisible={shown} onClose={onClose} />
    </div>
  );
};
export default Header;
