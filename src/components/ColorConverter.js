import React from "react"
import ColorInput from "./ColorInput"
import ColorOutput from "./ColorOutput"

import "../styles/components/ColorConverter.css"

// https://github.com/misund/hex-to-rgba
const rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/

// https://stackoverflow.com/questions/11877554/validate-hexadecimal-string-using-regular-expression
const hexRegex = /^(0x|0X)?[a-fA-F0-9]+$/

class ColorCoverter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialInputColorType: {
        type: "rgba",
        value: [18, 52, 86, 1],
      },
      initialOutputColorType: {
        type: "hex",
        value: ["12", "34", "56"],
      },
      bgColorType: {
        type: "hex",
        value: ["FF", "FF", "FF"],
      },
      outputColorType: null,
      errors: null,
      includeHash: true,
    }
  }

  parseRgba = string => {
    let colorType = {
      type: "rgba",
      value: [0, 0, 0, 1],
    }

    let tempString
    tempString = string.split("(")
    tempString = tempString[1].split(")")
    tempString = tempString[0]
    let tempArray = tempString.split(",")

    for (let i = 0; i <= 2; i++) {
      const value = tempArray[i]
      colorType.value[i] = parseInt(value)
    }

    return colorType
  }

  parseHex = string => {
    let colorType = {
      type: "hex",
      value: ["00", "00", "00"],
    }

    if (string.length === 3) {
      string =
        string[0] + string[0] + string[1] + string[1] + string[2] + string[2]
    }

    colorType.value[0] = parseInt(string.slice(0, 2))
    colorType.value[1] = parseInt(string.slice(2, 4))
    colorType.value[2] = parseInt(string.slice(4, 6))
    return colorType
  }

  validateRgbaString = string => {
    let valid = rgbaRegex.test(string)
    return valid
  }

  validateHexString = string => {
    let valid = hexRegex.test(string)

    if (string.length <= 5) {
      valid = false
    }
    if (string.length === 3) {
      valid = true
    }

    return valid
  }

  returnColorType = string => {
    let testString = string.split(" ").join("")
    testString = testString.replace("#", "")

    if (this.validateRgbaString(testString)) {
      return this.parseRgba(testString)
    } else if (this.validateHexString(testString)) {
      return this.parseHex(testString)
    } else {
      return false
    }
  }

  checkColorType = colorType => {
    // this could be ts
    if (!colorType || !("type" in colorType)) {
      return false
    }
    return true
  }

  convertColorType = (colorType, bgColorType) => {
    if (!this.checkColorType(colorType)) {
      return false
    }

    let newColorType, r, g, b

    switch (colorType.type) {
      // is rgba, return hex
      case "rgba":
        r = colorType.value[0].toString(16)
        g = colorType.value[1].toString(16)
        b = colorType.value[2].toString(16)

        if (r.length === 1) r = "0" + r
        if (g.length === 1) g = "0" + g
        if (b.length === 1) b = "0" + b

        newColorType = {
          type: "hex",
          value: [r, g, b],
        }

        return newColorType

      // is hex, return rgba
      case "hex":
        r = parseInt(colorType.value[0], 16)
        g = parseInt(colorType.value[1], 16)
        b = parseInt(colorType.value[2], 16)

        newColorType = {
          type: "rgba",
          value: [r, g, b, 1],
        }

        return newColorType

      default:
        return false
    }
  }

  colorTypeToOutputString = colorType => {
    if (!this.checkColorType(colorType)) {
      return false
    }

    switch (colorType.type) {
      case "rgba":
        return `rgba(${colorType.value[0]},${colorType.value[1]},${
          colorType.value[2]
        },${colorType.value[3]})`

      case "hex":
        return `#${colorType.value[0]}${colorType.value[1]}${
          colorType.value[2]
        }`

      default:
        return false
    }
  }

  handleChange = events => {
    const inputValue = events.target.value
    const colorType = this.returnColorType(inputValue)

    if (colorType) {
      this.setState({
        outputColorType: this.convertColorType(
          colorType,
          this.state.bgColorType
        ),
        errors: false,
      })
    } else {
      this.setState({
        errors: `No color value found :(`,
      })
    }
  }

  handleBgChange = events => {}

  render() {
    return (
      <section className="color-converter">
        <ColorInput
          initialValue={this.colorTypeToOutputString(
            this.state.initialInputColorType
          )}
          bgColorValue={this.colorTypeToOutputString(this.state.bgColorType)}
          handleChange={this.handleChange}
          handleBgChange={this.handleBgChange}
        />

        <ColorOutput
          initialValue={this.colorTypeToOutputString(
            this.state.initialOutputColorType
          )}
          outputValue={this.colorTypeToOutputString(this.state.outputColorType)}
          errors={this.state.errors}
        />
      </section>
    )
  }
}

export default ColorCoverter
