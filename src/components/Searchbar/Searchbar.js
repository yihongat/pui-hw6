import { useState } from "react";

const Searchbar = ({ setSearchValue }) => {
    const [value, setValue] = useState("");
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => {setSearchValue(value)}}>Search</button>
    </div>
  );
};

export default Searchbar;
