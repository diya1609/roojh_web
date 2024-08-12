import { Button, Img, Heading } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  {
    questionText: "What if I\\'m not tech-savvy? Is Roojh easy to use?",
  },
  {
    questionText: " Can Roojh replace my doctor?",
    answerDescription:
      "While Roojh is a valuable companion for your health journey, it\\'s important to remember that we are not a substitute for a doctor. We can assist with personalized advice, health insights, and even connect you with healthcare professionals, but for diagnosis and treatment, consulting a qualified doctor is always recommended",
  },
  {
    questionText: "How does Roojh protect my privacy?",
  },
  {
    questionText: "Got a hotline for funds-related SOS moments",
  },
];

export default function FAQsSection() {
  return (
    <>
      {/* f a qs section */}
      <div className="mt-[130px] flex flex-col items-center gap-[168px] self-stretch lg:gap-[126px] md:gap-[126px] sm:gap-[84px]">
        <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
          <a href="FAQs" target="_blank" rel="noreferrer" className="lg:text-[48px]">
            <Heading size="heading_64" as="h2" className="!text-text-100-0">
              FAQs
            </Heading>
          </a>
        </div>
        <div className="flex w-[64%] flex-col items-center gap-20 lg:w-full lg:gap-20 lg:px-5 md:w-full md:gap-[60px] md:px-5 sm:gap-10">
          <Accordion className="flex flex-col gap-10 self-stretch">
            {accordionData.map((d, i) => (
              <AccordionItem uuid={i} key={`Expandable List${i}`}>
                <AccordionItemHeading className="w-full">
                  <AccordionItemButton>
                    <AccordionItemState>
                      {(props) => (
                        <>
                          <div className="flex flex-1 items-center justify-between gap-5 rounded-[5px] bg-colors-white-solid p-6 shadow-md sm:flex-col sm:p-4">
                            <Heading
                              size="body_size_20_medium"
                              as="h3"
                              className="self-end !text-text-100-0 sm:self-auto"
                            >
                              {d.questionText}
                            </Heading>
                            <Img
                              src="images/img_icons_arrow_drop_down_48px.svg"
                              alt="Dropdown Icon"
                              className="mr-5 h-[24px] w-[24px] lg:mr-0 md:mr-0 sm:w-full"
                            />
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div>Dummy Content</div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="container-xs flex flex-col items-center px-14 md:px-5 sm:px-4">
            <Button
              color="main_color_orange_500_0"
              size="lg"
              variant="fill"
              className="min-w-[102px] rounded-lg font-lato font-medium capitalize"
            >
              More FAQs
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
