import { CiCircleCheck } from "react-icons/ci"

const EmailVerified = () => {
  return (
    <>
      <div
        style={{
          borderRadius: 25,
          backgroundColor: "#ECFDF3",
          display: "flex",
          alignItems: "center",
          padding: 5,
        }}>
        <div
          style={{
            borderRadius: 25,
            backgroundColor: "#D1FADF",
            display: "flex",
            alignItems: "center",
            padding: 4,
          }}>
          <CiCircleCheck size={23} color="#12B76A" />
        </div>
      </div>
      <div
        style={{
          color: "#101828",
          fontSize: "30px",
          fontWeight: "600",
          marginTop: "10px",
        }}>
        Email verified
      </div>
      <div
        style={{
          color: "#101828",
          fontSize: "16px",
          fontWeight: "400",
          marginTop: "10px",
        }}>
        Your accounnt has been verified successfully.
      </div>
      <div
        style={{
          color: "#101828",
          fontSize: "16px",
          fontWeight: "400",
          marginTop: "10px",
        }}>
        Click below to setup your store.
      </div>
    </>
  )
}
export default EmailVerified
