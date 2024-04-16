import React, { useState } from "react"
import { FormControl, Grid, Paper } from "@mui/material"
import PrimaryTextInput from "../../components/PrimaryTextInput/PrimaryTextInput"
import "./CustomField.css"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const StoreSetup = () => {
  const [formData, setFormData] = useState({
    name: "",
    storeUrl: "",
    language: "",
    email: "",
    phone: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  return (
    <Grid container spacing={2} style={{ position: "relative" }}>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        md={12}>
        <Paper
          elevation={0}
          style={{
            padding: 20,
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}>
          <PrimaryTextInput
            label="Store name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={"Type your store name"}
          />
          <label
            style={{
              display: "flex",
              marginBottom: 5,
              color: "#344054",
              fontWeight: "500",
              fontSize: "14px",
              alignSelf: "flex-start",
            }}>
            Store URL
          </label>
          <div className="custom-input-container">
            <input
              style={{ backgroundColor: "#F9FAFB" }}
              className="placeholder-input"
              type="text"
              placeholder="mystore"
            />
            <div className="text-on-right">.markatty.com</div>
          </div>
          <label
            style={{
              marginTop: "20px",
              display: "flex",
              marginBottom: 5,
              color: "#344054",
              fontWeight: "500",
              fontSize: "14px",
              alignSelf: "flex-start",
            }}>
            Store Industry
          </label>
          <FormControl fullWidth>
            <Select
              style={{ height: "44px", backgroundColor: "#F9FAFB" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={handleChange}>
              <MenuItem value={1}>Fashion</MenuItem>
              <MenuItem value={10}>Boys</MenuItem>
              <MenuItem value={20}>Baby</MenuItem>
              <MenuItem value={30}>Girls fashion</MenuItem>
              <MenuItem value={40}>Mens fashion</MenuItem>
            </Select>
          </FormControl>
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              alignSelf: "flex-start",
              fontSize: "14px",
            }}>
            Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..).
          </div>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default StoreSetup
