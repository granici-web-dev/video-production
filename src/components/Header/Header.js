import styles from './Header.module.scss';

function Header() {
  return (
    <div className="container">
      <div className={styles.Header}>
        <div className={styles.wrapper}>
          <div className="Logo">
            <a href="/"><img src="./img/Header/Logo.svg" alt="Logo" /></a>
          </div>
          <div className="textField">
            <div className="searchIcon">
              <input className="searchInput" type="search" placeholder="Want to learn?"></input>
            </div>
          </div>
          <div className={styles.menuList}>
            <ul>
              <li><a href="/">Program</a></li>
              <li><a href="/">Enterprise</a></li>
              <li><a href="/">Universities</a></li>
            </ul>
          </div>
          <div className="signButtons">
            <a href="/">Sign In</a>
            <a href="/">Create free account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
