import React from 'react';
import styles from '../scss/Header.module.scss';

export const Header: React.FC = () => {
  const [activeIndex, setActive] = React.useState(0);

  return (
    <div className={styles.container}>
      <span className={styles.logo}>My Contacts</span>
      <div className={styles.sections}>
        <section className={activeIndex === 0 && styles.active} onClick={() => setActive(0)}>
          All contacts
        </section>
        <section className={activeIndex === 1 && styles.active} onClick={() => setActive(1)}>
          Create contact
        </section>
      </div>
    </div>
  );
};
