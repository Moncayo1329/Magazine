import React from "react";

function Comprame() {
  const donationPageUrl = "https://ko-fi.com/michaelmoncayo7";
  const img = 'https://storage.ko-fi.com/cdn/nav-logo-stroke.png';

  return (
    <div className="button" style={{ display: "flex", justifyContent: "center" }}>
      <a href={donationPageUrl} style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "brown",
            color: "white",
            padding: "10px 30px", 
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img src={img} alt="Ko-fi logo" style={{ height: "20px", marginRight: "5px" }} /> {/* Imagen */}
          cafecito
        </button>
      </a>
    </div>
  );
}

export default Comprame;


