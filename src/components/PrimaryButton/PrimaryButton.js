import React from "react"
import { Button } from "@mui/material"
import PropTypes from "prop-types"

const PrimaryButton = ({ label, to }) => {
  return (
    <Button
      style={{
        backgroundColor: "#7244C8",
        width: 360,
        height: 44,
        borderRadius: 8,
        marginTop: "30px",
        textTransform: "capitalize",
      }}
      type="button"
      onClick={to}
      variant="contained">
      {label}
    </Button>
  )
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
}

export default PrimaryButton
