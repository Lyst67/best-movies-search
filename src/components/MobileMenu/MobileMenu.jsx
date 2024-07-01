import css from './MobileMenu.module.css';
import { IoClose } from 'react-icons/io5';
import Navigation from 'components/Navigation/Navigation';

export default function MobileMenu({ isVisible, onClose }) {
  const handleModalClose = () => {
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div onClick={handleModalClose} className={css.backdrop}></div>
      )}
      <div
        className={
          isVisible
            ? `${css.mobile_menu} ${css.is_open} `
            : `${css.mobile_menu}`
        }
      >
        <IoClose className={css.close_button} onClick={handleModalClose} />
        <div className={css.nav_menu}>
          <Navigation onClose={handleModalClose} />
        </div>
      </div>
    </>
  );
}
