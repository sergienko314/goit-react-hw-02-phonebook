import PropTypes from 'prop-types';
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    }

    changeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, });

    }

    submitHandler = e => {
        e.preventDefault();
        const { name, number } = this.state;
        if (name.length > 3 || number.length > 3) {
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

