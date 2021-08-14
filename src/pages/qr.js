import React, { useEffect } from "react";

const QR = () => {
  useEffect(() => {
    window.location.replace("https://knighthacks.org/discord");
  }, []);
  return <div>Redirecting...</div>;
};

export default QR;
