import { Img, Text } from "./..";
import React from "react";

export default function UserProfileDescription({ descriptionText, imgSrc, ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-end bg-extra_color-bg flex-1 rounded-[32px]`}>
      <div className="mt-[38px] flex w-full items-start justify-center sm:w-full">
        <Text
          size="text3xl"
          as="p"
          className="mt-[52px] w-[64%] leading-[150%] tracking-[-0.64px] sm:w-[64%] sm:text-[27px]"
        >
          {descriptionText}
        </Text>
        {imgSrc && (
          <Img
            src={imgSrc}
            alt="Health Image"
            className="relative ml-[-16px] h-[290px] w-[30%] self-center object-contain"
          />
        )}
      </div>
    </div>
  );
}
