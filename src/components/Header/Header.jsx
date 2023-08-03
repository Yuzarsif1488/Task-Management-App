import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <img src="download-removebg-preview.png" alt="" />
        </div>
        <div className="mid">
          <span>Full Stack Development Group</span>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
};

export default Header;
