import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { TbUpload } from "react-icons/tb";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  required: boolean;
  error: string;
  fullWidth: boolean;
  isLoading?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = (props: Props) => {
  return (
    <div className="flex items-center border-b border-gray-300 pb-2">
      <label className="w-1/3 text-gray-600 text-sm flex items-center">
        <span>{props.label}</span>
        {props.required && <span className="text-lg text-red-500 ml-1">*</span>}
        </label>
      <div className="w-2/3">
        <div className="flex items-center justify-between relative">
          <input
            value={props.value}
            onChange={props.onChange}
            type="file"
            className="form-input opacity-0 absolute z-4 w-full h-full cursor-pointer disabled:cursor-not-allowed"
            name={props.name}
            placeholder={props.placeholder}
            aria-label={props.label}
            aria-required={props.required}
            aria-invalid={props.error ? "true" : "false"}
            aria-describedby={`${props.label}-error`}
            disabled={props.isLoading}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-xl w-full flex items-center justify-center disabled:bg-blue-400"
            disabled={props.isLoading}
          >
            {props.isLoading ? (
              <div className="loader">Loading...</div>
            ) : (
              <>
                <TbUpload className="text-white text-lg" />
                <span className="ml-2">Încarcă fișier</span>
              </>
            )}
          </button>
        </div>
        {props.error && (
          <div className="flex items-center gap-2 text-red-500 mt-2">
            <RiErrorWarningFill className=" text-md" />
            <span className="text-xs">{props.error}</span>
          </div>
        )}
        <p className="text-gray-600 text-xs mt-1">
          {props.value}
        </p>
        
      </div>
    </div>
  );
};

export default FileInput;
