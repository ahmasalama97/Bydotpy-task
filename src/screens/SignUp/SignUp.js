import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Grid, Paper } from "@mui/material"
import RightSideComponent from "../../components/RightSideComponent/RightSideComponent"
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton"
import PrimaryTextInput from "../../components/PrimaryTextInput/PrimaryTextInput"
import rightsideimage from "../../assets/rightsideimage.png"
import image1 from "../../assets/stars.png"
import arrow from "../../assets/arrow.png"
import logo from "../../assets/logo.png"
import { TbWorld } from "react-icons/tb"
import { CiMail } from "react-icons/ci"

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <Grid container spacing={3} style={{ position: "relative" }}>
      <Grid
        style={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        md={6}>
        <div
          style={{
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
        </div>
        <Paper
          elevation={0}
          style={{
            padding: 20,
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}>
          <PrimaryTextInput
            label="Name*"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={"Enter your name"}
          />
          <PrimaryTextInput
            label="Email*"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={"Enter your Email"}
          />
          <PrimaryTextInput
            label="Phone Number*"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={"Phone Number"}
          />
          <PrimaryTextInput
            label="Password*"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={"Create a password"}
          />
          <div
            style={{
              marginTop: "-15px",
              display: "flex",
              alignSelf: "flex-start",
            }}>
            Must be at least 8 characters.
          </div>
          <PrimaryButton
            label="Get Started"
            to={() => navigate("/VerifyMail")}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}>
            <div
              style={{ color: "#475467", fontSize: "14px", fontWeight: "400" }}>
              Already have an account?
            </div>
            <div
              style={{
                color: "#6941C6",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                marginLeft: "5px",
              }}>
              Log in
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}>
            <div
              style={{ color: "#475467", fontSize: "14px", fontWeight: "400" }}>
              عربى
            </div>
            <TbWorld size={25} />
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
          image1={image1}
          text="Start turning your ideas into reality."
          subText="Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes."
          imageUrl={rightsideimage}
        />
      </Grid>
    </Grid>
  )
}

export default SignUp
