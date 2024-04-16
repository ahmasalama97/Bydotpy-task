import { useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton"
import RightSideComponent from "../../components/RightSideComponent/RightSideComponent"
import rightsideimage from "../../assets/rightsideimage.png"
import frame from "../../assets/Frame.png"
import arrow from "../../assets/arrow.png"
import logo from "../../assets/logo.png"
import {
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Box,
  Typography,
} from "@mui/material"
import { CiMail } from "react-icons/ci"
import { useNavigate } from "react-router-dom"
import CheckEmail from "./CheckEmail"
import EmailVerified from "./EmailVerified"
import StoreSetup from "../StoreSetup/StoreSetup"

function VerifyMail() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Grid container spacing={3} style={{ position: "relative" }}>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        md={6}>
        <Box
          sx={{
            width: "83px",
            height: "34px",
            position: "absolute",
            top: "5%",
            left: "4%",
          }}>
          <img
            alt="Logo"
            src={logo}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Paper
          elevation={0}
          style={{
            padding: 20,
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}>
          <Box sx={{ width: "100%", marginBottom: "10%" }}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
                  color: "rgb(114, 68, 200)",
                },
                "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed":
                  {
                    color: "#018601",
                  },
              }}>
              <Step>
                <StepLabel>
                  <div>
                    <span
                      style={{
                        fontWeight: "bold",
                        color:
                          activeStep === 0 ? "rgb(114, 68, 200)" : "#018601",
                      }}>
                      Your Details
                    </span>{" "}
                    <br /> Provide you basic information
                  </div>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <div>
                    <span
                      style={{
                        fontWeight: "bold",
                        color:
                          activeStep === 0
                            ? "rgba(0, 0, 0, 0.6)"
                            : activeStep === 1
                            ? "rgb(114, 68, 200)"
                            : "#018601",
                      }}>
                      Confirmation
                    </span>{" "}
                    <br /> Confirm your email
                  </div>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <div>
                    <span
                      style={{
                        fontWeight: "bold",
                        color:
                          activeStep === 0
                            ? "rgba(0, 0, 0, 0.6)"
                            : activeStep === 1
                            ? "rgba(0, 0, 0, 0.6)"
                            : activeStep === 2
                            ? "rgb(114, 68, 200)"
                            : "#018601",
                      }}>
                      Store Information
                    </span>{" "}
                    <br /> Set your store main info
                  </div>
                </StepLabel>
              </Step>
            </Stepper>
          </Box>
          {activeStep === 0 && <CheckEmail />}
          {activeStep === 1 && <EmailVerified />}
          {activeStep === 2 && <StoreSetup />}
          <PrimaryButton
            label={
              activeStep === 0
                ? "Verify email"
                : activeStep === 1
                ? "Continue"
                : "Save"
            }
            to={() => {
              if (activeStep === 0) {
                setActiveStep(1)
              } else if (activeStep === 1) {
                setActiveStep(2)
              }
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}>
            <Typography
              sx={{ color: "#475467", fontSize: "14px", fontWeight: "400" }}>
              Didn’t receive the email?
            </Typography>
            <Typography
              sx={{
                color: "#6941C6",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                marginLeft: "5px",
              }}>
              Click to resend
            </Typography>
          </Box>
          <div
            onClick={handleClick}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              cursor: "pointer",
            }}>
            <IoIosArrowRoundBack size={25} />
            <div
              style={{
                color: "#475467",
                fontSize: "14px",
                fontWeight: "400",
                marginLeft: "5px",
              }}>
              Back to login
            </div>
          </div>
          <div
            style={{
              width: "45%",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              bottom: 20,
              justifyContent: "space-between",
            }}>
            <div
              style={{ color: "#475467", fontSize: "14px", fontWeight: "400" }}>
              © Markatty 2022
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CiMail size={18} />
              <div
                style={{
                  marginLeft: "5px",
                  color: "#475467",
                  fontSize: "14px",
                  fontWeight: "400",
                }}>
                support@markatty.com
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          width: "300px",
          position: "absolute",
          bottom: 0,
          zIndex: 99999,
          left: "42%",
        }}>
        <img
          src={arrow}
          alt="arrow"
          style={{
            width: "100%",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RightSideComponent
          image1={frame}
          text="Verify your account now."
          subText="Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes."
          imageUrl={rightsideimage}
        />
      </Grid>
    </Grid>
  )
}

export default VerifyMail
