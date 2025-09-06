import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Users() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    },
    staleTime: 5000, // Data stays fresh for 5 seconds
    gcTime: 1000 * 60 * 5, // Keep cache for 5 minutes
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users List</h2>
      {isFetching && <p style={{ color: "gray" }}>Background Updating...</p>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function QueryExample() {
     const [showUsers, setShowUsers] = useState(true);
      return (
    <div className="App">
      <button onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && <Users />}
    </div>
  );
}

export default QueryExample