import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactInput from '../components/ContactInput';
import { addContact } from '../utils/data';

function AddPage() {
  const navigate = useNavigate();

  function onAddContactHandler(contact) {
    addContact(contact)
    navigate('/');
  }

  return (
    <section>
      <h2>Tambah kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}

export default AddPage;