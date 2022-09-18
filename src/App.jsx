
import ContactForm from "ContactForm";
import ContactList from "ContactList";
import Filter from "Filter";
import { Component } from "react";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  }

  addContact = (res) => {
    return this.setState((prev) => ({
      contacts: [...prev.contacts, res]
    }))
  }

  filterInput = (e) => {
    const input = e.target.value
    console.log(input);
    return this.setState({ filter: input.trim() })
  }

  changeContactsFilter = () => {
    if (this.state.filter === "") {
      return this.state.contacts
    }
    else { return (this.state.contacts.filter(({ name, number }) => (name).toLowerCase().includes(this.state.filter) || (number).toLowerCase().includes(this.state.filter))) }

  }

  deleteContact = (marcer) =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== marcer) }))
    
    
  
  render() {
      return(
    <div
        style = {{
          display: "flex",
          flexDirection: "column",
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        
      }}
    >
      <h1>Phonebook </h1>
        <ContactForm contacts={this.state.contacts}
          addContact={ this.addContact} />
        <h2>Contacts</h2>
        <Filter filterInput={this.filterInput} />
        <ContactList contacts={this.changeContactsFilter}
          deleteContact={this.deleteContact} />
    </div >
  );
}
  
};
export default App;
