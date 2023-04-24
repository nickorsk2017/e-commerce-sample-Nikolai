import Image from 'next/image';
import styles from "./Picture.module.scss";

export type Props = {
  src: Entity.Product["image"];
  alt: string;
};

const Picture: React.FC<Props> = ({alt, src}) => {
  return <picture className={styles.picture}>
      <Image
        className={styles.picture_img}
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