function ApiService() {

    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

    return (
        <>
        <h1>My API key:</h1>
        <p>{apiKey}</p>
        </>
    )
}

export default ApiService;