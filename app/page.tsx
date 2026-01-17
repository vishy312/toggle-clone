import Button from "./components/button";
import Navbar from "./components/navbar";
import RotalicText from "./components/rotalic";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar className="sticky" />
      <main className="mt-10">
        <div className="flex flex-col items-center text-center gap-12">
          <h1 className="text-neutral-50 text-7xl w-[13em] ">
            Where <RotalicText className="text-primary-400">teams</RotalicText>{" "}
            and time tracking{" "}
            <RotalicText className="text-primary-400">data</RotalicText> meet
          </h1>
          <p className="text-neutral-100 text-xl w-[40em] mx-auto tracking-wide">
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
      </main>
    </div>
  );
}
