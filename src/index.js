import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';

import './styles/style.css';

const root = createRoot(document.querySelector('#root'));
root.render(<ContactApp />);