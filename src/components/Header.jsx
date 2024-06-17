import "./styles/Header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo">HOSTEL PRICER</div>
      <div className="menu">
        <div className="menu-items">Home</div>
        <div className="menu-items">Listing</div>
        <div className="menu-items">About</div>
        <div className="menu-items">Help</div>
      </div>
    </div>
  );
}
export default Header;
