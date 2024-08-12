import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile2({
  userImage = "images/img_ellipse_30.png",
  userName = "Dr. Priya Sharma",
  userTitle = "Oncologist | CHSL Hospital",
  userRatingText = "5.0 (332 reviews)",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-4 p-3 md:px-5 border-gray-300 border-[0.5px] border-solid bg-colors-white-solid flex-1 rounded-[12px]`}
    >
      <Img src={userImage} alt="Profile Image" className="h-[64px] w-[64px] rounded-[32px] object-cover" />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex flex-col items-start justify-center gap-0.5">
          <Heading size="headingmd" as="h6" className="!font-inter !text-text-100-0">
            {userName}
          </Heading>
          <Heading size="texts" as="p" className="!font-inter !text-blue_gray-400">
            {userTitle}
          </Heading>
        </div>
        <div className="flex items-center px-2">
          <Img src="images/img_ant_design_star_filled.svg" alt="Rating Star" className="h-[18px] w-[18px]" />
          <Heading size="texts" as="p" className="!font-inter !text-text-100-0">
            {userRatingText}
          </Heading>
        </div>
      </div>
    </div>
  );
}
