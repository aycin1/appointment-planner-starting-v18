import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isNameDuplicated = props.contacts.some(
    (contact) => name === contact.name
  );

  function clearForm() {
    setName("");
    setPhone("");
    setEmail("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNameDuplicated) {
      return "This name already exists in the contacts list, please try again";
    } else {
      props.addContact(name, phone, email);
      clearForm();
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
