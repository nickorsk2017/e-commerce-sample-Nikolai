import {useState} from "react";
import Image from 'next/image';
import styles from "./Picture.module.scss";

export type Props = {
  src: Entity.Product["image"];
  alt: string;
};

const Picture: React.FC<Props> = ({alt, src}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoaded = () => {
    setIsLoaded(true);
  }

  return <picture className={styles.picture}>
      {!isLoaded && <div className={styles.picture_loading}></div>}
      <Image
        onLoad={onLoaded}
        className={styles.picture_img}
        width={461}
        height={760}
        src={src}
        alt={alt}
      />
    </picture>
} 

export default Picture;