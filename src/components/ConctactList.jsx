import { Button } from "@mui/material";

export const ConctactList = ({state, setState}) => {
    const handleDeleteContact = (id) => {
        setState((prev) => ({
          ...prev,
          contacts: prev.contacts.filter((contact) => contact.id !== id),
        }));
      };
    const filterContacts = state.contacts.filter((f) => f.name.toLowerCase().includes(state.filter.toLowerCase()))

    return filterContacts.map((contact) => <div key={contact.id}>{contact.phone} {contact.name}
        <Button variant='outlined' onClick={() => handleDeleteContact(contact.id)} color='error' sx={{m:1}}>удалить</Button>
    </div>)

}