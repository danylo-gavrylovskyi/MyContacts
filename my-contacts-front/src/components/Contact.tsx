import React from 'react';
import { ContactType } from '../pages/Create';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from '../scss/Contact.module.scss';

interface ContactPropsType extends ContactType {
  needRerender: boolean;
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Contact: React.FC<ContactPropsType> = ({
  name,
  surname,
  email,
  phoneNumber,
  personalId,
  needRerender,
  setRerender,
}) => {
  const deleteBtnHandler = async (id: string) => {
    try {
      await axios.delete(`https://localhost:7120/api/Contacts/${Number(id)}`);
      setRerender(!needRerender);
    } catch (error) {
      console.log('Error when deleting this contact ', error);
      alert('Error when deleting this contact');
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.data}>
        <h1>{name}</h1>
        <h1>{surname}</h1>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          to="/create"
          state={{ isEditing: true, name, surname, email, phoneNumber, personalId }}>
          <button className={styles.editBtn}>Edit</button>
        </Link>
        <button onClick={() => deleteBtnHandler(personalId)} className={styles.delBtn}>
          Delete
        </button>
      </div>
    </section>
  );
};
