import { Img, Text } from "./..";
import React from "react";

export default function HealthSurvey({
  surveyQuestion = "Are you noticing any unusual symptoms related to serum iron levels?",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col justify-between items-center flex-1`}>
      <Text size="text3xl" as="p" className="ml-[46px] w-[48%] leading-[150%] tracking-[-0.64px] !text-text-100-0">
        {surveyQuestion}
      </Text>
      <Img src="images/img_chillll_26_1.png" alt="Related Image" className="h-[328px] w-[34%] object-contain" />
    </div>
  );
}
