"use client"
import {useState} from "react";
import Image from 'next/image';
import styles from "./Picture.module.scss";

export type Props = {
  src: Entity.Product["image"];
  alt: string;
  width: number;
  height: number;
};

const Picture: React.FC<Props> = ({height, width, alt, src}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoaded = () => {
    setIsLoaded(true);
  }

  return <picture style={{height: `${height}px`}} className={styles.picture}>
      {!isLoaded && <div className={styles.picture_loading}></div>}
      <Image
        className={styles.picture_img}
        onLoad={onLoaded}
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    </picture>
} 

export default Picture;