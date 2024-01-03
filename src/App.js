import React from 'react';
import Header from './components/Header.jsx';
import data from './data/data.js';
import JournalItem from './components/JounalItem.jsx';

export default function App() {
  const journalEl = data.map((data) => {
    return (
      <JournalItem
        key={data.id}
        title={data.title}
        location={data.location}
        googleMapsUrl={data.googleMapsUrl}
        startDate={data.startDate}
        endDate={data.endDate}
        description={data.description}
        image={data.image}
      />
    );
  });
  return (
    <>
      <Header />
      {journalEl}
    </>
  );
}
