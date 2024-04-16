import React from "react"

const VerificationCodeInput = ({
  value,
  onChange,
  length,
  index,
  focusNextInput,
  ...props
}) => {
  const hasNumber = /\d/.test(value)
  return (
    <input
      {...props}
      type="text"
      value={value}
      onChange={onChange}
      maxLength={1}
      style={{
        ...styles.inputContainer,
        ...{
          border: `3px solid ${hasNumber ? "#7244C8" : "#D0D5DD"}`,
          color: hasNumber ? "#7244C8" : "black",
        },
      }}
    />
  )
}

const styles = {
  inputContainer: {
    width: 80,
    height: 80,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 8,
    boxSizing: "border-box",
    padding: "10px 8px",
  },
}

export default VerificationCodeInput
