import React from "react";
import "./font.css";

function Sidebar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-color "  >
        <div className="container-fluid">
          <div>
            
            <a className="navbar-brand ms-1" href="/">
            <img style={{ height: 60, width: 60 }} src={require(`../images/app_icon.png`)} alt="アイコン"></img>
            <span className="m-1 align-middle nav-font">NTPoker</span>
              
              </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse sub-font right" id="navbarNav">
            <ul 
            className="navbar-nav"
            >
              <li className="nav-item m-2">
                <a className="nav-link active" aria-current="page" href="/">ホーム</a>
              </li>
              <li className="nav-item m-2" >
                <a className="nav-link active" href="/content">学ぶ</a>
              </li>
              {/* <li className="nav-item m-2" >
                <a className="nav-link" href="/about">about</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
