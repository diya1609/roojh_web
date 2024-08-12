import { Text, Heading, Img } from "./..";
import React from "react";

export default function HealthInformation({
  symptomsConditionsText = "Symptoms &  Conditions",
  coughCauseText = "What could be causing my cough?",
  symptomsConditionsTextOne = "Symptoms &  Conditions",
  coughCauseTextOne = "What could be causing my cough?",
  preventionsWellnessText = "Preventions & Wellness",
  fluPreventionText = "What can I do to avoid getting the flu?",
  roojhHeading = "Roojh",
  empowerText = "Empower Personal Health",
  labTestsDiagnosticsText = "Lab Tests & Diagnostics",
  serumTestResultText = "What do these serum test result mean?",
  labTestsDiagnosticsTextOne = "Lab Tests & Diagnostics",
  bloodTestResultText = "What do these blood test result mean?",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-6`}>
      <div className="flex w-full flex-col items-center gap-[88px] rounded-[12px] border-[0.5px] border-solid border-gray-300 bg-extra_color-bg p-2.5">
        <div className="mt-1.5 flex self-stretch">
          <Text size="body_size_16_regular" as="p" className="self-end">
            {symptomsConditionsText}
          </Text>
        </div>
        <Text size="textxl" as="p" className="w-[94%] leading-[22px] !text-text-100-0 lg:w-full md:w-full">
          {coughCauseText}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center gap-[88px] rounded-[12px] border-[0.5px] border-solid border-gray-300 bg-extra_color-bg p-2.5">
        <div className="mt-1.5 flex self-stretch">
          <Text size="body_size_16_regular" as="p" className="self-end">
            {symptomsConditionsTextOne}
          </Text>
        </div>
        <Text size="textxl" as="p" className="w-[94%] leading-[22px] !text-text-100-0 lg:w-full md:w-full">
          {coughCauseTextOne}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center gap-[88px] rounded-[12px] border-[0.5px] border-solid border-gray-300 bg-extra_color-bg p-4">
        <div className="flex">
          <Text size="body_size_16_regular" as="p">
            {preventionsWellnessText}
          </Text>
        </div>
        <Text size="textxl" as="p" className="mb-3.5 leading-[22px] !text-text-100-0">
          {fluPreventionText}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2.5 rounded-[12px] bg-colors-white-solid p-7">
        <Img src="images/img_vector_gradient_text.svg" alt="Roojh Image" className="h-[74px] w-[90%] object-contain" />
        <Heading size="headingxl" as="h4" className="tracking-[-0.48px] !text-text-100-1">
          {roojhHeading}
        </Heading>
        <Text size="body_size_14_regular" as="p" className="!text-text-50">
          {empowerText}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center gap-[88px] rounded-[12px] border-[0.5px] border-solid border-gray-300 bg-extra_color-bg p-2.5">
        <div className="mt-1.5 flex self-stretch">
          <Text size="body_size_16_regular" as="p" className="self-end">
            {labTestsDiagnosticsText}
          </Text>
        </div>
        <Text size="textxl" as="p" className="w-[94%] leading-[22px] !text-text-100-0 lg:w-full md:w-full">
          {serumTestResultText}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center gap-[88px] rounded-[12px] border-[0.5px] border-solid border-gray-300 bg-extra_color-bg p-2.5">
        <div className="mt-1.5 flex justify-center self-stretch">
          <Text size="body_size_16_regular" as="p" className="self-end">
            {labTestsDiagnosticsTextOne}
          </Text>
        </div>
        <Text size="textxl" as="p" className="w-[94%] leading-[22px] !text-text-100-0 lg:w-full md:w-full">
          {bloodTestResultText}
        </Text>
      </div>
    </div>
  );
}
