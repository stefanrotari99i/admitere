import { RiErrorWarningFill } from "react-icons/ri";
interface SelectProps {
  label: string;
  options: string[];
  required?: boolean | false;
  error?: string;
  name?: string;
}

const Select = ({ label, options, required, error, name }: SelectProps) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center">
        <label className="text-sm ml-2 mb-[4px] text-gray-600 tracking-wide">
          {label}
        </label>
        {required && <span title="Este obligatoriu" className="text-lg pointer-events-none text-red-500 ml-1">*</span>}
      </div>
      <select
        required={required}
        name={name}
        className="w-full border text-gray-900  border-gray-300 px-4 py-[10px] appearance-none rounded-xl text-sm gap-2 focus-within:ring-[2px] focus-within:ring-blue-500 focus:border-transparent outline-none  transition duration-200"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <div className="flex items-center gap-2 text-red-500 mt-2 ml-2">
          <RiErrorWarningFill className=" text-md" />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
};

export default Select;
