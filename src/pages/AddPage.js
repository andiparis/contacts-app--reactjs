import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactInput from '../components/ContactInput';
import { addContact } from '../utils/api';

function AddPage() {
  const navigate = useNavigate();

  async function onAddContactHandler(contact) {
    await addContact(contact)
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