import { RiErrorWarningFill } from "react-icons/ri";

type AlertProps = {
    type: string | "error" | "warning" | "success" | "info";
    title: string;
    message: string;

}

const ALERTS : {[key: string]: string} = {
    error: "bg-red-100 text-red-500",
    warning: "bg-orange-100 text-orange-500",
    success: "bg-green-100 text-green-500",
    info: "bg-sky-100 text-sky-500",
}


const Alert = ({type, title, message}: AlertProps) => {
    
  return (
    <div className={`flex items-start justify-start rounded-xl my-2 w-full p-4 relative ${ALERTS[type]}`}>
        <RiErrorWarningFill  className='text-2xl mr-3' />
        <div className='flex flex-col gap-2'>
            <span className="block font-bold text-sm">
                {title}
            </span>
            <span className="block text-gray-700 text-sm">
                {message}
            </span>
        </div>


    </div>
    
  )
}

export default Alert