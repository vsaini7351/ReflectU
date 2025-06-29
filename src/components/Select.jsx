import React ,{useId} from 'react'

const Select = ({options, className="",label, ...props},ref) => {

    const id=useId();
  return (
    <div className='w-full'>
        <select id={id} {...props} ref={ref}  className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
            {options?.map((option)=>(<option key={option} value={option}>
                    {option} 
                    {/* yaha esa isliye likha kyoki agar options me kuch nhi hai to error na aaye */}
                </option>))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)