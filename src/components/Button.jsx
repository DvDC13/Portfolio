import React from 'react'

const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass} py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600
        text-white rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-l transition-all duration-300 ease-in-out`}>
            {isBeam && (
                <span className="relative flex h-3 w-3 mr-2">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                </span>
            )}
            {name}
        </button>
    )
}
export default Button

