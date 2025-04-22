import React from 'react';
import useFetch from './CustomHook';

const Users = () => {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

    if(loading) return <p>Loading...</p>

    return(
        <div>
            <h5>User List</h5>
            {/* {data?.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))} */}
            <table class="table table-bordered">
                <thead></thead>
                <tbody>
                    <tr>
                        {data?.map((user) => (   
                                <td>{user.name}</td>   
                        ))} 
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Users;