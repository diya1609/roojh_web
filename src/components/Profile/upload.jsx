import { Img, Text, Heading } from "./..";
import React from "react";
import decorativeImage from '../img_section/Group 1000004599.png';

export default function Upload({
  stepCounterText = "Step 2",
  healthDataText = "Take pictures and upload on Roojh App",
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
              
            </div>
            <div className="absolute right-[18%] top-0 m-auto p-4 shadow-xs mt-20">
            <Img
              src={decorativeImage}
              alt="Decorative Image"
              className="h-[172px] w-full rounded-[10px] object-cover sm:h-auto"
            />
          </div>
          </div>
                
        </div>
      </div>
    </div>
  );
}
