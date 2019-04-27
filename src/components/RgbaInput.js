import React from "react"

const RgbaInput = ({ rgbaString, error, handleChange }) => (
  <div>
    <input type="text" value={rgbaString} onChange={handleChange} />
  </div>
)

export default RgbaInput
