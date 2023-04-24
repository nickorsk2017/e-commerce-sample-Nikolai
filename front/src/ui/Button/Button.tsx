"use client"
import React from "react";
import {PropsWithChildren, HTMLAttributes} from "react";
import styles from "./Button.module.scss";

export type Props = PropsWithChildren<HTMLAttributes<HTMLButtonElement> & {
  className?: string;
}>;

const Button: React.FC<Props> = ({children, className, ...props}) => {
  return (
      <button
        className={[styles.button, className].join(" ")}
        {...props}
      >
       {children}
      </button>
  )};
export default Button;