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
        className={styles.picture_img}
        onLoad={onLoaded}
        width={298}
        height={487}
        src={src}
        alt={alt}
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
        placeholder="blur"
      />
    </picture>
} 

export default Picture;