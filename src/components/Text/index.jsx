import React from "react";

const sizes = {
  body_size_20_regular: "text-[20px] font-normal not-italic lg:text-[17px]",
  body_size_14_regular: "text-[14px] font-normal not-italic",
  body_size_12_regular: "text-[12px] font-normal not-italic",
  body_size_24_regular: "text-[24px] font-normal not-italic lg:text-[20px] md:text-[22px]",
  body_size_16_regular: "text-[16px] font-normal not-italic lg:text-[13px]",
  textmd: "text-[14px] font-normal not-italic",
  textlg: "text-[16px] font-normal not-italic lg:text-[13px]",
  textxl: "text-[20px] font-normal not-italic lg:text-[17px]",
  text2xl: "text-[28px] font-normal not-italic lg:text-[23px] md:text-[26px] sm:text-[24px]",
  text3xl: "text-[32px] font-normal not-italic lg:text-[27px] md:text-[30px] sm:text-[28px]",
  text4xl: "text-[40px] font-normal not-italic lg:text-[34px] md:text-[38px] sm:text-[36px]",
  text5xl: "text-[136px] font-normal not-italic lg:text-[136px] md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "textmd", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-text-70 font-arimo ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
