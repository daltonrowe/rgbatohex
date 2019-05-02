import React from "react"
import "../styles/components/ColorInputOutput.scss"

const determineOutputOrError = (initialValue, outputValue, errors) => {
  if (errors) {
    return errors
  } else if (outputValue) {
    return outputValue
  } else {
    return initialValue
  }
}

const ColorOutput = ({ initialValue, outputValue, errors }) => (
  <div className="color-converter__output_wrapper">
    {determineOutputOrError(initialValue, outputValue, errors)}
  </div>
)

export default ColorOutput
