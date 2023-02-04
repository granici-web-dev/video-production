import styles from './Header.module.scss';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Header() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div className={styles.Header}>
        <div className={styles.wrapper}>
          <div className="Logo">
            <a href="/"><img src="./img/Header/Logo.svg" alt="Logo" /></a>
          </div>
          <div className={styles.textField}>
            <div className={styles.searchIcon}>
              <img src="./img/Header/search.svg" alt=""></img>
              <div className={styles.explore}>
                <select name="dog-names" id="dog-names">
                  <option value="explore">Explore</option>
                  <option value="dave">Dave</option>
                  <option value="pumpernickel">Pumpernickel</option>
                  <option value="reeses">Reeses</option>
                </select>
              </div>
              <input className={styles.searchInput} type="search" placeholder="Want to learn?"></input>
            </div>
          </div>
          <div className={styles.menuList}>
            <ul>
              <li><a href="/">Program</a></li>
              <li><a href="/">Enterprise</a></li>
              <li><a href="/">Universities</a></li>
            </ul>
          </div>
          <div className={styles.signButtons}>
            <a href="/">Sign In</a>
            <button onClick={openModal} className={styles.registration}>Create free account</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
