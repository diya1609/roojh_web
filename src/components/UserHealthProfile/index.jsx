import { Img, Text } from "./..";
import React from "react";
import mom from '../../components/img_section/Chillll (13) 2 (1).png'

export default function UserHealthProfile({
  healthStatusText = "How is Dad’s sugar level in the past 3 months?",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} h-[328px] md:w-full border-gray-300 border-[0.5px] border-solid bg-main_color-orange-500-0 relative rounded-[32px] overflow-hidden`}
    >
      <Text
        size="text3xl"
        as="p"
        className="absolute left-[10%] top-[15%] m-auto w-[62%] leading-[150%] tracking-[-0.64px] !text-colors-white-solid"
      >
        {healthStatusText}
      </Text>
      <div className="absolute bottom-[-52px] right-[-67px] m-auto w-[56%] rounded-[140px] bg-white-a700_1e px-6 sm:px-5">
      <Img src="images/img_chillll_12_2.png" alt="Chill Image" className="mb-8 mr-3 h-[248px] w-full object-cover" />
      </div>
    </div>
  );
}
