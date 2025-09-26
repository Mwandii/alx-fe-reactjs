function UserProfile() {
  return (
    <div className=" bg-gray-100 p-8 max-w-sm mx-auto my-20 
    rounded-lg shadow-lg sm:p-4 md:p-8 max-w-xs max-width-sm
    ">
      <img className="rounded-full w-36 h-36 mx-auto" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop" alt="User" />
      <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl">John Doe</h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;