

import PlayerItem from "@/component/player-item";
import { useEffect, useState } from "react"

export default function Players() {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [playersName, setPlayersName] = useState('');
    const [countryName, setCountryName] = useState('')
    useEffect(()=>{
        const getPlayers = async ()=>{
            try{
                setError("");
                setIsLoading(true);
                const res = await fetch("./api/players");
                if (!res.ok) throw new Error("Failed to fetch.");
                const data = await res.json();
                setPlayers(data);
                setIsLoading(false);

            }catch(err){
                setError(err.message);
                setIsLoading(false)
            }
        }
        getPlayers();
    },[]);
    const handleSubmit = ()=>{
        e.preventDefault()
        
    }

    if(isLoading){
        return (
            <div>
                <p>Loading....</p>
            </div>
        )
    };
    if(error){
        return(
            <div>
            <p>{error}</p>
            </div>
        )
    }


   
  return (
    <div>
        <h2> Add a New Player</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a player Name" value={playersName} onChange={e=>setPlayersName(e.target.value)} />
            <input type="text"  placeholder="Enter country Name" value ={countryName} onChange={e=>setCountryName(e.target.value)} />
            <button type="submit">Add Player</button>
        </form>
        <h3 className="text-3xl text-center">Players List</h3>
        {
            players?.map(player =>(
                <PlayerItem player ={player} key={player.id}/>
            ))
        }
    </div>
  )
}


