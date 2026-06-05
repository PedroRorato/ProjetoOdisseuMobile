import { PropsWithChildren } from "react";
import { Text, TextStyle } from "react-native";

import Fonts from "@/constants/Fonts";

export type TypographyProps = PropsWithChildren & {
  variant?:
    | "hero"
    | "titleLarge"
    | "title"
    | "titleSmall"
    | "body"
    | "bodySmall";
  style?: TextStyle;
};

const Typography = ({ children, variant, style }: TypographyProps) => {
  const textStyle = variant ? Fonts.variant[variant] : Fonts.variant.body;

  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default Typography;
