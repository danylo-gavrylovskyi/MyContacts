import React from 'react';
import axios from 'axios';

import { ContactType } from './Create';
import { Contact } from '../components/Contact';

import styles from '../scss/Home.module.scss';

export const Home: React.FC = () => {
  const [needRerender, setRerender] = React.useState(true);
  const [contacts, setContacts] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://localhost:7120/api/Contacts');
        setContacts(data);
      } catch (error) {
        console.log('Error:', error);
      }
    })();
  }, [setContacts, needRerender]);
  return (
    <div className={styles.relative}>
      <div className={styles.container}>
        {contacts.map((contact: ContactType) => (
          <Contact
            key={contact.personalId}
            needRerender={needRerender}
            setRerender={setRerender}
            {...contact}></Contact>
        ))}
      </div>
    </div>
  );
};
