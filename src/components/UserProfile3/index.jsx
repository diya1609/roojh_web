import { Text, Button, Img } from "./..";
import React from "react";

export default function UserProfile3({ userDescription = "Symptoms &  Conditions", ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center md:w-full gap-4`}>
      <Button shape="circle" className="w-[64px] !rounded-[32px]">
        <Img src="images/img_1st.svg" />
      </Button>
      <div className="self-stretch p-1.5">
        <Text as="p" className="text-center leading-[120%] !text-colors-white-solid">
          {userDescription}
        </Text>
      </div>
    </div>
  );
}
