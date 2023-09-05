import { Button, TextField } from "@mui/material";
import { nanoid } from "nanoid";

export const ContactForm  = ({setState, state}) => {
    const handleAddContact = () => {
        const isContactExists = state.contacts.some(
          (contact) => contact.name.toLowerCase() === state.name.toLowerCase()
        );
      
        if (isContactExists) {
          alert("Name already exists in contacts!");
          return;
        }
      
        setState((prev) => ({
          ...prev,
          contacts: [
            ...prev.contacts,
            {
              name: state.name,
              phone: state.phone,
              id: nanoid(),
            },
          ],
        }));
      };
    const handleChangeName = (e) => {
        setState(prev => ({...prev, name: e.target.value}));
    };
    const handleChangePhone = (e) => {
      setState(prev => ({...prev, phone: e.target.value}));
    };
    return (
    <>
        <div><TextField id="standard-basic" label="Имя" variant="standard" onChange={handleChangeName}/></div>
        <div><TextField id="standard-basic" label="Телефон" variant="standard" onChange={handleChangePhone}/>  </div>
        <Button variant="contained" onClick={handleAddContact} sx={{mt: 2, mb:2}}>Add</Button>

    </>
    )
}