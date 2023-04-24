"use client"
import React from "react";
import {PropsWithChildren, HTMLAttributes} from "react";
import styles from "./Button.module.scss";

export type Props = PropsWithChildren<HTMLAttributes<HTMLButtonElement>>;

const Button: React.FC<Props> = ({children, ...props}) => {
  return (
      <button
        className={styles.button}
        {...props}
      >
       {children}
      </button>
  )};
export default Button;