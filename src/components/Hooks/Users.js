import React, { useState } from 'react';
import {useFetch, useCounter} from './CustomHook';

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


const CustomHookCounter = () => {
    const {count, increment, decrement, reset} = useCounter(0)
    return(
        <>
        <p>count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}


export {Users, CustomHookCounter}