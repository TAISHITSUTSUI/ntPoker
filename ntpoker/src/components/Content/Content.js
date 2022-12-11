import React from 'react';
import { Link } from "react-router-dom";

function Content(props) {

  return (
    <>
      <div
        className='shadow-sm  rounded'
        style={{
          height: "35vh"
        }}
      >
        <Link
          to={`/content/${props.content.tittle}`}
          className="text-decoration-none"
        >

          <div
            className="card  bg-white"
            style={{
              height: "100%"
            }}
          >
            <div
              className='position-relative'
              style={{
                width:"100%",
                maxHeight:"20vh",
                scrolling:"no",
                overflow:"hidden",
              }}
            >
              <img
                className='card-img-top text-center align-self-center'
                style={{
                  width: "100%",
                  objectFit: "scale-down",
                  opacity:"1",
                }}

                src={require(`../../images/back.jpg`)}
                alt="アイコン"
              />
              <h3
                className=" fontTitle  white bold position-absolute ms-3"
                style={{
                  fontSize: "1.4rem",
                  fontWeight:"900",
                  top:"40%",
                }}
              >
                {props.content.tittle}
              </h3>
            </div>
            <div
              className="card-body"
              style={{

              }}
            >
              <h3
                className=" black"
                style={{
                  fontSize: "1rem",
                  color: "#696969",
                }}
              >
                {props.content.subTitle}
              </h3>
              {/* <div className="card-text fs-7 p">{props.content.subTitle}</div> */}
            </div>
          </div>
        </Link>
      </div>

    </>
  );

}

export default Content;
