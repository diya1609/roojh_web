import { Img, Text, Heading } from "./..";
import React from "react";
import decorativeImage from '../img_section/Chillll (25) 1.png'

export default function PersonalHealth({
    stepCounterText = "Step 3",
    healthDataText = "Roojh will build comprehensive personal health profile for you",
    medicalFilesDescription = "with Augmented AI + team of members",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex w-full items-center sm:w-full">
        <div className="relative h-[80px] w-[12%] content-center sm:h-auto">
          <Img src="images/img_ellipse_14.png" alt="Circle Image" className="h-[80px] w-[74%] rounded-[50%]" />
          <Heading
            size="body_size_24_bold"
            as="h4"
            className="absolute bottom-[20.89px] left-[11.03px] m-auto sm:text-[20px]"
          >
            {stepCounterText}
          </Heading>
        </div>
        <div className="relative h-[368px] flex-1">
          <div className="absolute bottom-px left-0 right-0 my-auto ml-8 mr-auto h-[328px] flex-1 rounded-[24px] bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat p-[52px] md:p-5 sm:ml-0 sm:h-auto">
            <div className="flex flex-col items-start gap-3 sm:gap-1">
              <Heading
                size="heading_36"
                as="h1"
                className="w-[70%] leading-[118%] !text-text-100-0 sm:w-full sm:text-[25px]"
              >
                {healthDataText}
              </Heading>
              <Text size="body_size_20_regular" as="p" className="w-[70%] leading-[150%] sm:w-full sm:text-[17px]">
                {medicalFilesDescription}
              </Text>
            </div>
          </div>
          <div className="absolute right-[5%] top-0 m-auto mt-20">
            <Img
              src={decorativeImage}
              alt="Decorative Image"
              className="h-[192px] w-[192px] rounded-[10px] object-cover sm:h-auto sm:w-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
