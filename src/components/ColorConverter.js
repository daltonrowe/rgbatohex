import React from "react"
import HexInput from "./HexInput"
import RgbaInput from "./RgbaInput"

class ColorCoverter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      intialBgColor: "333333",
      hexValue: "123456",
      rgbaString: "rgba(12,34,56,0.5)",
      rgbaError: null,
      hexError: null,
      includeHash: false,
    }
  }

  parseRgba = string => {
    const rgba = {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    }
    return rgba
  }

  validateRgbaString = string => {
    console.log("validate rgba")
    const valid = true
    return valid
  }

  validateHexString = string => {
    console.log("validate hex")
    const valid = true
    return valid
  }

  outputToHex = hex => {
    console.log("output to hex")
  }

  outputToRgba = rgba => {
    console.log("remove bg color")
    console.log("output to rgba")
  }

  convertRgbaToHex = (rgba, bg) => {
    console.log("convert rgba")
    console.log("mix with bg color")
    const hex = "000000"
    return hex
  }

  convertHexToRgba = (hex, bg) => {
    console.log("convert hex")
    const rgba = {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    }
    return rgba
  }

  handleRgbaChange = events => {
    const inputValue = events.target.value
    let rgbaValue = null
    let hexValue = null

    if (this.validateRgbaString(inputValue)) {
      rgbaValue = this.parseRgba(inputValue)
      hexValue = this.convertRgbaToHex(rgbaValue, this.state.bgColor)
      this.outputToHex(hexValue)
    } else {
      this.setState({
        rgbaError: `not seeing an rgba() value here`,
      })
    }
  }

  handleHexChange = events => {
    const inputValue = events.target.value
    let hexValue = null
    let rgbaValue = null

    if (this.validateRgbaString(inputValue)) {
      hexValue = this.parseHex(inputValue)
      rgbaValue = this.convertHexToRgba(hexValue)
      this.outputToRgba(rgbaValue)
    } else {
      this.setState({
        hexError: `dangit can't read hex value`,
      })
    }
  }

  render() {
    return (
      <section className="color-converter">
        <div className="color-converter__rgba_wrapper">
          <RgbaInput
            rgbaString={this.state.rgbaString}
            handleChange={this.handleRgbaChange}
            error={this.state.rgbaError}
          />
        </div>
        <div className="color-converter__hex_wrapper">
          <HexInput
            hexString={this.state.hexString}
            handleChange={this.handleHexChange}
            error={this.state.hexError}
          />
        </div>
      </section>
    )
  }
}

export default ColorCoverter
