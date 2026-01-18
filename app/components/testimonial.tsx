import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { LeftIcon } from "./button";

interface TestimonialProps {
  id: string;
  metric: string;
  metricDesc: string;
  testimonial: string;
  userLogo: StaticImageData;
  image: StaticImageData;
  bgColor: string;
}

const Testimonial = ({
  testimonial,
  className,
}: {
  testimonial: TestimonialProps;
  className: string;
}) => {
  return (
    <div
      className={`p-6 flex flex-col text-background-200 justify-between items-center gap-6 ${className} rounded-lg min-w-65 flex-1 ${testimonial.bgColor}`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <strong className="text-center text-4xl">{testimonial.metric}</strong>
          <p className="text-center text-background-200/75 text-lg w-9/10">
            {testimonial.metricDesc}
          </p>
        </div>
        <Image
          src={testimonial.image}
          alt="testimonial image"
          className="w-full rounded-lg"
        />
        <p className="w-full text-sm">{testimonial.testimonial}</p>
      </div>
      <div className="flex w-full justify-between">
        <Image
          src={testimonial.userLogo}
          alt="testimonial image"
          className="w-2/10"
        />
        <Link
          href={"/"}
          className="inline-flex items-center text-sm font-semibold"
        >
          Read case study <LeftIcon />
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
