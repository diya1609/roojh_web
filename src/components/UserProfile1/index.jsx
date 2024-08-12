import { Heading, Text, Img } from "./..";
import React from "react";

export default function UserProfile1({
  userImage = "images/img_iconly.png",
  userCount = "658+",
  userLabel = "Patients",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-[58px] sm:gap-[29px]`}>
      <div className="flex justify-center self-stretch bg-main_color-orange-500-0 px-1.5">
        <Img src={userImage} alt="Icon Image" className="mt-1.5 h-px object-cover" />
      </div>
      <div className="flex flex-col items-center gap-[82px] self-stretch">
        <Text as="p" className="!text-[14.3px] !font-medium !text-text-100-0">
          {userCount}
        </Text>
        <Heading size="headingxs" as="p" className="!text-[10.73px] !text-blue_gray-400">
          {userLabel}
        </Heading>
      </div>
    </div>
  );
}
