import React, { Component } from 'react';

import Container from './Component/Container';
import ContactList from './Component/ContactList';
import Filter from './Component/Filter';
import ContactForm from './Component/ContactForm';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  handleSubmitForm = contact => {
    const includedInContacts = this.state.contacts.find(
      item => item.name === contact.name,
    );
    if (includedInContacts !== undefined) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleChange = e => {
    console.log(e.currentTarget.value);
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handleSubmitForm} />
        <h2>Contacts</h2>
        <Filter value={filter} onHandleChange={this.handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
