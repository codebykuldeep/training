import React from 'react'

export default function Input({id,value,inputIsValid,error,label,...props}) {
  return (
        <div className="control no-margin">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            value={value}
            {...props}
          />
          <div className="control-error">
            {inputIsValid && <p>{error}</p>}
          </div>
        </div>
  )
}
