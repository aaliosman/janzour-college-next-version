import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.scss";
const SearchInput = ({ customInputStyle, customParentStyle }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={`${styles.openSearch} ${customParentStyle}`}>
      <input
        type="text"
        value={searchValue}
        className={`${styles.searchInput} ${customInputStyle}`}
        name="search"
        placeholder="ابحث هنا"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <SearchIcon style={{ width: "24px", height: "24px" }} />
    </div>
  );
};

export default SearchInput;
