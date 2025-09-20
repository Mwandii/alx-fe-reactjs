import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function SearchComponent() {

    const [searchInput, setSearchInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null)
        setUserData(null)
        setSearchInput("")
    

    try {
        const data = await fetchUserData(searchInput);
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
            <input type="text" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} placeholder="Search here..."/>
            <button type="submit"  >Search</button>
        </form>
        <div>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && userData && (
                <div>
                    <img src={userData.avatar_url}
                    alt={userData.login}
                    width={100}
                    />
                    <h3>{userData.login}</h3>
                    <a href={userData.html_url} target="_blank" rel="noreferrer">View profile</a>
                </div>
            )}
        </div>
        </>
    )
}

export default SearchComponent;