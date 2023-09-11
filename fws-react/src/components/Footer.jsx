

export default function Footer() {
  return (
    <div className="footer" style={
      {
        left: "0",
        bottom: "0",
        width: "100%",
        height: "6vh",
        fontFamily: "roboto",
        fontWeight: 500,
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        direction: "column",
        backgroundColor: "var(--primary-color)"
      }
    }>
      
        <p>&copy; {new Date().getFullYear()} Fremen Web Solutions</p>
      </div>
  );
}