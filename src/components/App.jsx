import { useState } from "react";
import { ContactForm } from "./ConctactForm";
import { FindUser } from "./FindUser";
import { ConctactList } from "./ConctactList";

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
    name: '',
    phone: ''
  })


  return (
    <div style={{padding: 20}}>
      <ContactForm state={state} setState={setState} />
      <FindUser setState={setState} />
      <ConctactList state={state} setState={setState} />
    </div>
  );
};
