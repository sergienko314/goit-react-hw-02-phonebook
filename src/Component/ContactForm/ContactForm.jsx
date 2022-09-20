import PropTypes from 'prop-types';
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    }
    
    componentDidUpdate(prevProps, prevState,) {
        if (prevState !== this.state) {
           localStorage.setItem('contact', JSON.stringify(this.state))
       }
    }
    componentDidMount() { 
      const contactLS = JSON.parse(localStorage.getItem('contact'))
    if (contactLS) {
      this.setState({ name: contactLS.name, number: contactLS.number })
    }
    }

    changeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, });

    }

    submitHandler = e => {
        e.preventDefault();
        const { name, number } = this.state;
        const {checkContacts} = this.props
        if (name.length > 1 && number.length > 1) {
            if (checkContacts.some((contact)=> contact.name === name)) { return alert("this contact olredy har")}
            const contacts = {
                id: uuidv4(),
                name: name,
                number: number,
            };
            this.props.addContact(contacts);
            this.reset();
        }
        else{ alert("EROR <input is empty>");}
    };

    reset = () => {
        this.setState({
            name: "",
            number: "",
        });
    };

    render() {
        const { name, number } = this.state
        return (
            <form onSubmit={(e) => this.submitHandler(e)} action="">
                <label htmlFor="">Name:
                    <input
                        name="name"
                        value={name}
                        type="text"
                        onChange={this.changeHandler}
                    />
                </label>
                <label htmlFor=""> Number:
                    <input
                        name="number"
                        value={number}
                        type="text"
                        onChange={this.changeHandler}
                    />

                </label>
                <button>Add contact</button>
            </form>
        );
    }
}

export default ContactForm;

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
}

