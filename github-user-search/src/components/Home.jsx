import SearchComponent from "./Search";

function Home() {
    return (
        <div>
        <h1 className="p-2 text-3xl font-bold text-white bg-black">GitFinder</h1>
        <SearchComponent />
        </div>
    )
}

export default Home;