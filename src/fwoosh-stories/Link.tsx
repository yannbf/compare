import * as React from "react";

import * as styles from "./Link.module.css";

interface LinkProps extends React.ComponentProps<"a"> {
  /** Open link in new window */
  newWindow?: boolean;
}

export const Link = ({ className, newWindow, ...props }: LinkProps) => {
  return (
    <a
      target={newWindow ? "_blank" : undefined}
      {...props}
    />
  );
};