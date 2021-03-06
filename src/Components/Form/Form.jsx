import { useState } from "react";
import { v4 as uuid } from "uuid";
import s from "./Form.module.css";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedNewContact = {
      name,
      number,
    };

    onSubmit(addedNewContact);

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const uniqueIdName = uuid();
  const uniqueIdNumber = uuid();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={uniqueIdName} className={s.formLabel}>
        Name
      </label>
      <br />
      <input
        id={uniqueIdName}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleInputChange}
        className={s.formInput}
      />
      <br />
      <label htmlFor={uniqueIdNumber} className={s.formLabel}>
        Number
      </label>
      <br />
      <input
        id={uniqueIdNumber}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleInputChange}
        className={s.formInput}
      />
      <br />
      <button type="submit" className={s.formBtn}>
        add
      </button>
    </form>
  );
}

// export default Form;
