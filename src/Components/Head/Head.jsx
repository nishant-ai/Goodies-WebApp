import React, { useState } from "react";
import "./Head.css";

// SmoothScroll
import { Link as HashLink } from "react-scroll";

// Images
import BuySelf from "../../assets/SelfPurchase.png";
import BuyGift from "../../assets/GiftPurchase.png";

function Head() {
  const [pos, setPos] = useState("L");

  return (
    <>
      <div className="Head">
        <div
          className="Slider"
          style={{
            left: pos === "L" && 0,
            transform: pos === "R" && "translateX(50%)",
          }}
        />
        <div onMouseEnter={() => setPos("L")} className="HeadSection BuySelf">
          <img
            style={{
              filter: pos === "R" && "brightness(0.5)",
            }}
            className="HeadImage"
            src={BuySelf}
            alt="Buy For Self"
          />
        </div>
        <div onMouseEnter={() => setPos("R")} className="HeadSection BuyGift">
          <img
            style={{
              filter: pos === "L" && "brightness(0.5)",
            }}
            className="HeadImage"
            src={BuyGift}
            alt="Buy For Self"
          />
        </div>
      </div>
      <div
        style={{
          background: pos === "L" ? "#DDEFFD" : "#F15F46",
          color: pos === "L" ? "#000" : "#fff",
        }}
        className="BuyNow"
      >
        {pos === "L" ? (
          <HashLink
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="products"
          >
            To Self
          </HashLink>
        ) : (
          <>To Gift</>
        )}
      </div>
    </>
  );
}

export default Head;
