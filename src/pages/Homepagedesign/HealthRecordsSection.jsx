import { Heading, Text, Img } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React from "react";

export default function HealthRecordsSection() {
  return (
    <>
      {/* health records section */}
      <div className="self-stretch">
        <div className="flex flex-col items-center justify-center bg-extra_color-bg py-[130px] lg:py-8 md:py-5 sm:py-4">
          <div className="container-xs flex flex-col gap-[52px] lg:px-5 md:px-5 sm:gap-[26px]">
            <div className="flex flex-col items-center gap-10">
              <Heading
                size="heading5xl"
                as="h2"
                className="self-stretch bg-gradient2 bg-clip-text text-center leading-[100%] tracking-[-1.28px] !text-transparent lg:text-[48px]"
              >
                Maintain your health records in one place
              </Heading>
              <Text size="body_size_24_regular" as="p" className="text-center leading-[150%]">
                <>
                  Need vaccination history for your son’s school admission? <br />
                  Roojh has you covered! Store and access all your health records in one secure place, <br />
                  making paperwork a thing of the past.
                </>
              </Text>
            </div>
            <div className="mx-[18px] md:mx-0">
              <div className="flex flex-col gap-9">
                <div className="flex items-center justify-between gap-5 rounded-[32px] border border-solid border-gray-300 bg-colors-white-solid px-[22px] md:flex-col sm:px-4">
                  <Text
                    size="text3xl"
                    as="p"
                    className="ml-8 w-[52%] leading-[150%] tracking-[-0.64px] lg:ml-0 lg:w-[52%] md:ml-0 md:w-full md:text-[26px] sm:text-[24px]"
                  >
                    <span className="bg-gradient2 bg-clip-text font-bold text-transparent">Hey Roojh</span>
                    <span className="text-text-70">
                      <>
                        &nbsp;👋
                        <br />
                        How do I access my medical history in case of emergency?
                      </>
                    </span>
                  </Text>
                  <div className="mt-11 flex w-[40%] justify-center self-end rounded-tl-[24px] rounded-tr-[24px] bg-colors-white-solid px-9 py-14 shadow-2xl md:w-full md:self-auto md:p-5 sm:px-5 sm:py-4">
                    <Text
                      size="textxl"
                      as="p"
                      className="mb-[30px] flex-1 text-center !font-medium capitalize leading-[150%] tracking-[-0.20px]"
                    >
                      How do i access my medical history in case of emergency
                    </Text>
                  </div>
                </div>
                <div className="flex gap-[18px] md:flex-col">
                  <div className="flex w-full flex-col gap-[72px] rounded-[32px] border border-solid border-gray-300 bg-colors-white-solid px-[26px] lg:gap-[72px] md:gap-[54px] sm:gap-9 sm:px-4">
                    <Text
                      size="text3xl"
                      as="p"
                      className="mt-12 text-center leading-[150%] tracking-[-0.64px] md:text-[26px] sm:text-[24px]"
                    >
                      How can I update my medication list on the app?
                    </Text>
                    <div className="rounded-[18px] border-[0.24px] border-solid border-gray-300 bg-colors-white-solid px-6 shadow-3xl sm:px-4">
                      <Img
                        src="images/img_image_289.png"
                        alt="Faqs Image"
                        className="mt-6 h-[298px] w-full rounded-lg object-cover lg:h-auto md:h-auto"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[26px] rounded-[32px] border border-solid border-gray-300 bg-colors-white-solid px-[50px] md:px-5 sm:px-4">
                    <Text
                      size="text3xl"
                      as="p"
                      className="mt-12 text-center leading-[150%] tracking-[-0.64px] md:text-[26px] sm:text-[24px]"
                    >
                      How can you remind me when my next health check-up is due?
                    </Text>
                    <div className="ml-2.5 mr-3 rounded-[24px] bg-colors-white-solid px-5 shadow-4xl md:mx-0">
                      <div className="mt-[22px]">
                        <div className="flex items-center gap-[21px]">
                          <div className="flex flex-col items-center rounded-md border-[0.89px] border-solid border-text-100-0 p-1.5">
                            <Img
                              src="images/img_arrow_left.svg"
                              alt="Appointment Back Image"
                              className="h-[20px] w-[20px]"
                            />
                          </div>
                          <Heading size="headings" as="h3" className="!text-[14.3px] !text-text-100-0">
                            My Appointment
                          </Heading>
                        </div>
                        <div className="mt-6 rounded-tl-md rounded-tr-md bg-gray-50">
                          <Img
                            src="images/img_image_4.png"
                            alt="Appointment Image"
                            className="h-[176px] w-full rounded-tl-md rounded-tr-md object-cover lg:h-auto md:h-auto"
                          />
                        </div>
                        <div className="flex items-start justify-center gap-1 bg-colors-white-solid p-2 shadow-5xl">
                          <div className="flex flex-1 flex-col items-start gap-1.5 self-center">
                            <Heading size="headings" as="h4" className="!text-[14.3px] !font-semibold !text-text-100-0">
                              Dr. Ankit Soni
                            </Heading>
                            <Heading size="textxs" as="h5" className="!text-[10.73px] !text-blue_gray-400">
                              Cardiologists | Mars Hospital
                            </Heading>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Img
                              src="images/img_ant_design_star_filled.svg"
                              alt="Doctor Rating Image"
                              className="h-[16px] w-[16px]"
                            />
                            <Heading size="textxs" as="h6" className="!text-[10.73px] !text-text-100-0">
                              5.0 (332 reviews)
                            </Heading>
                          </div>
                        </div>
                        <div className="mt-3.5 flex justify-between gap-5">
                          <div className="flex w-[46%] gap-[34px] md:flex-row">
                            <UserProfile1 className="w-[38%]" />
                            <UserProfile1
                              userImage="images/img_iconly_main_color_orange_500_0.png"
                              userCount="11+"
                              userLabel="Years expert"
                              className="w-[60%]"
                            />
                          </div>
                          <div className="flex w-[12%] flex-col gap-[58px] sm:gap-[29px]">
                            <div className="flex justify-center bg-main_color-orange-500-0 px-2">
                              <Img
                                src="images/img_vector_main_color_orange_500_0.png"
                                alt="Doctor Rating Icon"
                                className="mt-2 h-px object-cover"
                              />
                            </div>
                            <div className="flex flex-col items-center gap-[82px] lg:gap-[82px] md:gap-[61px] sm:gap-[41px]">
                              <Text as="p" className="!text-[14.3px] !font-medium !text-text-100-0">
                                5.0
                              </Text>
                              <Heading size="headingxs" as="p" className="!text-[10.73px] !text-blue_gray-400">
                                Rating
                              </Heading>
                            </div>
                          </div>
                          <div className="flex w-[16%] flex-col items-start gap-[58px] sm:gap-[29px]">
                            <div className="flex bg-main_color-orange-500-0 px-1.5">
                              <Img
                                src="images/img_iconly_main_color_orange_500_0_1x20.png"
                                alt="Doctor Reviews Icon"
                                className="mt-1.5 h-px object-cover"
                              />
                            </div>
                            <div className="mr-1 flex flex-col items-center gap-[82px] self-stretch lg:gap-[82px] md:mr-0 md:gap-[61px] sm:gap-[41px]">
                              <Text as="p" className="!text-[14.3px] !font-medium !text-text-100-0">
                                300+
                              </Text>
                              <Heading size="headingxs" as="p" className="!text-[10.73px] !text-blue_gray-400">
                                Reviews
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
