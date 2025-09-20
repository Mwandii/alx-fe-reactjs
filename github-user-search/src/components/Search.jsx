import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function SearchComponent() {

    const [searchInput, setSearchInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null)
    const [location, setLocation] = useState("")
    const [minRepos, setMinRepos] = useState("") 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null)
        setUserData(null)
        setSearchInput("")
        setLocation("")
        setMinRepos("")
    

    try {
        const data = await fetchUserData(searchInput, location, minRepos);
        setUserData(data);
    } catch(err) {
        setError("Looks like we cant find the user")
    } finally {
        setLoading(false)
    }
}

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>UserName: </label>
            <input type="text" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} placeholder="Search here..."/>
            <label>Location: </label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
            <label>No. Of Repos</label>
            <input type="number" value={minRepos} onChange={(e) => setMinRepos(e.target.value)}/>
            <button type="submit"  >Search</button>
        </form>
        <div>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && userData && (userData.map(user =>
                <div>
                    <img src={user.avatar_url}
                    alt={user.login}
                    width={100}
                    />
                    <h3>{user.login}</h3>
                    <a href={user.html_url} target="_blank" rel="noreferrer">View profile</a>
                    <h3>{user.location}</h3>
                    <h3>{user.public_repos}</h3>
                </div>
            ))}
        </div>
        </>
    )
}

export default SearchComponent;