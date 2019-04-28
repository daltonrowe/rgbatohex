import React from "react"

const determineOutputOrError = (outputValue, errors) => {
  if (errors) {
    return errors
  } else {
    return outputValue
  }
}

const ColorOutput = ({ outputValue, errors }) => (
  <div className="color-converter__output_wrapper">
    <input
      type="text"
      value={determineOutputOrError(outputValue, errors)}
      readOnly
    />
  </div>
)

export default ColorOutput
