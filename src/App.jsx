import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contactData from "./contactData.json";
import { useEffect, useId, useState } from "react";

function App() {
  const INITIAL_DATA = contactData;

  const [inputData, setInputData] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } else {
      window.localStorage.setItem(
        "saved-contacts",
        JSON.stringify(INITIAL_DATA)
      );
      return JSON.parse(savedContacts);
    }
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(inputData));
  });

  const updateSearch = (event) => {
    if (event.target.value === "") {
      setInputData(INITIAL_DATA);
    } else {
      setInputData(
        INITIAL_DATA.filter((element) =>
          element.name
            .toLowerCase()
            .includes(event.target.value.trim().toLowerCase())
        )
      );
      console.log(event.target.value);
    }
  };

  const handleDelete = (id) => {
    setInputData((prev) => prev.filter((element) => element.id !== id));
  };


  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox handleChange={updateSearch} />
      <ContactList contacts={inputData} functions={handleDelete} />
    </>
  );
}

export default App;
