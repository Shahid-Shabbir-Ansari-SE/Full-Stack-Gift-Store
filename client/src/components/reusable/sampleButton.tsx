import React from 'react'

interface sampleButtonProps {
  buttonText: string
  buttonStyle: string
  buttonFunction: Function
}

const sampleButton = ({
  buttonText,
  buttonStyle,
  buttonFunction
}: sampleButtonProps) => {
  return (
    <div>
      <button className={buttonStyle} onClick={() => buttonFunction()}>
        {buttonText}
      </button>
    </div>
  )
}

export default sampleButton
