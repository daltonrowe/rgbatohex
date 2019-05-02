import React from "react"
import "../styles/components/ColorInputOutput.css"

const ColorInput = ({
  initialValue,
  outputValue,
  bgColorValue,
  handleChange,
  handleBgChange,
}) => (
  <div className="color-converter__input_wrapper">
    <input type="text" defaultValue={initialValue} onChange={handleChange} />
  </div>
)

export default ColorInput
