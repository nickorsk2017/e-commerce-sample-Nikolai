"use client"
import {useState} from "react";
import {decodeHTML} from "@/utils";
import {PropsWithChildren} from "react";
import styles from "./Collapse.module.scss";

export type Props = PropsWithChildren<{
  className?: string;
  content: string;
}>;

const Collapse: React.FC<Props> = ({children, content, className, ...props}) => {
  const [opened, setOpened] = useState(false);

  const toggle = () => {
    setOpened(!opened);
  }

  return (
      <div
        className={[styles.collapse, className, opened ? styles.collapse__opened: ""].join(" ")}
        {...props}
      >
       <div className={styles.collapse_title} onClick={toggle}>{children}</div>
       {opened && <div
        className={styles.collapse_content}
        dangerouslySetInnerHTML={{__html: decodeHTML(content)}}
       ></div>}
      </div>
  )};
export default Collapse;