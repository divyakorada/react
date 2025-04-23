import React, { useEffect, useState } from "react";
import "./SearchFilter.scss"

/* get data local search */
 const SearchInArray = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => setUsers(data.users))
    .catch((error) => console.error("Error fetching users:", error));
  }, [])


  const filteredUsers = users.filter(user => {
    return `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div className="search__wrp">
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-disc pl-5 search__list-wrp">
        {
            (filteredUsers.length > 0) ? 
            (filteredUsers.map(e => ( <li key={e.id}>{e.firstName} {e.lastName}</li> ))) :
            (<li>No users found.</li>)
        }
      </ul>
    </div>
  );
};
/* get data local search */

const  SearchQueryParam2 = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  

   useEffect(() => {
    let timer;
    if (searchQuery) {
       timer = setTimeout(() => {
        fetchData(searchQuery);
      }, 500);
    } else {
      // Fetch default list when search is empty
      fetchData('');
    }
  
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  
  
    const fetchData = async (query) => {
    setLoading(true);
       setError('');
      // Replace with your API call or data fetching logic
      const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);
      const data = await response.json();
      setResults(data.users);
      setLoading(false);
    };
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    return (
        <div className="search__wrp">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
       
        <ul className="main-ctn  search__list-wrp">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

          {results.map((result) => (
            <li key={result.id}>{result.firstName} {result.lastName}</li>
          ))}

           
          {!loading && !results.length && !error && (
        <li className="text-gray-500">No users found.</li>
      )}
        </ul>
       
      </div>
    );
}

export  { SearchInArray, SearchQueryParam2 }

//https://playcode.io/2353520
// https://chatgpt.com/share/68092044-d834-8001-927b-de025959402a
// Debounce helper
/*const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      
      return () => clearTimeout(handler);
    }, [value, delay]);
    
    return debouncedValue;
  };

const SearchQueryParam = () => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 2000); // Debounce by 500ms
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchUsers = async () => {
        setLoading(true);
        setError('');
  
        try {
          const response = await fetch(`https://dummyjson.com/users/search?q=${search}`); // debouncedSearch
          if (!response.ok) throw new Error('Network response was not ok');
  
          const data = await response.json();
          setUsers(data.users);
        } catch (err) {
          setError(err.message || 'Something went wrong');
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, [search]);
  
    return (
      <div className="p-4 max-w-md mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users..."
          className="w-full p-2 border rounded mb-4"
        />
  
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
  
        <ul>
          {users.map((user) => (
            <li key={user.id} >
              {user.firstName}  {user.lastName}
            </li>
          ))}
        </ul>
  
        {!loading && !users.length && !error && (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    );
}*/

