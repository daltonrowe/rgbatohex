import React from "react"

const HexInput = ({ hexString, error, handleChange }) => (
  <div>
    <input type="text" value={hexString} onChange={handleChange} />
  </div>
)

export default HexInput
