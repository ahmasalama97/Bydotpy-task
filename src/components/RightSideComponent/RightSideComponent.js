import { Box, Typography } from "@mui/material"
import PropTypes from "prop-types"

const RightSideComponent = ({ text, imageUrl, image1, subText }) => {
  return (
    <Box
      sx={{
        ...styles.container,
        ...{
          background: `linear-gradient(to bottom, #7F56D9, #2F234A), url(${imageUrl})`,
        },
      }}>
      <Box sx={styles.imageContainer}>
        {imageUrl && <img src={imageUrl} alt="imageAlt" style={styles.image} />}
      </Box>
      <Box sx={styles.image1Container}>
        <Box sx={styles.image1Main}>
          {image1 && <img src={image1} alt="image1Alt" style={styles.image1} />}
        </Box>
        <Box style={styles.text}>{text}</Box>
        <Typography style={styles.subText}>{subText}</Typography>
      </Box>
    </Box>
  )
}

RightSideComponent.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  image1: PropTypes.string,
  subText: PropTypes.string,
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    backgroundSize: "cover",
  },
  imageContainer: {
    height: "100vh",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  image1Container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "65%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "15%",
  },
  image1Main: {
    height: "80px",
    width: "80px",
    padding: "5px",
  },
  image1: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: "50px",
    padding: "5px",
  },
  subText: {
    color: "#EAECF0",
    fontWeight: "500",
    fontSize: "17px",
    padding: "5px",
  },
}

export default RightSideComponent
