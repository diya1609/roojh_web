import { Img, Heading, Text, Button } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex`}>
      <div className="relative mb-[134px] h-[592px] w-full">
        {/* Background image */}
        <Img
          src="images/img_ellipse_15.png"
          alt="Footer Image"
          className="absolute bottom-0 right-0 top-0 my-auto h-[566px] w-[42%] rounded-[282px] object-contain z-10"
        />
        {/* Text section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex flex-1 flex-col items-start bg-text-100-0 py-[30px] pl-[94px] pr-14 lg:pl-8 md:px-5 sm:p-4 z-20">
          {/* Content inside text section */}
          <div className="mt-[30px] flex w-[16%] flex-col gap-4 lg:w-full md:w-full">
            <div className="flex items-center gap-2">
              <div className="relative h-[68px] w-[30%] content-center lg:h-auto md:h-auto">
                <Img
                  src="images/img_ellipse_14.png"
                  alt="Profile Image"
                  className="mx-auto h-[68px] w-full rounded-[50%]"
                />
                <Img
                  src="images/img_close_colors_white_solid.svg"
                  alt="Close Image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[46px] w-[46px]"
                />
              </div>
              <div className="flex flex-1 flex-col items-start">
                <Heading size="heading4xl" as="h1" className="tracking-[-0.80px] md:text-[34px] sm:text-[32px]">
                  Roojh
                </Heading>
                <Text size="body_size_16_regular" as="p" className="!text-colors-white-solid">
                  Your AI health advisor
                </Text>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                color="white_A700_19"
                size="sm"
                variant="fill"
                shape="circle"
                className="w-[36px] !rounded-[18px]"
              >
                <Img src="images/img_iconoir_facebook.svg" />
              </Button>
              <Button
                color="white_A700_19"
                size="sm"
                variant="fill"
                shape="circle"
                className="w-[36px] !rounded-[18px]"
              >
                <Img src="images/img_pajamas_twitter.svg" />
              </Button>
              <Button
                color="white_A700_19"
                size="sm"
                variant="fill"
                shape="circle"
                className="w-[36px] !rounded-[18px]"
              >
                <Img src="images/img_uit_linkedin_alt.svg" />
              </Button>
              <Img src="images/img_info.svg" alt="Info Image" className="h-[36px] w-[36px]" />
            </div>
          </div>
          <div className="mt-[82px] flex w-[18%] flex-col items-start gap-4 lg:w-full md:w-full">
            <Heading as="p">Get The App</Heading>
            <ul className="flex gap-3 self-stretch">
              <li>
                <a href="#">
                  <Img
                    src="images/img_group_1000006658.png"
                    alt="App Store Image"
                    className="h-[40px] w-[124px] rounded-md object-contain"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Img
                    src="images/img_group_1000006653.png"
                    alt="Play Store Image"
                    className="h-[40px] w-[124px] rounded-md object-contain"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-9 flex flex-col items-start justify-center gap-1.5">
            <Heading as="p">-Built By Doctors</Heading>
            <Heading as="p">Government of India ABDM approved PHR and EHR App</Heading>
          </div>
          <div className="mt-[42px] flex w-[34%] flex-col items-start gap-4 lg:w-full md:w-full">
            <div className="h-[0.5px] self-stretch bg-colors-white-solid" />
            <Text size="body_size_12_regular" as="p" className="!text-colors-white-solid">
              Copyright © 2024 Roojh. All Rights Reserved
            </Text>
          </div>
        </div>
        {/* Footer link section */}
        <div className="absolute bottom-0 right-[11%] top-0 my-auto flex h-max w-[24%] items-start justify-between gap-5 z-20">
          <div className="flex w-[54%] flex-col items-start gap-6 self-center">
            <Heading size="body_size_24_bold" as="h4">
              Explore
            </Heading>
            <ul className="flex flex-col items-start gap-4">
              <li>
                <a href="#">
                  <Heading as="p">For Doctors</Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="p">For Partners</Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="p">Create ABHA</Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="p">About Us</Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="p">Contact us</Heading>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-6">
            <Heading size="body_size_24_bold" as="h4">
              Legal
            </Heading>
            <ul className="flex flex-col items-start gap-4">
              <li>
                <a href="#">
                  <Heading as="p">Privacy Policy</Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="p">Terms And Conditation</Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="p">Refund Policy</Heading>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Main image */}
        <Img
          src="images/img_ellipse_14_main_color_orange_500_0.png"
          alt="Main Image"
          className="absolute bottom-0 right-0 top-0 my-auto h-[566px] w-[42%] rounded-[282px] object-contain z-0"
        />
      </div>
    </footer>
  );
}
