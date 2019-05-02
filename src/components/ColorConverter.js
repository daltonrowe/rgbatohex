import React from "react"
import ColorInput from "./ColorInput"
import ColorOutput from "./ColorOutput"

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
        value: [18, 52, 85, 1],
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
      value: [18, 52, 85, 1],
    }

    let tempString
    tempString = string.split("(")
    tempString = tempString[1].split(")")
    tempString = tempString[0]
    let tempArray = tempString.split(",")

    for (let i = 0; i < tempArray.length; i++) {
      const value = tempArray[i]
      colorType[i] = value
    }

    return colorType
  }

  parseHex = string => {
    let colorType = {
      type: "hex",
      value: ["12", "34", "56"],
    }

    if (string.length === 3) {
      string =
        string[0] + string[0] + string[1] + string[1] + string[2] + string[2]
    }

    colorType[0] = string.slice(0, 2)
    colorType[1] = string.slice(2, 4)
    colorType[2] = string.slice(4, 6)
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

    switch (colorType.type) {
      case "rgba":
        return {
          type: "hex",
          value: [12, 34, 56],
        }

      case "hex":
        return {
          type: "rgba",
          value: [12, 34, 56, 1],
        }

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
        errors: `No color value found :/`,
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
