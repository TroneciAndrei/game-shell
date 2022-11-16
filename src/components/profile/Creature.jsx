import React from "react";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";

export const Creature = () => {
  const { mainColor, eyeColor, secondaryColor } = useSelector(({ profile }) => {
    const { mainColor, eyeColor, secondaryColor } = profile.creature;

    return { mainColor, eyeColor, secondaryColor };
  });

  const cssClass = css`
    border: 1px solid red;
    div {
      padding: 8px;
    }

    & :first-child {
      background-color: ${mainColor};
    }

    & :nth-child(2) {
      background-color: ${eyeColor};
    }

    & :last-child {
      background-color: ${secondaryColor};
    }
  `;

  return (
    <div className={cssClass}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
