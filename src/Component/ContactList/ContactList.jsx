const ContactList = ({deleteContact, contacts}) => {
    return (<ul>{contacts().map(({ id, name, number }) =>
    {
        return <li key={id}>{name}: {number} <button onClick={()=>deleteContact(id)}>Delete</button></li>
    })}
    </ul>);
}
 
export default ContactList;