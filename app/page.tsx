"use client";

import Image from "next/image";
import Button from "./components/button";
import Navbar from "./components/navbar";
import RotalicText from "./components/rotalic";
import heroImage from "@/public/hero-image.png";
import brandsMixedWebp from "@/public/brands-mixed-desktop-light.webp";
import reviewImage2 from "@/public/review-getapp.png";
import achievementImage from "@/public/review-capterra.png";
import { testimonials } from "./utils/features";
import Testimonial from "./components/testimonial";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import Footer from "./components/footer";
import toggleLogo from "@/public/download.svg";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("");
  return (
    <div className="bg-background">
      <Navbar className="sticky" />
      <main className="mt-10">
        <div className="flex flex-col items-center text-center gap-12">
          <h1 className="text-neutral-50 text-7xl w-250 ">
            Where <RotalicText className="text-primary-400">teams</RotalicText>{" "}
            and time tracking{" "}
            <RotalicText className="text-primary-400">data</RotalicText> meet
          </h1>
          <p className="text-neutral-100 text-xl w-200 mx-auto tracking-wide">
            The only time tracking software that builds custom reports from your
            team&apos;s time data to maximize productivity and revenue.
          </p>
          <div className="flex gap-4">
            <Button
              textColor="text-neutral-100"
              bgColor="bg-primary-400"
              bgColorHover="hover:bg-background-200"
            >
              Start tracking for free
            </Button>
            <Button
              type="secondary"
              textColor="text-neutral-100"
              bgColor="bg-neutral-200/8"
              bgColorHover="hover:bg-background-200"
            >
              See how it works
            </Button>
          </div>
        </div>
        <picture>
          <Image src={heroImage} alt="hero image" />
        </picture>

        <div className=" w-full py-8 bg-white/10">
          <Image
            className="mx-auto w-1/2"
            src={brandsMixedWebp}
            alt="multiple brands logo"
          />
        </div>

        <div className="bg-background-100 ">
          <div className="flex flex-col items-center text-center pt-20 text-background-200 gap-6">
            <h6 className="text-4xl font-semibold w-200 tracking-wide leading-12">
              The time tracker that achieves{" "}
              <RotalicText className="text-primary-400">100%</RotalicText> user
              adoption in your team
            </h6>
            <p className="text-md text-neutral-500">
              Time tracking is a chore, which is why we built Toggl Track
              differently.
            </p>
            <div className="flex gap-20 items-center mt-10">
              <Image
                className=""
                src={reviewImage2}
                alt="multiple brands logo"
              />
              <Image
                className=""
                src={achievementImage}
                alt="multiple brands logo"
              />
              <Image
                className=""
                src={reviewImage2}
                alt="multiple brands logo"
              />
            </div>
          </div>

          <div className="mt-20 flex gap-8 mx-auto justify-center w-8/10">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                testimonial={testimonial}
                className=""
              />
            ))}
          </div>

          <div className="mt-20 flex flex-col gap-10 items-center text-center text-background-200">
            <h6 className="text-3xl w-180 font-semibold tracking-wide leading-10">
              Want to get team buy-in without the fuss? Let Toggl Track do the
              talking.
            </h6>

            <div className="flex gap-4 font-light">
              {[
                "No credit card required",
                "Free 30-day trial for all features",
                "Cancel anytime",
              ].map((feature, i) => (
                <p key={i} className="inline-flex gap-2 items-center">
                  <FaRegCircleCheck className="text-neutral-400 text-xl" />
                  No credit card required
                </p>
              ))}
            </div>

            <div>
              <Button
                textColor="text-neutral-100"
                bgColor="bg-primary-400"
                bgColorHover="hover:bg-background-200"
              >
                Start tracking for free
              </Button>
              <Button
                bgColor="bg-transparent"
                bgColorHover="hover:text-primary-400"
                textColor="text-background-200"
              >
                Request a demo
              </Button>
            </div>

            <div className="flex flex-col items-center text-center pt-20 text-background-200 gap-6">
              <h6 className="text-4xl font-semibold w-200 tracking-wide leading-12">
                Boost team productivity, profitability,{" "}
                <RotalicText className="text-primary-400">and</RotalicText>{" "}
                balance workloads
              </h6>
              <p className="text-md text-neutral-500 w-150 leading-relaxed">
                Use data-driven and highly customizable reports to see where
                your team spends its time and pinpoint productivity and
                profitability gaps
              </p>

              <div>
                <div>
                  <ul className="mx-auto flex justify-between items-baseline p-1 rounded-full text-sm font-semibold text-neutral-400  border border-neutral-400">
                    {[
                      "Build better processes",
                      "Bill accurately",
                      "Manage projects profitably",
                      "strengthens client relationships",
                      "support team growth",
                    ].map((tab, i) => (
                      <li
                        key={i}
                        className={`hover:text-background-200 px-4 py-2 rounded-full cursor-pointer ${
                          selectedTab === tab
                            ? "bg-primary-400 text-neutral-50 hover:text-neutral-50"
                            : ""
                        }`}
                        onClick={() => setSelectedTab(tab)}
                      >
                        {tab}
                      </li>
                    ))}
                  </ul>

                  <article className="flex flex-col items-center text-center gap-12 my-20">
                    <Image src={toggleLogo} alt="toggle logo" width={100} />
                    <h1 className="text-background-200 text-7xl w-250 ">
                      It&apos;s{" "}
                      <RotalicText className="text-primary-400">
                        time
                      </RotalicText>{" "}
                      for less busy work – more profitable work.
                    </h1>
                    <p className="text-background-200/70 font- text-lg w-200 mx-auto tracking-wide">
                      Sign up for Toggl Track&apos;s forever-free plan. Try out
                      our Premium plan with a free, 30-day trial. No credit card
                      required to get started.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        textColor="text-neutral-50"
                        bgColor="bg-primary-400"
                        bgColorHover="hover:bg-background-200"
                      >
                        Start tracking for free
                      </Button>
                      <Button
                        type="ghost"
                        textColor="text-background-200"
                        bgColor="bg-neutral-200/8"
                        bgColorHover=""
                      >
                        See how it works
                      </Button>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
