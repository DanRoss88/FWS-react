

export default function Footer() {
  return (
    <footer className="footer" style={
      {
        left: "0",
        bottom: "0",
        width: "100%",
        fontFamily: "roboto",
        fontWeight: 500,
        color: "white",
        textAlign: "center"
      }
    }>
        <p>&copy; {new Date().getFullYear()} Fremen Web Solutions</p>
      </footer>
  );
}