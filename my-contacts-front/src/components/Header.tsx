import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from '../scss/Header.module.scss';

export const Header: React.FC = () => {
  const location = useLocation();
  const [activeIndex, setActive] = React.useState(0);

  React.useEffect(() => {
    setActive(location.pathname === '/create' ? 1 : 0);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.logo}>My Contacts</span>
      <div className={styles.sections}>
        <Link className={styles.Link} to="/">
          <section className={activeIndex === 0 ? styles.active : ''} onClick={() => setActive(0)}>
            All contacts
          </section>
        </Link>
        <Link className={styles.Link} to="/create">
          <section className={activeIndex === 1 ? styles.active : ''} onClick={() => setActive(1)}>
            Create contact
          </section>
        </Link>
      </div>
    </div>
  );
};
