import axios from "axios";

export async function fetchUserData(username, location, minRepos) {
  try {
    
    const queryParts = [];

    if (username?.trim()) queryParts.push(username.trim());
    if (location?.trim()) queryParts.push(`location:${location.trim()}`);
    if (minRepos) queryParts.push(`repos:>${minRepos}`);

    const query = queryParts.join("+");

    if (!query) {
      throw new Error("At least one search parameter is required");
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    const users = response.data.items || [];

    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const userDetails = await axios.get(
          `https://api.github.com/users/${user.login}`
        );
        return userDetails.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    throw error;
  }
}
