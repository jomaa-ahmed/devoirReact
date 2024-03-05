import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CompetitionsList from './AddCompetition/competition'; 
import Detail from './CompetitionDetails/index'; 
import NotFound from './NotFound/Notfound'; 
import EventsTable from './Competitions/competition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/competitionslist" element={<EventsTable />} />
        <Route path="/competitions" element={<CompetitionsList />} />
        <Route path="/competition/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
