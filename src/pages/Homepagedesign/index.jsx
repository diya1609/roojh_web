import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading, Slider } from "../../components";
import Footer from "../../components/Footer";
import HealthInformation from "../../components/HealthInformation";
import HealthSurvey from "../../components/HealthSurvey";
import PharmacyInfo from "../../components/PharmacyInfo";
import UserHealthProfile from "../../components/UserHealthProfile";
import UserInterfaceComponent from "../../components/UserInterfaceComponent";
import UserProfile from "../../components/UserProfile";
import UserProfile2 from "../../components/UserProfile2";
import UserProfile3 from "../../components/UserProfile3";
import FAQsSection from "./FAQsSection";
import HealthRecordsSection from "./HealthRecordsSection";
import PersonalizedHealthAdviceSection from "./PersonalizedHealthAdviceSection";
import React, { Suspense } from "react";
import Upload from "components/Profile/upload";
import PersonalHealth from "components/Profile/personalHealth";
import Questions from "components/Profile/questions";
import HealthSurveySplit from "components/HealthSurveySplit";
import UserHealthProf from "components/UserHHealthProf";

const doctorProfiles = [
  {
    userImage: "images/img_ellipse_30.png",
    userName: "Dr. Priya Sharma",
    userTitle: "Oncologist | CHSL Hospital",
    userRatingText: "5.0 (332 reviews)",
  },
  {
    userImage: "images/img_ellipse_30_64x64.png",
    userName: "Dr. Anil Gupta",
    userTitle: "Pediatrician | Soni Hospital",
    userRatingText: "5.0 (332 reviews)",
  },
  {
    userImage: "images/img_ellipse_30_1.png",
    userName: "Dr. Sanjay Singh",
    userTitle: "Psychiatrist | Reewa Hospital",
    userRatingText: "5.0 (332 reviews)",
  },
];
const pharmacyList = [
  {
    pharmacyInitial: "G",
    pharmacyName: "Gore Pharmacy",
    pharmacyLocation: "MIG Colony | 900M",
    directionText: "Direction",
    pharmacyHours: "Open ⋅ Closes 11PM",
  },
  {
    pharmacyInitial: "A",
    pharmacyName: "Apollo Pharmacy",
    pharmacyLocation: "LIG Main Road | 1.3km ",
    directionText: "Direction",
    pharmacyHours: "Open ⋅ Closes 11PM",
  },
  {
    pharmacyInitial: "R",
    pharmacyName: "Ratan Chemist",
    pharmacyLocation: "LIG Main Road | 1.4km",
    directionText: "Direction",
    pharmacyHours: "Open ⋅ Closes 11PM",
  },
];

export default function HomepagedesignPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Health Advisor - Your Personal AI Health Guide | Roojh</title>
        <meta
          name="description"
          content="Discover Roojh, your personal AI health advisor. Get answers to health questions, manage medical records, and connect with doctors. Government of India ABDM approved app for secure health data management."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[118px] bg-colors-white-solid lg:gap-[118px] md:gap-[88px] sm:gap-[59px]">
        <div className="flex flex-col items-center">
          <div className="relative h-[572px] self-stretch lg:h-auto md:h-auto">
            <Heading
              size="heading7xl"
              as="h1"
              className="!text-[484.74px] tracking-[-38.78px] !text-black-900_05 lg:!text-[48px]"
            >
              Roojh
            </Heading>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
              <div className="h-[486px] self-stretch bg-[url(/public/images/img_group_2.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                <div className="mb-[116px] flex flex-col items-center gap-[26px]">
                  <UserInterfaceComponent />
                  <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
                    <div className="flex w-[56%] flex-col items-center gap-2.5 lg:w-full md:w-full">
                      <div className="relative h-[212px] content-center self-stretch lg:h-auto md:h-auto">
                        <Heading
                          size="heading6xl"
                          as="h2"
                          className="mx-auto bg-gradient2 bg-clip-text tracking-[-7.20px] !text-transparent lg:text-[48px]"
                        >
                          Roojh
                        </Heading>
                        <Heading
                          size="heading6xl"
                          as="h3"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max bg-gradient2 bg-clip-text tracking-[-7.20px] !text-transparent lg:text-[48px]"
                        >
                          Roojh
                        </Heading>
                      </div>
                      <Heading
                        size="body_size_24_medium"
                        as="h4"
                        className="!text-text-70"
                      >
                        Your personal AI health advisor
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-xs relative z-[1] mt-[-84px] flex flex-col items-center px-14 lg:px-5 md:px-5">
                <Img
                  src="images/img_group_1000004694.png"
                  alt="Image"
                  className="h-[170px] w-[20%] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="container-xs mt-[34px] flex flex-col items-center px-14 lg:px-5 md:px-5">
            <Text
              size="text4xl"
              as="p"
              className="md:text-[34px] sm:text-[32px]"
            >
              We are ready to answer{" "}
            </Text>
            <Heading
              size="heading4xl"
              as="h2"
              className="mt-2.5 bg-gradient2 bg-clip-text tracking-[-0.80px] !text-transparent md:text-[34px] sm:text-[32px]"
            >
              your health related questions
            </Heading>
            <Heading
              size="body_size_20_medium"
              as="h3"
              className="mt-[30px] !text-main_color-orange-500-0"
            >
              Built By Doctors
            </Heading>
            <Img
              src="images/img_vector.svg"
              alt="Decorative Image"
              className="mt-4 h-[38px] w-[30%] object-contain"
            />
            <Heading
              size="body_size_18_medium"
              as="h4"
              className="mt-4 !text-text-70"
            >
              ✨ Government of India ABDM approved PHR and EHR App ✨
            </Heading>
            <Button
              color="main_color_orange_500_0"
              size="3xl"
              variant="fill"
              shape="round"
              className="mt-12 min-w-[250px] font-bold shadow-sm"
            >
              Download Roojh App
            </Button>
            <Button
              color="red_A200_14"
              size="xl"
              variant="fill"
              leftIcon={
                <Img
                  src="images/img_location.svg"
                  alt="Location"
                  className="h-[32px] w-[32px]"
                />
              }
              className="mt-[72px] min-w-[404px] gap-2 rounded-[12px] tracking-[-0.40px]"
            >
              Protected by the strongest data privacy
            </Button>
          </div>
          <div className="mt-3.5 flex w-[66%] items-center justify-center gap-6 lg:w-full lg:px-5 md:w-full md:flex-col md:px-5">
            <Text size="textlg" as="p" className="capitalize">
              HIPAA compliant
            </Text>
            <div className="flex flex-1 items-center justify-center gap-2 md:self-stretch">
              <Img
                src="images/img_image_2.png"
                alt="Certification Image"
                className="h-[24px] w-[24px] object-cover"
              />
              <Text size="textlg" as="p" className="capitalize">
                ISO/IEC 27001 Certification{" "}
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <Img
                src="images/img_user.svg"
                alt="User Image"
                className="h-[24px] w-[24px]"
              />
              <Text size="textlg" as="p" className="self-end capitalize">
                end-to-end encryption
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <Img
                src="images/img_user_text_100_0.svg"
                alt="Audit Image"
                className="h-[24px] w-[24px]"
              />
              <Text size="textlg" as="p" className="self-end capitalize">
                Regular security audits
              </Text>
            </div>
            <div className="flex flex-1 items-center justify-center gap-2 md:self-stretch">
              <Img
                src="images/img_reply.svg"
                alt="Authentication Image"
                className="h-[24px] w-[24px]"
              />
              <Text size="textlg" as="p" className="capitalize">
                Multi-factor authentication
              </Text>
            </div>
          </div>
          <div className="relative mt-[200px] h-[1900px] w-[88%]">
            <div className="absolute bottom-[3%] left-0 right-0 m-auto h-[2054px] flex-1 bg-deep_orange-400_3f blur-[155.00px] backdrop-opacity-[0.5]" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center rounded-[24px] bg-colors-white-solid py-20 lg:py-8 md:py-5 sm:py-4">
              <div className="container-xs mb-[74px] flex flex-col items-center gap-[104px] lg:gap-[104px] lg:px-5 md:gap-[78px] md:px-5 sm:gap-[52px]">
                <Heading
                  size="heading5xl"
                  as="h2"
                  className="bg-gradient2 bg-clip-text text-center leading-[100%] tracking-[-1.28px] !text-transparent lg:text-[48px]"
                >
                  <>
                    How Roojh <br />
                    magic works?
                  </>
                </Heading>
                <div className="mr-3.5 flex flex-col self-stretch space-y-8 md:mr-0">
                  <UserProfile />
                  <Upload />
                  <PersonalHealth />
                  <Questions />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-[6] mt-[-2px] flex flex-col items-center justify-center gap-16 self-stretch bg-colors-white-solid py-[130px] lg:py-8 md:py-5 sm:gap-8 sm:py-4">
            <div className="flex w-[64%] flex-col items-center gap-10 lg:w-full lg:px-5 md:w-full md:px-5">
              <div className="container-xs px-14 md:px-5 sm:px-4">
                <Heading
                  size="heading5xl"
                  as="h2"
                  className="bg-gradient2 bg-clip-text text-center leading-[100%] tracking-[-1.28px] !text-transparent lg:text-[48px]"
                >
                  Track your health journey with ease
                </Heading>
              </div>
              <Heading
                size="body_size_24_medium"
                as="h3"
                className="self-stretch text-center leading-[150%] !text-text-70"
              >
                <span className="italic tracking-[-0.24px] text-text-100-0">
                  Feeling under the weather? &nbsp;
                </span>
                <span className="font-normal text-text-70">
                  Wondering if your chronic condition is acting up? Roojh helps
                  you keep tabs on your health data, from blood pressure to your
                  serum iron level and beyond.
                </span>
              </Heading>
            </div>
            <div className="container-xs mb-10 px-4 lg:px-5 md:px-5">
              <div className="flex flex-col gap-11">
                <HealthSurvey className="gap-5 rounded-[32px] border border-solid border-gray-300 bg-extra_color-bg" />
                <HealthSurveySplit className="gap-5 rounded-[32px] border border-solid border-gray-300 bg-extra_color-bg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center self-stretch bg-colors-white-solid py-[130px] lg:py-8 md:py-5 sm:py-4">
            <div className="container-xs flex flex-col gap-24 lg:gap-24 lg:px-5 md:gap-[72px] md:px-5 sm:gap-12">
              <div className="flex flex-col items-center gap-10">
                <Heading
                  size="heading5xl"
                  as="h2"
                  className="bg-gradient2 bg-clip-text text-center leading-[100%] tracking-[-1.28px] !text-transparent lg:text-[48px]"
                >
                  <>
                    Take care of your
                    <br />
                    loved ones
                  </>
                </Heading>
                <Text
                  size="body_size_24_regular"
                  as="p"
                  className="self-stretch text-center leading-[150%]"
                >
                  Add health profiles of your loved ones and support them with
                  medication reminders, health tips, and valuable resources.
                  Because distance shouldn&#39;t limit the warmth of your care.
                </Text>
              </div>
              <div className="mx-5 flex flex-col gap-12 md:mx-0">
                <div className="flex gap-[34px] md:flex-col">
                  <UserHealthProfile className="w-[54%]" />
                  <UserHealthProf
                    healthStatusText="Did Mom see the doctor?"
                    className="flex w-[44%]"
                  />
                </div>
                <div className="flex gap-4 md:flex-col">
                  <div className="flex flex-1 items-center rounded-[32px] border-[0.5px] border-solid border-gray-300 bg-main_color-orange-500-0 md:self-stretch sm:flex-col">
                    <div className="flex-1 sm:self-stretch sm:px-5">
                      <div className="flex items-center">
                        <Img
                          src="images/img_ellipse_32.png"
                          alt="Profile Image"
                          className="relative z-[3] h-[204px] w-[26%] object-contain"
                        />
                        <Text
                          size="text3xl"
                          as="p"
                          className="relative ml-[-72px] w-[72%] leading-[140%] tracking-[-0.64px] !text-colors-white-solid md:text-[26px] sm:text-[24px]"
                        >
                          <span>
                            How was the latest routine gynecology check up of my
                          </span>
                          <span className="font-bold italic">&nbsp;</span>
                          <span>wife ?</span>
                        </Text>
                      </div>
                    </div>
                    <div className="relative h-[328px] w-[40%] sm:w-full sm:px-5">
                      <Img
                        src="images/img_ellipse_33.png"
                        alt="Second Profile Image"
                        className="absolute bottom-0 right-px top-0 my-auto h-[328px] flex-1 object-cover"
                      />
                      <Img
                        src="images/img_chillll_14_2.png"
                        alt="Chill Image"
                        className="absolute bottom-[-1px] left-0 right-0 m-auto h-[208px] w-full flex-1 object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex w-[36%] flex-col items-end gap-[18px] rounded-[32px] border-[0.5px] border-solid border-gray-300 bg-main_color-orange-500-0 md:w-full">
                    <Heading
                      size="heading3xl"
                      as="h3"
                      className="mt-[52px] !font-medium !italic leading-[150%] tracking-[-0.64px] md:text-[26px] sm:text-[24px]"
                    >
                      <span>Roojh</span>
                      <span>
                        <>
                          &nbsp;
                          <br />
                        </>
                      </span>
                      <span>
                        <>
                          Your Family Health <br />
                          Assistant
                        </>
                      </span>
                    </Heading>
                    <Text
                      size="text5xl"
                      as="p"
                      className="!text-[136.71px] tracking-[-2.73px] !text-white-a700_1e lg:!text-[48px]"
                    >
                      Roojh
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* health records section */}
          <HealthRecordsSection />

          {/* personalized health advice section */}
          <PersonalizedHealthAdviceSection />
          <div className="relative h-[1328px] content-end self-stretch bg-colors-white-solid lg:h-auto md:h-auto">
            <Img
              src="images/img_group_1000004632.png"
              alt="Image"
              className="mx-auto h-[770px] w-full flex-1 object-cover"
            />
            <div className="absolute bottom-[-270px] left-0 right-0 m-auto flex flex-1 flex-col items-center gap-[264px] lg:gap-[198px] md:gap-[198px] sm:gap-[132px]">
              <div className="container-xs lg:px-5 md:px-5">
                <div className="flex flex-col items-center gap-10">
                  <Heading
                    size="heading5xl"
                    as="h2"
                    className="bg-gradient2 bg-clip-text text-center leading-[100%] tracking-[-1.28px] !text-transparent lg:text-[48px]"
                  >
                    <>
                      Have health questions?
                      <br />
                      Ask Roojh!
                    </>
                  </Heading>
                  <Text
                    size="body_size_24_regular"
                    as="p"
                    className="self-stretch text-center leading-[150%]"
                  >
                    Unsure about that weird rash? Ask Roojh! Our friendly AI is
                    here to provide reliable information, guiding you on whether
                    it’s a minor issue or if a professional’s advice is needed.
                  </Text>
                </div>
              </div>
              <div className="flex w-[68%] justify-center lg:w-full lg:px-5 md:w-full md:px-5">
                <div className="flex w-full items-center md:flex-col">
                  <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                    <div className="relative mb-[90px] h-[632px] w-[38%] content-center self-end lg:h-auto md:h-auto md:w-full md:self-auto">
                      <Img
                        src="images/img_iphone_13_pro.png"
                        alt="Iphone Image"
                        className="mx-auto h-[632px] w-full flex-1 object-cover"
                      />
                      <div className="absolute left-0 right-0 top-[19%] m-auto flex flex-1 flex-col items-center gap-[18px] px-[54px] md:px-5 sm:px-4">
                        <Img
                          src="images/img_close.svg"
                          alt="Close Image"
                          className="h-[44px]"
                        />
                        <div className="flex flex-col items-center justify-center gap-2 self-stretch rounded-[12px] bg-colors-white-solid p-3.5">
                          <Heading
                            size="headinglg"
                            as="h3"
                            className="bg-gradient4 bg-clip-text tracking-[-0.40px] !text-transparent"
                          >
                            Hey Roojh,
                          </Heading>
                          <Text
                            size="body_size_12_regular"
                            as="p"
                            className="self-stretch text-center leading-[150%]"
                          >
                            Should I be concerned about my recent change in
                            appetite?
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[4] ml-[-18px] h-[928px] flex-1 content-center lg:h-auto md:ml-0 md:h-auto md:w-full md:flex-none md:self-stretch">
                      <Img
                        src="images/img_iphone_13_pro_928x490.png"
                        alt="Iphone Image"
                        className="mx-auto h-[928px] w-full flex-1 object-cover"
                      />
                      <div className="absolute left-0 right-0 top-[13%] m-auto flex flex-1 flex-col items-center gap-[26px] px-14 md:px-5 sm:px-4">
                        <div className="relative h-[98px] w-[26%] content-center lg:h-auto md:h-auto">
                          <Img
                            src="images/img_ellipse_14_98x102.png"
                            alt="Circle Image"
                            className="mx-auto h-[98px] w-full rounded-[50%]"
                          />
                          <Img
                            src="images/img_close.svg"
                            alt="Close Image"
                            className="absolute bottom-[13px] left-0 right-0 m-auto h-[66px] w-[68%] object-contain"
                          />
                        </div>
                        <div className="ml-[18px] flex flex-col items-center justify-center gap-3.5 self-stretch rounded-[24px] bg-colors-white-solid p-[26px] md:ml-0 sm:p-4">
                          <Heading
                            size="heading_36"
                            as="h4"
                            className="bg-gradient4 bg-clip-text !text-transparent md:text-[30px] sm:text-[28px]"
                          >
                            Hey Roojh,
                          </Heading>
                          <Text
                            size="textxl"
                            as="p"
                            className="self-stretch text-center leading-[150%] tracking-[-0.40px]"
                          >
                            I’ve been feeling a bit stressed lately any tips to
                            relax?
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-[104px] h-[616px] w-[28%] content-center self-end lg:h-auto md:h-auto md:w-full md:self-auto">
                    <Img
                      src="images/img_iphone_13_pro_616x318.png"
                      alt="Iphone Image"
                      className="mx-auto h-[616px] w-full flex-1 object-cover"
                    />
                    <div className="absolute left-0 right-0 top-[19%] m-auto flex flex-1 flex-col items-center gap-[18px] px-[54px] md:px-5 sm:px-4">
                      <Img
                        src="images/img_close.svg"
                        alt="Close Image"
                        className="h-[44px]"
                      />
                      <div className="flex flex-col items-center justify-center gap-2 self-stretch rounded-[12px] bg-colors-white-solid p-3.5">
                        <Heading
                          size="headinglg"
                          as="h5"
                          className="bg-gradient4 bg-clip-text tracking-[-0.40px] !text-transparent"
                        >
                          Hey Roojh,
                        </Heading>
                        <Text
                          size="body_size_12_regular"
                          as="p"
                          className="self-stretch text-center leading-[150%]"
                        >
                          What’s the difference between a cold and the flu?
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-[7] flex flex-col gap-10 self-stretch bg-colors-white-solid py-14 md:py-5 sm:py-4">
            <div className="flex items-center gap-9 md:flex-col">
              <Img
                src="images/img_ellipse_25.png"
                alt="Ellipse Image"
                className="h-[464px] w-[16%] object-contain md:w-full"
              />
              <div className="container-xs flex flex-col gap-10 lg:px-5 md:px-5">
                <Heading
                  size="heading5xl"
                  as="h2"
                  className="bg-gradient2 bg-clip-text text-center leading-[100%] tracking-[-1.28px] !text-transparent lg:text-[48px]"
                >
                  Connect with health service effortlessly
                </Heading>
                <Text
                  size="body_size_24_regular"
                  as="p"
                  className="text-center leading-[150%]"
                >
                  Need to find a nearby pharmacy or schedule a doctor&#39;s
                  appointment? Roojh connects you seamlessly with health
                  services, ensuring that help is just a click away.
                </Text>
              </div>
            </div>
            <div className="relative mb-[104px] ml-[46px] h-[892px] md:ml-0">
              <div className="absolute bottom-[-1px] left-0 right-0 m-auto flex flex-1 items-end justify-center md:relative md:flex-col">
                <div className="relative h-[522px] w-[32%] md:w-full md:px-5">
                  <div className="absolute left-0 top-0 m-auto h-[432px] w-[432px] rounded-[216px] bg-main_color-orange-500-1 blur-[122.00px] backdrop-opacity-[0.5]" />
                  <div className="absolute bottom-px right-px my-auto ml-[42px] mr-auto flex flex-1 flex-col items-center gap-3.5 rounded-bl-[32px] rounded-tl-[32px] bg-extra_color-bg p-[18px] lg:ml-0 md:ml-0">
                    <div className="flex w-[52%] flex-col items-center gap-[18px] lg:w-full md:w-full">
                      <Text
                        size="textlg"
                        as="p"
                        className="capitalize tracking-[-0.16px]"
                      >
                        <span className="text-text-100-0">nutritionist</span>
                        <span className="text-text-70">&nbsp;in my area?</span>
                      </Text>
                      <div className="relative h-[220px] content-center self-stretch lg:h-auto md:h-auto">
                        <Img
                          src="images/img_rectangle.png"
                          alt="Location Image"
                          className="mx-auto h-[220px] w-full rounded-[20px] object-cover"
                        />
                        <div className="absolute left-0 right-0 top-[18.92px] m-auto flex flex-1 flex-col items-end gap-11 px-11 md:px-5 sm:px-4">
                          <Img
                            src="images/img_ion_location.svg"
                            alt="First Location Icon"
                            className="h-[18px] w-[18px]"
                          />
                          <Img
                            src="images/img_ion_location.svg"
                            alt="Second Location Icon"
                            className="mr-[50px] h-[18px] w-[18px] md:mr-0"
                          />
                          <Img
                            src="images/img_ion_location.svg"
                            alt="Third Location Icon"
                            className="ml-1.5 h-[18px] w-[18px] self-start md:ml-0"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      size="text2xl"
                      as="p"
                      className="mb-3 self-stretch text-center leading-[150%] md:text-[22px]"
                    >
                      <span className="text-text-70">
                        Roojh, how can I find a&nbsp;
                      </span>
                      <span className="text-text-100-0">
                        reliable nutritionist
                      </span>
                      <span className="text-text-70">&nbsp;in my area?</span>
                    </Text>
                  </div>
                </div>
                <div className="ml-[30px] flex w-[30%] flex-col gap-7 rounded-bl-[32px] rounded-tl-[32px] bg-extra_color-bg px-3 py-9 md:ml-0 md:w-full md:px-5 sm:py-4">
                  <div className="mx-7 flex flex-col gap-[38px] rounded-[24px] border-[0.5px] border-solid border-gray-300 bg-colors-white-solid px-[22px] py-6 shadow-lg md:mx-0 sm:p-4">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {doctorProfiles.map((d, index) => (
                        <UserProfile2 {...d} key={"drPriyaList" + index} />
                      ))}
                    </Suspense>
                  </div>
                  <Text
                    size="text2xl"
                    as="p"
                    className="mb-[26px] text-center leading-[150%] md:text-[22px]"
                  >
                    <span className="text-text-70">Roojh, can you&nbsp;</span>
                    <span className="text-text-100-0">
                      assist in scheduling
                    </span>
                    <span className="text-text-70">
                      &nbsp;my annual check-up?
                    </span>
                  </Text>
                </div>
                <div className="relative ml-[30px] h-[774px] w-[30%] self-center rounded-bl-[32px] rounded-tl-[32px] bg-extra_color-bg md:ml-0 md:w-full md:px-5">
                  <Img
                    src="images/img_distance.png"
                    alt="Distance Image"
                    className="absolute right-0 top-0 m-auto h-[314px] w-[56%] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[82px] px-6 lg:gap-[82px] md:gap-[61px] sm:gap-[41px] sm:px-4">
                    <div className="mx-4 flex flex-col items-center gap-3.5 rounded-[24px] border-[0.5px] border-solid border-gray-300 bg-colors-white-solid px-[22px] py-[34px] shadow-xl md:mx-0 sm:p-4">
                      <Heading
                        size="body_size_20_medium"
                        as="h3"
                        className="!text-text-70"
                      >
                        Closest Pharmacy near me
                      </Heading>
                      <div className="mb-1.5 flex flex-col gap-[30px] self-stretch">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {pharmacyList.map((d, index) => (
                            <PharmacyInfo
                              {...d}
                              key={"pharmacyList1" + index}
                            />
                          ))}
                        </Suspense>
                      </div>
                    </div>
                    <Text
                      size="text2xl"
                      as="p"
                      className="text-center leading-[150%] md:text-[22px]"
                    >
                      <span className="text-text-70">
                        Roojh, where&#39;s&nbsp;
                      </span>
                      <span className="text-text-100-0">
                        the closest pharmacy to my location?
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 m-auto h-[432px] w-[432px] rounded-[216px] bg-main_color-orange-500-1 blur-[122.00px] backdrop-opacity-[0.5]" />
              <Img
                src="images/img_vector_6.svg"
                alt="Vector Image"
                className="absolute left-[11px] top-[11px] m-auto h-[580px] w-[94%] rounded-[32px] object-contain"
              />
            </div>
          </div>
          {/* <div className="h-[1220px] self-stretch bg-gradient1 bg-cover bg-no-repeat py-20 lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
            <div className="flex flex-col items-center gap-[108px] overflow-auto lg:gap-[108px] md:gap-[81px] sm:gap-[54px]">
              <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
                <div className="flex w-[82%] flex-col items-center gap-[30px] lg:w-full md:w-full">
                  <div className="mx-[164px] flex flex-col items-center gap-2.5 self-stretch md:mx-0">
                    <Button
                      color="white_A700_3f"
                      size="xl"
                      variant="fill"
                      className="self-stretch rounded-[24px] font-medium"
                    >
                      The most private digital health advisor
                    </Button>
                    <Text
                      size="body_size_16_regular"
                      as="p"
                      className="!text-colors-white-solid"
                    >
                      Learn more about data privacy at Roojh
                    </Text>
                  </div>
                  <Heading
                    size="heading_64"
                    as="h2"
                    className="text-center leading-[118%] lg:text-[48px]"
                  >
                    <>
                      Roojh does all this,
                      <br />
                      and more.
                    </>
                  </Heading>
                </div>
              </div>
              <div className="flex w-[82%] items-center justify-center gap-4 lg:w-full lg:px-5 md:w-full md:flex-col md:px-5">
                <div className="flex w-[5%] flex-col items-center gap-4 self-start md:w-full md:self-auto">
                  <Button
                    variant="fill"
                    shape="circle"
                    className="w-[64px] !rounded-[32px]"
                  >
                    <Img src="images/img_grid.svg" />
                  </Button>
                  <div className="mx-2 flex justify-center self-stretch p-1 md:mx-0">
                    <Text as="p" className="!text-colors-white-solid">
                      All
                    </Text>
                  </div>
                </div>
                <div className="ml-4 flex flex-1 gap-4 md:ml-0 md:flex-col md:self-stretch">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {healthTopicsList.map((d, index) => (
                      <UserProfile3
                        {...d}
                        key={"listSection" + index}
                        className="w-[20%]"
                      />
                    ))}
                  </Suspense>
                </div>
                <div className="flex w-[8%] flex-col items-center gap-4 md:w-full">
                  <Button shape="circle" className="w-[64px] !rounded-[32px]">
                    <Img src="images/img_7.svg" />
                  </Button>
                  <div className="self-stretch p-1.5">
                    <Text
                      as="p"
                      className="text-center leading-[120%] !text-colors-white-solid"
                    >
                      Medication & Treatment
                    </Text>
                  </div>
                </div>
                <div className="flex w-[6%] flex-col items-center gap-4 md:w-full">
                  <Button shape="circle" className="w-[64px] !rounded-[32px]">
                    <Img src="images/img_television.svg" />
                  </Button>
                  <div className="self-stretch p-1.5">
                    <Text
                      as="p"
                      className="text-center leading-[120%] !text-colors-white-solid"
                    >
                      Diet & Nutrition
                    </Text>
                  </div>
                </div>
                <div className="flex w-[6%] flex-col items-center gap-4 md:w-full">
                  <Button shape="circle" className="w-[64px] !rounded-[32px]">
                    <Img src="images/img_ex.svg" />
                  </Button>
                  <div className="self-stretch p-1.5">
                    <Text
                      as="p"
                      className="text-center leading-[120%] !text-colors-white-solid"
                    >
                      Lifestyle & Exercise
                    </Text>
                  </div>
                </div>
                <div className="flex w-[8%] flex-col items-center gap-4 md:w-full">
                  <Button shape="circle" className="w-[64px] !rounded-[32px]">
                    <Img src="images/img_preg.svg" />
                  </Button>
                  <div className="self-stretch py-1.5">
                    <Text
                      as="p"
                      className="text-center leading-[120%] !text-colors-white-solid"
                    >
                      Pregnancy & Child Health
                    </Text>
                  </div>
                </div>
                <div className="flex w-[10%] flex-col items-center gap-4 md:w-full">
                  <Button shape="circle" className="w-[64px] !rounded-[32px]">
                    <Img src="images/img_last.svg" />
                  </Button>
                  <div className="self-stretch p-1.5">
                    <Text
                      as="p"
                      className="text-center leading-[120%] !text-colors-white-solid"
                    >
                      General Health Information
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-10">
                <HealthInformation className="ml-36 w-full md:ml-0 md:flex-col md:px-5" />
                <HealthInformation className="mr-36 flex-1 md:mr-0 md:flex-col md:px-5" />
              </div>
            </div>
          </div> */}
          
          <div className="flex flex-col items-center justify-center gap-[116px] self-stretch bg-colors-white-solid py-[130px] lg:gap-[116px] lg:py-8 md:gap-[87px] md:py-5 sm:gap-[58px] sm:py-4">
            <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
              <Heading
                size="heading_64"
                as="h2"
                className="bg-gradient2 bg-clip-text text-center leading-[118%] !text-transparent lg:text-[48px]"
              >
                <>
                  Real people, real health
                  <br />
                  journeys with Roojh
                </>
              </Heading>
            </div>
            <div className="mx-10 flex w-full gap-8 self-stretch md:mx-0 md:flex-col md:gap-4">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 1 },
                  1051: { items: 2 },
                  1441: { items: 3 },
                }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="px-6">
                      <div className="flex items-start overflow-auto rounded-[32px] border-[0.5px] border-solid border-gray-400 bg-colors-white-solid py-8 md:flex-col md:p-4 sm:px-4 sm:py-3">
                        <div className="flex w-full items-center justify-center gap-4 px-6 md:flex-col md:px-4 sm:px-3">
                          <div className="relative h-[100px] w-[40%] md:w-full">
                            <div className="absolute bottom-0 right-0 top-0 my-auto h-[90px] w-[90px] rounded-full bg-gradient2" />
                            <Img
                              src="images/img_ellipse_26.png"
                              alt="Profile Image"
                              className="absolute bottom-0 right-0 top-0 my-auto h-[90px] w-[90px] rounded-full object-cover"
                            />
                          </div>
                          <div className="flex w-[60%] flex-col items-start gap-4 md:w-full">
                            <Button
                              color="red_A200_19"
                              size="md"
                              variant="fill"
                              shape="round"
                              className="min-w-[180px] !rounded-[15px]"
                            >
                              From Frustrated to Fearless
                            </Button>
                            <div className="flex flex-col items-start gap-1 self-stretch">
                              <Text
                                size="textxl"
                                as="p"
                                className="!text-text-100-0"
                              >
                                <span>Garima</span>
                                <span>&nbsp;Gupta&nbsp;</span>
                                <span>(42)</span>
                              </Text>
                              <Heading
                                size="texts"
                                as="h3"
                                className="!font-normal !text-text-100-0"
                              >
                                Teacher, Delhi
                              </Heading>
                            </div>
                            <Text
                              size="body_size_14_regular"
                              as="p"
                              className="w-full leading-[150%]"
                            >
                              After years of battling diabetes, I felt lost and
                              scared. Roojh changed everything. Its personalized
                              meal plans and constant support helped me finally
                              get my sugar levels under control. Now, I feel
                              like I'm in control of my health again!
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>

            <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
              <div className="flex items-center justify-center">
                {[...Array(4)].map((_, i) => (
                  <>
                    {sliderState >=
                      i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
                    sliderState <
                      (i + 1) *
                        (sliderRef?.current?.state?.itemsInSlide || 1) ? (
                      <div
                        onClick={() => {
                          sliderRef?.current?.slideTo(
                            i * sliderRef?.current?.state?.itemsInSlide
                          );
                        }}
                        className="mr-2.5 inline-block h-[3px] w-[30px] cursor-pointer bg-main_color-orange-500-0"
                      />
                    ) : (
                      <div
                        onClick={() => {
                          sliderRef?.current?.slideTo(
                            i * sliderRef?.current?.state?.itemsInSlide
                          );
                        }}
                        className="mr-2.5 inline-block h-[3px] w-[30px] cursor-pointer bg-red-a200_59"
                      />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center self-stretch bg-extra_color-bg md:flex-col">
            <div className="relative z-[5] flex flex-1 justify-end md:self-stretch md:px-5">
              <div className="flex w-[90%] flex-col items-start lg:w-full md:w-full">
                <Heading
                  size="heading_64"
                  as="h2"
                  className="w-full bg-gradient2 bg-clip-text leading-[118%] !text-transparent lg:text-[48px]"
                >
                  Participate in India&#39;s digital healthcare revolution
                </Heading>
                <Text
                  size="body_size_20_regular"
                  as="p"
                  className="mt-6 w-[66%] leading-[150%] lg:w-full md:w-full"
                >
                  Create ABHA and store all your medical records with Roojh
                  (Government of India ABDM approved PHR App){" "}
                </Text>
                <div className="mt-[58px] flex rounded-lg bg-main_color-orange-500-0 p-4">
                  <Text
                    size="textlg"
                    as="p"
                    className="!font-medium capitalize !text-colors-white-solid"
                  >
                    Create ABHA
                  </Text>
                </div>
                <div className="mt-7 flex gap-[9px] self-stretch">
                  <Button
                    color="text_70"
                    size="xs"
                    className="min-w-[268px] rounded-[14px] font-medium"
                  >
                    53 crores Indians have already created ABHA{" "}
                  </Button>
                  <Button
                    color="text_70"
                    size="xs"
                    className="min-w-[228px] rounded-[14px] font-medium"
                  >
                    Official partner of Government of India
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="images/img_iphone_15_pro.png"
              alt="Iphone Image"
              className="relative mb-8 ml-[-162px] h-[650px] w-[48%] object-contain md:ml-0 md:w-full"
            />
          </div>

          {/* f a qs section */}
          <FAQsSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
