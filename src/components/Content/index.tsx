import React from "react";
import classes from "./index.module.scss";

export const Content: React.FC = ({ children }) => {
  return <div className={classes["content"]}>{children}</div>;
};
