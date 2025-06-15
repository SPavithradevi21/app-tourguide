import React from 'react';
import ImageUploader from './components/ImageUploader';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <h1>Tour Guide App</h1>
      <ImageUploader />
      <Analytics />
    </div>
  );
}

export default App;