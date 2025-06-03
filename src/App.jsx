import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contactData from "./contactData.json";
import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState(contactData);

  const updateSearch = (event) => { 
    if (event.target.value === "")
    {setInputData(contactData)}
    else {
    setInputData(inputData.filter((element) => element.name.toLowerCase().includes(event.target.value.trim().toLowerCase())));}
  };


  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox handleChange={updateSearch} />
      <ContactList contacts={inputData} />
    </>
  );
}

export default App;
