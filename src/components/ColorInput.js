import React from "react"

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
