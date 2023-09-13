import React, { useState, useEffect, useContext } from "react";
import { render } from "react-dom";

/*
- Update the below App component to return the names of the users as a list.
- Add three buttons that will sort the list by name (alphabetically), date of birth, or ID. (Clicking the same button twice should return the list to its default, unsorted state.)
*/

const users = [
  { Cname: "John", dateOfBirth: "August 3, 1990", id: 1 },
  { Cname: "Billy", dateOfBirth: "June 24, 1998", id: 5 },
  { Cname: "Alex", dateOfBirth: "January 29, 2005", id: 3 },
  { Cname: "Sarah", dateOfBirth: "July 12, 2003", id: 2 },
  { Cname: "Jane", dateOfBirth: "November 4, 1980", id: 4 }
];

function App() {
  const [name, setName] = useState(users);

  const handleSort = (value) => {
    let sortedVal = value.sort((a, b) => {
      return a.id - b.id;
    });
    console.log("sort", sortedVal);
    setName([sortedVal, ...name]);
  };
  return (
    <div>
      <>
        {name.map((nm) => (
          <>
            <p>{nm.Cname}</p>
          </>
        ))}
      </>
      <button onClick={() => handleSort(name)}>Sort</button>
    </div>
  );
}

render(<App />, document.getElementById("root"));
