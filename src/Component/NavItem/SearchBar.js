import React from "react";
import styled from "styled-components";

function SearchBar({ status }) {
  const Search = styled.div`
    color: black;
    border-radius: 20px;
    background-color: white;
    justify-content: center;
    padding: 7px;
    justify-content: space-between;
    width: 250px;
    height: auto;
    display: flex;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  `;

  return (
    <>
      <Search style={status == true ? {} : { width: "100%", margin:"0px" }}>
        <div style={{ marginLeft: "10px" }}>Start Your Search</div>
        <div style={{ marginLeft: "10px" }}>
          <i
            style={{
              color: "White",
              background: "#ff385c",
              padding: "5px",
              borderRadius: "50%",
            }}
            class="fa-solid fa-magnifying-glass"
          ></i>{" "}
        </div>
      </Search>
    </>
  );
}

export default SearchBar;
