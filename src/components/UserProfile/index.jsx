import { Img, Text, Heading } from "./..";
import React from "react";

export default function UserProfile({
  stepCounterText = "Step 1",
  healthDataText = "Get your current health data",
  medicalFilesDescription = "Medical files, X-Ray, your sugar level reports, MRI, medical prescriptions and more",
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
            <div className="flex flex-col items-start gap-1 sm:gap-1">
              <Heading
                size="heading_36"
                as="h1"
                className="w-[36%] leading-[118%] !text-text-100-0 sm:w-full sm:text-[30px]"
              >
                {healthDataText}
              </Heading>
              <Text size="body_size_20_regular" as="p" className="w-[50%] leading-[150%] sm:w-full sm:text-[17px]">
                {medicalFilesDescription}
              </Text>
            </div>
          </div>
          <div className="absolute right-[18%] top-0 m-auto flex rounded-[24px] bg-colors-white-solid p-4 shadow-xs">
            <Img
              src="images/img_chillll_2.png"
              alt="Decorative Image"
              className="h-[172px] w-full rounded-[10px] object-cover sm:h-auto"
            />
          </div>
          <div className="absolute right-[22px] top-[11%] m-auto w-[20%] rounded-[10px] border-[0.54px] border-solid border-gray-300 bg-colors-white-solid p-2.5">
            <Img src="images/img_image_288.png" alt="Step Image" className="h-[188px] w-full object-cover sm:h-auto" />
          </div>
          <div className="absolute bottom-[11%] right-[15%] m-auto flex rounded-[12px] border-[0.55px] border-solid border-gray-300 bg-colors-white-solid p-3">
            <Img
              src="images/img_chillll_27_1.png"
              alt="Step Detail Image"
              className="h-[148px] w-[98%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
