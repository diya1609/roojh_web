import { Text, Heading } from "./..";
import React from "react";

export default function PharmacyInfo({
  pharmacyInitial = "G",
  pharmacyName = "Gore Pharmacy",
  pharmacyLocation = "MIG Colony | 900M",
  directionText = "Direction",
  pharmacyHours = "Open ⋅ Closes 11PM",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-4 px-3 py-4 border-gray-300 border-[0.5px] border-solid bg-colors-white-solid flex-1 rounded-[12px]`}
    >
      <div className="flex w-[64px] flex-col items-center justify-center rounded-[32px] bg-blue-100">
        <Text size="text3xl" as="p" className="capitalize !text-text-100-0">
          {pharmacyInitial}
        </Text>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center">
        <Heading size="headingmd" as="h6" className="!font-bold !text-text-100-0">
          {pharmacyName}
        </Heading>
        <div className="relative mt-[-4px] flex items-center justify-between gap-5 self-stretch">
          <Text size="body_size_12_regular" as="p" className="self-end">
            {pharmacyLocation}
          </Text>
          <div className="flex rounded-lg bg-main_color-orange-500-0 p-1">
            <Heading size="texts" as="p" className="capitalize">
              {directionText}
            </Heading>
          </div>
        </div>
        <Text size="body_size_12_regular" as="p">
          {pharmacyHours}
        </Text>
      </div>
    </div>
  );
}
