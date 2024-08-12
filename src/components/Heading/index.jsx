import React from "react";

const sizes = {
  body_size_16_medium: "text-[16px] font-medium lg:text-[13px]",
  body_size_24_medium: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  body_size_18_medium: "text-[18px] font-medium lg:text-[15px]",
  body_size_24_bold: "tracking-[-0.24px] text-[24px] font-bold lg:text-[20px] md:text-[22px]",
  heading_36: "tracking-[-0.72px] text-[36px] font-semibold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  body_size_20_medium: "text-[20px] font-medium lg:text-[17px]",
  heading_64: "tracking-[-1.28px] text-[64px] font-bold lg:text-[64px] md:text-[48px]",
  textxs: "text-[10px] font-medium",
  texts: "text-[12px] font-medium",
  headingxs: "text-[10px] font-semibold",
  headings: "text-[14px] font-bold",
  headingmd: "text-[16px] font-semibold lg:text-[13px]",
  headinglg: "text-[20px] font-bold lg:text-[17px]",
  headingxl: "text-[24px] font-bold italic lg:text-[20px] md:text-[22px]",
  heading2xl: "text-[28px] font-bold lg:text-[23px] md:text-[26px] sm:text-[24px]",
  heading3xl: "text-[32px] font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
  heading4xl: "text-[40px] font-bold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  heading5xl: "text-[64px] font-bold lg:text-[64px] md:text-[48px]",
  heading6xl: "text-[180px] font-bold lg:text-[180px] md:text-[48px]",
  heading7xl: "text-[484px] font-bold lg:text-[484px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "body_size_16_medium", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-colors-white-solid font-arimo ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
