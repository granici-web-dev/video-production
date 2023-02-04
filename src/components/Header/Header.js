import styles from './Header.module.scss';

function Header() {
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
            <a href="/" className={styles.registration}>Create free account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
