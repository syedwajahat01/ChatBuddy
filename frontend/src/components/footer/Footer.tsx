

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "10px" }}>
          "Sculpted into existence by SyedWajahat01, a symphony of code harmonized with ❤️."
        </p>
        <div style={{ textAlign: 'center', display:"flex", justifyContent:"center", marginTop:"-32px", gap:"30px" }}>
          <p>Contact no: 639 xxx xxxx</p>
          <p>Email: swhabdi@gmail.com</p>          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
