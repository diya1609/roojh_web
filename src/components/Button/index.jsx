import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    main_color_orange_500_0: "border-main_color-orange-500-0 border border-solid text-main_color-orange-500-0",
    text_70: "border-text-70 border-[0.3px] border-solid text-text-100-1",
    colors_white_solid: "border-colors-white-solid border border-solid",
  },
  fill: {
    main_color_orange_500_0: "bg-main_color-orange-500-0 text-colors-white-solid",
    red_A200_14: "bg-red-a200_14 text-main_color-orange-500-0",
    white_A700_3f: "bg-white-a700_3f text-colors-white-solid",
    colors_white_solid: "bg-colors-white-solid",
    red_A200_19: "bg-red-a200_19 text-main_color-orange-500-0",
    white_A700_19: "bg-white-a700_19",
  },
};
const sizes = {
  "3xl": "h-[78px] px-6 text-[20px]",
  xl: "h-[48px] px-4 text-[20px]",
  xs: "h-[30px] px-2 text-[12px]",
  md: "h-[36px] px-2.5 text-[14px]",
  lg: "h-[40px] px-4 text-[14px]",
  sm: "h-[36px] px-2",
  "2xl": "h-[64px] px-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "2xl",
  color = "colors_white_solid",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["3xl", "xl", "xs", "md", "lg", "sm", "2xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "main_color_orange_500_0",
    "text_70",
    "colors_white_solid",
    "red_A200_14",
    "white_A700_3f",
    "red_A200_19",
    "white_A700_19",
  ]),
};

export { Button };
