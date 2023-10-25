interface CheckboxProps {
    label: string
    name: string
    required?: boolean
    error?: string
}

const Checkbox = ({ label, name, required, error }: CheckboxProps) => {
  return (
    <div className="flex items-center">
        <input
            id={name}
            name={name}
            type="checkbox"
            required={required}
            aria-required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={`${name}-error`}
            className="checkbox appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500  "
        />
        <label htmlFor={name} className={`ml-4 block text-sm font-medium text-gray-700 `}>
            {label}
        </label>
    </div>
  )
}

export default Checkbox