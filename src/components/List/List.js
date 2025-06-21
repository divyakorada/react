import React, { useState } from "react";

const ListRender1 = () => {
  const [items, setItems] = useState(["Item 1, Item 2, Item 3"]);

  const updateOrder = () => {
    setItems(["item3", "Item1", "Item2"]);
  };

  return (
    <div className=" mb-3">
      <ul class="list-group mb-3">
        {items.map((item, index) => (
          <li class="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={updateOrder}>updateOrder</button>
    </div>
  );
};

const ListRender2 = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ]);

  return (
    <>
      <ul class="list-group mb-3">
        {users.map((user, index) => (
          <li class="list-group-item" key={index}>
            {user.name}
          </li>
        ))}
      </ul>
      <table class="table table-bordered">
        <thead></thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};



const ListRender3 = ({a}) => {

const [isVisible, setIsVisible] = useState(false)
const expand = () => {
  setIsVisible(!isVisible)
}
return(
  <div style={{ paddingLeft: 10 }}>
    <h5>Recursion</h5>
    <span onClick={expand}>{a.name}</span>
  
    {isVisible &&
      a?.children?.map((e) => {
        return (
          <div style={{ paddingLeft: 10 }}>
            <ListRender3 a={e} />
          </div>
        );
      })}
  </div>
  )
}

function NumberList({numbers}) {
  const listItems = numbers?.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  return <ul>{listItems}</ul>
}



export { ListRender1, ListRender2, ListRender3, NumberList };
