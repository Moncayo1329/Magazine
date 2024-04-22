import React from "react";

function Comprame() {
  const donationPageUrl = "https://ko-fi.com/michaelmoncayo7";

  return (
    <a href={donationPageUrl} style={{ textDecoration: "none" }}>
      <button
        style={{
          backgroundColor: "brown",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Un cafecito
      </button>
    </a>
  );
}

export default Comprame;
