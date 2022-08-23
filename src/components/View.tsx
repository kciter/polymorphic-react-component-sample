import React, { forwardRef } from "react";
import { PolymorphicComponentProps, PolymorphicRef } from "./types";

export type ViewProps<C extends React.ElementType> =
  PolymorphicComponentProps<C>;

type ViewComponent = <C extends React.ElementType = "div">(
  props: ViewProps<C>
) => React.ReactElement | null;

export const View: ViewComponent = forwardRef(
  <C extends React.ElementType = "div">(
    { component, ...props }: ViewProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element = component || "div";
    return <Element ref={ref} {...props} />;
  }
);
