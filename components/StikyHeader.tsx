import React from "react";

interface Props {
  title: string;
  currentStep?: number;
  totalSteps?: number;
}

const StikyHeader = (props: Props) => {
  return (
    <div className="bg-gradient-to-tr from-sky-500 to-sky-500 justify-between z-50 text-white text-md py-3 px-2 md:px-10 flex items-center w-full mb-8 sticky top-0">
      <p className="text-gray-100 text-md font-base">
        {props.currentStep && <span className="font-bold text-xl">{props.currentStep}.</span>}{" "}
        {props.title}
      </p>
      {props.totalSteps && (
        <p className="text-gray-200 text-md">
          Pasul {props.currentStep}{" "}
          <span className="text-gray-100 text-xs">din {props.totalSteps}</span>
        </p>
      )}
    </div>
  );
};

export default StikyHeader;
