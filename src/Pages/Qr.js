import React from "react";
import QRCode from "react-qr-code";
const Qr = () => {
  return (
    <div
      className="grid justify-center place-content-center h-screen"
      style={{
        backgroundImage: `url(
          "https://images.pexels.com/photos/8474973/pexels-photo-8474973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        )`,
        backgroundPosition:"center"
      }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "70%", width: "100%",paddingTop:"40px",paddingRight:"20px" }}
        value={"http://localhost:3000/menu"}
        viewBox={`0 0 256 256`}
      ></QRCode>
      <span className="pl-2 text-white">Scan to share menu</span>
    </div>
  );
};

export default Qr;
