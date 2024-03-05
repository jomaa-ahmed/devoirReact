import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function CompetitionsList() {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);


  return (
    <div>
      <h1>Competition Details</h1>
      {competition ? (
        <div>
          <p>Competition ID: {competition.id}</p>
          <p>Competition Name: {competition.name}</p>
          <p>Competition Fees: {competition.fees}</p>
          <p>Competition Date: {competition.date}</p>
        </div>
      ) : (
        <p>Competition not found!</p>
      )}
    </div>
  );
}

export default CompetitionsList;
