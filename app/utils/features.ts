import csTeamNetconomy from "@/public/cs-team-netconomy.avif";
import csTeamTalkshop from "@/public/cs-team-talkshopmedia.avif";
import csTeamXmartLab from "@/public/cs-xmartlabs.avif";
import talkshop from "@/public/talkshop.svg";
import netconomy from "@/public/netconomy.svg";
import xmartlab from "@/public/xmartlab.svg";

export const testimonials = [
  {
    id: crypto.randomUUID(),
    metric: "80 hours",
    metricDesc: "saved monthly with Toggl Track's user-friendly interface",
    testimonial:
      "“We chose Toggl Track, and it took our agency’s time tracking compliance to the next level.”",
    userLogo: talkshop,
    image: csTeamTalkshop,
    bgColor: "bg-[#FDEAE2]",
  },
  {
    id: crypto.randomUUID(),
    metric: "100 %",
    metricDesc: "time tracking adoption in a team of 500+",
    testimonial:
      "“There is hardly any other solution that could handle a large amount of data while providing a smooth UX experience for the team of 500.”",
    userLogo: netconomy,
    image: csTeamNetconomy,
    bgColor: "bg-[#FFDE91]",
  },
  {
    id: crypto.randomUUID(),
    metric: "6X",
    metricDesc: "team growth while maintaining work-life balance",
    testimonial:
      "“Trust in the team is paramount. We didn’t want anything intrusive, like a tool to take screenshots of what our employees are working on.”",
    userLogo: xmartlab,
    image: csTeamXmartLab,
    bgColor: "bg-[#F7D8F3]",
  },
];
