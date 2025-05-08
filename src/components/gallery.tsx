import { PropsWithChildren } from "react";

export const Gallery = ({ children }: PropsWithChildren) => {
  return (
    <div className="*:grid *:grid-flow-col *:auto-cols-fr *:gap-2">
      {children}
    </div>
  );
};
