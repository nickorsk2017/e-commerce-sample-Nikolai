import {PropsWithChildren} from "react";
import NextLink from "next/link";

export type Props = PropsWithChildren<{
  scroll?: boolean;
  className?: string;
  href: string;
  disabled?: boolean;
}>;

const Link: React.FC<Props> = ({children, className, href, disabled}) => {
  if(disabled){
    return <span className={className}>
      {children}
    </span>
  }

  return (<NextLink
    scroll={false}
    className={className}
    href={href}
  >
    {children}
  </NextLink>)
} 

export default Link;