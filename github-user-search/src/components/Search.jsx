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
        <div>
        <form onSubmit={handleSubmit}
        className="flex justify-between px-5 py-5 bg-black"
        >
            <label className="font-semibold text-white">UserName: </label>
            <input className=" text-white" type="text" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} placeholder="Search here..."/>
            <label className="font-semibold text-white">Location: </label>
            <input className=" text-white" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location..."/>
            <label className="font-semibold text-white">No. Of Repos</label>
            <input className=" text-white" type="number" value={minRepos} onChange={(e) => setMinRepos(e.target.value)} placeholder="Min Repos..."/>
            <button className="font-semibold text-white" type="submit"  >Search</button>
        </form>
        <div className="flex flex-wrap items-center gap-15 p-10">
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && userData && (userData.map(user =>
                <div className="flex flex-col justify-center align-center">
                    <img src={user.avatar_url}
                    alt={user.login}
                    width={100}
                    className="rounded-full w-30 h-30"
                    />
                    <h3 className="font-semibold mt-3">{user.login}</h3>
                    <a className="font-light px-2  hover:text-blue-500" href={user.html_url} target="_blank" rel="noreferrer">View profile</a>
                    <h3 className="font-light" >{user.location}</h3>
                    <h3 className="font-light" >{user.public_repos}</h3>
                </div>
            ))}
        </div>
        </div>
    )
}

export default SearchComponent;