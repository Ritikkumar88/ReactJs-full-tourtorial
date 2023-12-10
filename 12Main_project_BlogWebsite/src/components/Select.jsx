import React, { useId } from 'react'

function Select({
    options,
    label,
    clasName = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${clasName}`}
            >
                {options ? options.map((option) => (
                    <options key={option} value={option}>
                        {option}
                    </options>

                )): null}   //** */
            </select>
        </div>
    )
}

export default React.forwardRef(Select)