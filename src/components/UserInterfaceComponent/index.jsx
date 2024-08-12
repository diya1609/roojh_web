import { Button, Heading, Img } from "./..";
import React from "react";

export default function UserInterfaceComponent({
  headingText = "Roojh",
  forDoctorsText = "For Doctors",
  forPartnersText = "For Partners",
  createAbhaText = "Create ABHA",
  aboutUsText = "About Us",
  logInButton = "Log in",
  signUpButton = "Sign Up",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex self-stretch justify-center items-center p-5 bg-colors-white-solid`}
    >
      <div className="mx-auto flex w-full max-w-[1420px] items-center justify-between gap-5 md:flex-col">
        <div className="flex items-center gap-2">
          <Img src="images/img_close.svg" alt="Close Button" className="h-[44px]" />
          <Heading
            size="heading2xl"
            as="h3"
            className="bg-gradient bg-clip-text !font-poppins tracking-[0.28px] !text-transparent md:text-[22px]"
          >
            {headingText}
          </Heading>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4 md:flex-col md:self-stretch">
          <div className="flex flex-1 items-center justify-end md:self-stretch sm:flex-col">
            <Heading as="p" className="!text-text-100-0">
              {forDoctorsText}
            </Heading>
            <Heading as="p" className="ml-6 !text-text-100-0 sm:ml-0">
              {forPartnersText}
            </Heading>
            <div className="flex">
              <Heading as="p" className="!text-text-100-0">
                {createAbhaText}
              </Heading>
            </div>
            <div className="ml-3 flex sm:ml-0">
              <Heading as="p" className="!text-text-100-0">
                {aboutUsText}
              </Heading>
            </div>
          </div>
          <div className="flex gap-3.5">
            <Button
              color="main_color_orange_500_0"
              size="lg"
              className="min-w-[72px] rounded-lg font-medium capitalize"
            >
              {logInButton}
            </Button>
            <Button
              color="main_color_orange_500_0"
              size="lg"
              variant="fill"
              className="min-w-[82px] rounded-lg font-medium capitalize"
            >
              {signUpButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
