import React from "react";
import { NumberBox } from "./counter-number-box";

interface TimeProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const TimerContainer: React.FC<TimeProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  const padNumber = (num: number): string =>
    num < 10 ? `0${num}` : num.toString();

  const calculateFlipStates = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {
    let daysFlip = false;
    let hoursFlip = false;
    let minutesFlip = false;
    let secondsFlip = true;

    if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
      return {
        daysFlip: false,
        hoursFlip: false,
        minutesFlip: false,
        secondsFlip: false,
      };
    }

    if (seconds === 0) {
      secondsFlip = false;
      if (minutes !== 0) {
        seconds = 59;
      }
      minutesFlip = true;
    }

    if (minutes === 0) {
      minutesFlip = false;
      if (hours !== 0) {
        minutes = 59;
      }
      hoursFlip = true;
    }

    if (hours === 0) {
      hoursFlip = false;
      if (days !== 0) {
        daysFlip = true;
      }
    }

    return { daysFlip, hoursFlip, minutesFlip, secondsFlip };
  };

  const { daysFlip, hoursFlip, minutesFlip, secondsFlip } = calculateFlipStates(
    days,
    hours,
    minutes,
    seconds
  );

  return (
    <div className="rounded-xl">
      <div className="grid grid-cols-2 gap-4  md:flex md:items-center md:justify-between md:mt-2 rounded-xl">
        <NumberBox num={padNumber(days)} unit="Days" flip={daysFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={padNumber(hours)} unit="Hours" flip={hoursFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={padNumber(minutes)} unit="Minutes" flip={minutesFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={padNumber(seconds)} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};
