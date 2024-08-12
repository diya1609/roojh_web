import { Text, Heading } from "../../components";
import UserProfileDescription from "../../components/UserProfileDescription";
import React, { Suspense } from "react";
import snacks from "../../components/img_section/snacks.png";
import man from "../../components/img_section/man.png";

const healthTipsList = [
  {
    descriptionText:
      "Your recent serum iron pressure readings are slightly higher than usual. Consider low-sodium meals to help manage it.",
    imgSrc: "images/img_minimalist_logo.png", // Example of an image source
  },
  {
    descriptionText:
      "You might be consuming more sugar than recommended. Would you like to explore some low-sugar snack options?",
    imgSrc: snacks, // Another image source
  },
  {
    descriptionText:
      "Feeling stressed? Try Meditation! Ready for a quick session together",
    imgSrc: man,
  },
];

export default function PersonalizedHealthAdviceSection(...props) {
  return (
    <>
      {/* personalized health advice section */}
      <div {...props} className="self-stretch">
        <div className="flex flex-col items-center justify-center bg-gradient3 py-[130px] lg:py-8 md:py-5 sm:py-4">
          <div className="container-xs flex flex-col gap-24 lg:gap-24 lg:px-5 md:gap-[72px] md:px-5 sm:gap-12">
            <div className="flex flex-col gap-10">
              <Heading
                size="heading5xl"
                as="h2"
                className="text-center leading-[100%] tracking-[-1.28px] lg:text-[48px]"
              >
                Get personalized health advice, just for you
              </Heading>
              <Text
                size="body_size_24_regular"
                as="p"
                className="text-center leading-[150%] !text-colors-white-solid"
              >
                Feeling a bit low on energy? Roojh suggests a quick, uplifting
                workout or recommends a nutritious snack to keep you fueled
                throughout the day. It’s like having a wellness genie in your
                pocket!
              </Text>
            </div>
            <div className="mx-[18px] flex flex-col gap-[38px] md:mx-0">
              <Suspense fallback={<div>Loading feed...</div>}>
                {healthTipsList.map((item, index) => (
                  <UserProfileDescription
                    key={`featuresList-${index}`}
                    descriptionText={item.descriptionText}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
