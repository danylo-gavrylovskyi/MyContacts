import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from '../scss/Create.module.scss';

export interface ContactType {
  personalId: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

export const Create: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditing = location.state ? true : false;
  const idForEditingMode = isEditing ? location.state.personalId : null;
  const formResponse: ContactType = {
    personalId: '',
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
  };

  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formResponse.personalId = isEditing ? idForEditingMode : uuidv4();
    formResponse.name = name;
    formResponse.surname = surname;
    formResponse.email = email;
    formResponse.phoneNumber = phone;
    try {
      if (isEditing) {
        console.log(idForEditingMode);
        await axios.put(`https://localhost:7120/api/Contacts/${idForEditingMode}`, formResponse);
      } else {
        await axios.post('https://localhost:7120/api/Contacts', formResponse);
      }
    } catch (error) {
      console.log(isEditing ? `Error in put request ${error}` : `Error in post request: ${error}`);
    }
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1>{isEditing ? `Want to edit this contact?` : 'Want to add a new contact?'}</h1>
      <p className={styles.greyFont}>
        {isEditing
          ? `Enter the new data for your contact below!`
          : 'Provide the information below in order to do this!'}
      </p>
      <main>
        <form onSubmit={onSubmitHandler} action="https://localhost:7120/Contacts" method="post">
          <p>Name</p>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            required
            placeholder={isEditing ? location.state.name : 'enter name'}></input>
          <p>Surname</p>
          <input
            type="text"
            onChange={(event) => setSurname(event.target.value)}
            required
            placeholder={isEditing ? location.state.surname : 'enter surname'}></input>
          <p>E-mail</p>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder={isEditing ? location.state.email : 'enter e-mail'}></input>
          <p>Phone number</p>
          <input
            type="tel"
            onChange={(event) => setPhone(event.target.value)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder={isEditing ? location.state.phoneNumber : 'format: xxx-xxx-xxxx'}
            required></input>
          <button>{isEditing ? 'Edit contact' : 'Add contact'}</button>
        </form>
      </main>
    </div>
  );
};
