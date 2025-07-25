import { useState } from "react";

const ListWithDelegation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = ["Apple", "Banana", "Cherry"];
  const a = [
    { name: "divya", numOfCalls: 12 },
    { name: "sree", numOfCalls: 1 },
    { name: "gopal", numOfCalls: 23 },
    { name: "ram", numOfCalls: 14 },
    { name: "kish", numOfCalls: 55 },
  ];

  const sortedArray = a.sort((a, b) => a.numOfCalls - b.numOfCalls);
  const filteredArray = sortedArray.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (event) => {
    if (event.target.tagName === "LI") {
      const itemValue = event.target.textContent;
      alert(`You clicked on Item ${itemValue}`);
    }
  };
  return (
    <>
      <ul onClick={handleClick}>
        {items.map((e) => (
          <li key={e.index}>{e}</li>
        ))}
      </ul>

      <input
        type="text"
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredArray.map((item) => (
          <li key={item.index}>
            {item.name}: {item.numOfCalls}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListWithDelegation;
