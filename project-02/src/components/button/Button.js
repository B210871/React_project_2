import React from "react";

import styles from "./button.module.css";

export const Button = ({ title, icon, white }) => {
  return (
    <button className={white?styles.btn_white:styles.btn}>
      {icon}

      {title}
    </button>
  );
};
