import React,{ useEffect, useState }  from 'react';


function EventsTable() {
    const [competition, setCompetition] = useState([]);

    const events = [
        {
            "id": "1",
            "name": "Hackaton",
            "fees": "100",
            "date": "01/04/2023",
            "participants": "10",
            "description": "Hackaton is a coding competition where you can show your coding skills and win exciting prizes"
        },
        {
            "id": "2",
            "name": "Meet & Greet",
            "fees": "30",
            "date": "01/04/2023",
            "participants": "0",
            "description": "Lorem Ipsum is Lorem Ipsum and is therefore .... "
        }
    ];
    
   

    useEffect(() => {
        const fetchData = async () => {
         
            try {
                const response = await fetch('http://localhost:3000/competition.json');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            } 
        };

        fetchData(); 
    }, []); 

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Fees</th>
                    <th>Date</th>
                    <th>Participants</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {events.map(event => (
                    <tr key={event.id}>
                        <td>{event.name}</td>
                        <td>{event.fees}</td>
                        <td>{event.date}</td>
                        <td>{event.participants}</td>
                        <td>{event.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EventsTable;


