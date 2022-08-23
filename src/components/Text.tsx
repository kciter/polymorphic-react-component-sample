import { forwardRef } from "react";
import { PolymorphicComponentProps, PolymorphicRef } from "./types";

type _TextProps = {
  size: number;
  color: string;
};

export type TextProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  _TextProps
>;

type TextComponent = <T extends React.ElementType = "span">(
  props: TextProps<T>
) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(
  <T extends React.ElementType = "span">(
    { as, size, color, ...props }: TextProps<T>,
    ref: PolymorphicRef<T>["ref"]
  ) => {
    const Element = as || "span";
    // size와 color를 style로 적용
    return <Element ref={ref} {...props} style={{ fontSize: size, color }} />;
  }
);
