import { useEffect, useState } from "react";
import {bowlers} from "./types/bowlers"


function BowlerList (){
    const [bowlers, setBowlers] = useState<bowlers[]>([])
    useEffect (() => {
        const fetchBowlers = async () => {
            const response = await fetch ("https://localhost:5000/api/Bowlers");
            const data = await response.json();
            setBowlers(data);
        };
        fetchBowlers()
    }, [])


return (
    <>
    <h3>Bowler Table</h3>
    <table>
        <thead>
            <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Initial</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone</th>
                <th>Team</th>
            </tr>
        </thead>
        <tbody>
            {
                bowlers.map(b => (
                    <tr key={b.bowlerId}>
                        <td>{b.bowlerLastName}</td>
                        <td>{b.bowlerFirstName}</td>
                        <td>{b.bowlerMiddleInit}</td>
                        <td>{b.bowlerAddress}</td>
                        <td>{b.bowlerCity}</td>
                        <td>{b.bowlerState}</td>
                        <td>{b.bowlerZip}</td>
                        <td>{b.bowlerPhoneNumber}</td>
                        <td>{b.teamName}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
);
}
export default BowlerList;