
import { Img, Text } from "./..";
import React from "react";
import left from '../../components/img_section/Chillll (1) 2.png'
import right from '../../components/img_section/Chillll (3) 2.png'

export default function HealthSurveySplit({
  leftSectionText = "Any changes in your heart rate that we should be aware of ?",
  rightSectionText = "What are my latest sugar level readings ?",
  leftImage = left,
  rightImage = right,
  gap = "16px", 
  borderRadius = "8px",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-stretch w-full h-[368px]`}>
      
      {/* Left Section */}
      <div className={`flex flex-row items-center justify-between w-[49%] p-0 bg-white`} 
           style={{ marginRight: gap, borderRadius: borderRadius, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <div className="flex flex-col items-center justify-center w-1/2 text-center">
          <Text size="text3xl" as="p" className="leading-[150%] tracking-[-0.64px] !text-text-100-0 mb-4">
            {leftSectionText}
          </Text>
        </div>
        <Img src={leftImage} alt="Left Section Image" className="h-[200px] w-full object-cover" />
      </div>

      {/* Right Section */}
      <div className={`flex flex-row items-center justify-between w-[49%] p-0 bg-gray-100`} 
           style={{ marginLeft: gap, borderRadius: borderRadius, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <Img src={rightImage} alt="Right Section Image" className="h-[200px] w-full object-cover" />
        <div className="flex flex-col items-center justify-center w-1/2 text-center">
          <Text size="text3xl" as="p" className="leading-[150%] tracking-[-0.64px] !text-text-100-0 mb-4">
            {rightSectionText}
          </Text>
        </div>
      </div>
    </div>
  );
}


