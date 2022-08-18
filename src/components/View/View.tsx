import React, { forwardRef } from "react";

type ExtendedProps<_ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
  Omit<_ExtendedProps, keyof OverrideProps>;

type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type InheritedProps<C extends React.ElementType, Props = {}> = ExtendedProps<
  PropsOf<C>,
  Props
>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = InheritedProps<C, Props> & {
  ref?: PolymorphicRef<C>;
};

export type ViewProps<C extends React.ElementType> =
  PolymorphicComponentProps<C>;

type ViewComponent = <C extends React.ElementType = "div">(
  props: ViewProps<C>
) => React.ReactElement;

export const View: ViewComponent = forwardRef(
  <C extends React.ElementType = "div">(
    { component, ...props }: ViewProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element = component || "div";
    return <Element ref={ref} {...props} />;
  }
);
