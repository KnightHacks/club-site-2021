import React, { useEffect } from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";

const Linktree = () => {
  useEffect(() => {
    window.location.href =
      "https://checkout.square.site/merchant/SAS7SSSC6ND23/checkout/XSXJFEPWN2IUQ7LGRY5CUQUD";
  }, []);

  return (
    <>
      <title>Pay Dues</title>
      <div className="KnightHacksLogo">
        <img src={KnightHacksLogo} className="KHLogo" alt="Knight Hacks Logo" />
      </div>
    </>
  );
};

export default Linktree;
