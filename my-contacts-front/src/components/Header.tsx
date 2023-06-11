import React from 'react';
import styles from '../scss/Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>My Contacts</span>
      <div>
        <section>All contacts</section>
        <section>Create contact</section>
      </div>
    </div>
  );
};
