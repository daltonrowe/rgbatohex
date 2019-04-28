import React from "react"
import ColorInput from "./ColorInput"
import ColorOutput from "./ColorOutput"

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
        value: [12, 34, 56],
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
    return colorType
  }

  parseHex = string => {
    let colorType = {
      type: "hex",
      value: ["12", "34", "56"],
    }
    return colorType
  }

  validateRgbaString = string => {
    console.log("validate rgba")
    const valid = true
    return valid
  }

  returnColorType = string => {
    if (this.validateRgbaString(string)) {
      return this.parseRgba(string)
    } else if (this.validateHexString(string)) {
      return this.parseHex(string)
    } else {
      return false
    }
  }

  validateHexString = string => {
    console.log("validate hex")
    const valid = true
    return valid
  }

  convertColorType = (colorType, bgColorType) => {
    switch (colorType.type) {
      case "rgba":
        break

      case "hex":
        break

      default:
        break
    }
  }

  colorTypeToOutputString = colorType => {
    let outputString

    if (!colorType) {
      return (outputString = `No color type found`)
    }

    switch (colorType.type) {
      case "rgba":
        outputString = `rgba(${colorType.value[0]},${colorType.value[1]},${
          colorType.value[2]
        },${colorType.value[3]})`
        break

      case "hex":
        outputString = `#${colorType.value[0]}${colorType.value[1]}${
          colorType.value[2]
        }`
        break

      default:
        outputString = `How'd ya get here?`
        break
    }

    return outputString
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
