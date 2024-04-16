import { useState, useRef } from "react"
import VerificationCodeInput from "../../components/VerificationCodeInput/VerificationCodeInput"
import { CiMail } from "react-icons/ci"

const CheckEmail = () => {
  const inputref1 = useRef(null)
  const inputref2 = useRef(null)
  const inputref3 = useRef(null)
  const inputref4 = useRef(null)
  const [verifyCodepayload, setVerifyCodepayload] = useState({
    digit0: "",
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
    code: "",
  })
  return (
    <>
      <div
        style={{
          borderRadius: 25,
          backgroundColor: "#F9F5FF",
          display: "flex",
          alignItems: "center",
          padding: 5,
        }}>
        <div
          style={{
            borderRadius: 25,
            backgroundColor: "#F4EBFF",
            display: "flex",
            alignItems: "center",
            padding: 4,
          }}>
          <CiMail size={25} color="#7244C8" />
        </div>
      </div>
      <div
        style={{
          color: "#101828",
          fontSize: "30px",
          fontWeight: "600",
          marginTop: "10px",
        }}>
        Check your email
      </div>
      <div
        style={{
          color: "#101828",
          fontSize: "16px",
          fontWeight: "400",
          marginTop: "10px",
        }}>
        We sent a verification code to
      </div>
      <div
        style={{
          color: "#101828",
          fontSize: "16px",
          fontWeight: "400",
          marginTop: "10px",
        }}>
        omarmouneer@gmail.com
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "30px",
        }}>
        <VerificationCodeInput
          ref={inputref1}
          value={verifyCodepayload.digit0}
          onChange={(event) => {
            var tempvc = { ...verifyCodepayload }
            tempvc.digit0 = event.target.value
            setVerifyCodepayload({ ...tempvc })
          }}
        />
        <VerificationCodeInput
          ref={inputref2}
          value={verifyCodepayload.digit1}
          onChange={(event) => {
            var tempvc = { ...verifyCodepayload }
            tempvc.digit1 = event.target.value
            setVerifyCodepayload({ ...tempvc })
          }}
        />
        <VerificationCodeInput
          ref={inputref3}
          value={verifyCodepayload.digit2}
          onChange={(event) => {
            var tempvc = { ...verifyCodepayload }
            tempvc.digit2 = event.target.value
            setVerifyCodepayload({ ...tempvc })
          }}
        />
        <VerificationCodeInput
          ref={inputref4}
          value={verifyCodepayload.digit3}
          onChange={(event) => {
            var tempvc = { ...verifyCodepayload }
            tempvc.digit3 = event.target.value
            setVerifyCodepayload({ ...tempvc })
          }}
        />
      </div>
    </>
  )
}
export default CheckEmail
