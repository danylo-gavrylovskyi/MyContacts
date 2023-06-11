import React from 'react';
import axios from 'axios';

import styles from '../scss/Create.module.scss';

type CreatePropsType = {
  id: number;
};

export const Create: React.FC<CreatePropsType> = ({ id }) => {
  interface FormDataType {
    PersonalId: string;
    Name: string;
    Surname: string;
    Email: string;
    PhoneNumber: string;
  }
  const formResponse: FormDataType = {
    PersonalId: '',
    Name: '',
    Surname: '',
    Email: '',
    PhoneNumber: '',
  };

  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formResponse.PersonalId = String(id);
    formResponse.Name = name;
    formResponse.Surname = surname;
    formResponse.Email = email;
    formResponse.PhoneNumber = phone;
    try {
      await axios.post('https://localhost:7120/api/Contacts', formResponse);
    } catch (error) {
      console.log(formResponse);
      console.log('Error in post request: ', error);
    }
    id++;
  };

  return (
    <div className={styles.container}>
      <h1>Want to add a new contact?</h1>
      <p className={styles.greyFont}>Provide the information below in order to do this!</p>
      <main>
        <form onSubmit={onSubmitHandler} action="https://localhost:7120/Contacts" method="post">
          <p>Name</p>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="enter name"></input>
          <p>Surname</p>
          <input
            type="text"
            onChange={(event) => setSurname(event.target.value)}
            required
            placeholder="enter surname"></input>
          <p>E-mail</p>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="enter e-mail"></input>
          <p>Phone number</p>
          <input
            type="tel"
            onChange={(event) => setPhone(event.target.value)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="format: xxx-xxx-xxxx"
            required></input>
          <button>Add contact</button>
        </form>
      </main>
    </div>
  );
};
