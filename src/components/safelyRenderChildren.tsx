import React, { Children, ReactElement } from "react";

export const SafelyRenderChildren = ({
  children
}: {
  children: ReactElement | ReactElement[];
}) => {
  const count = Children.count(children);
  if (count > 5000) {
    return <span>You're attempting to render too many children</span>;
  }

  return <>{children}</>;
};
