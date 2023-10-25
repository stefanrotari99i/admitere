import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";

interface InputProps {
  label: string;
  name?: string;
  required?: boolean;
  error?: string;
  valid?: boolean;
  icon?: any;
  fullWidth?: boolean;
  maxVal?: number;
  minVal?: number;
  [x: string]: any;
}

const Input = (props: InputProps) => {
  return (
    <div className={`flex flex-col ${props.fullWidth ? "w-full" : "w-1/2"}`}>
      <div className="flex items-center">
        <label className="text-sm ml-2 mb-[4px] text-gray-600 tracking-wide">
          {props.label}
        </label>
        {props.required && (
          <span
            title="Este obligatoriu"
            className="text-lg pointer-events-none text-rose-500 ml-1"
          >
            *
          </span>
        )}
      </div>
      <div
        className={`flex items-center justify-between w-full border border-gray-300 px-4 rounded-xl gap-2 focus-within:ring-[2px] focus-within:ring-sky-500 focus-within:bg-transparent focus-within:border-transparent ${
          props.error ? "border-rose-500 border-2 bg-rose-50" : ""
        } ${props.valid ? "border-green-500 border-2 bg-green-50" : ""}`}
      >
        {props.icon && (
          <span className="text-gray-500 text-xl">{props.icon}</span>
        )}
        <input
          className="bg-transparent focus:outline-none text-sm text-gray-900  placeholder:text-gray-400 py-[10px] placeholder:font-normal border-none w-full"
          aria-label={props.label}
          aria-required={props.required}
          aria-invalid={props.error ? "true" : "false"}
          aria-describedby={`${props.label}-error`}
          max={props.maxVal}
          min={props.minVal}
          value={
            props.type === "date"
              ? new Date().toISOString().slice(0, 10)
              : props.value
          }
          {...props}
        />
        {props.error && (
          <RiErrorWarningFill className=" text-xl text-rose-500 " />
        )}
        {!props.error && props.valid && (
          <RiCheckboxCircleFill className=" text-xl text-green-500 " />
        )}
      </div>
      {props.error && (
        <span className="text-xs text-rose-500 mt-2 ml-2">{props.error}</span>
      )}
    </div>
  );
};

export default Input;
