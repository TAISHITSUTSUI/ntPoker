import React, { useEffect } from "react";
import Content from "./Content"

export default function ContentList(props) {

  const clickLowLevel = () => {
    props.setSelectLevel("beginner")
  }

  const clickMidLevel = () => {
    props.setSelectLevel("intermediate")
  }

  const clickHighLevel = () => {
    props.setSelectLevel("advanced")
  }


  const biginnerTitle = () => {
    if (props.selectLevel === "beginner") {
      return <div className="under ">初級</div>
    } else {
      return <div >初級</div>
    }
  }

  const intermediatelTitle = () => {
    if (props.selectLevel === "intermediate") {
      return <div className="under ">中級</div>
    } else {
      return <div>中級</div>
    }
  }

  const advancedTitle = () => {
    if (props.selectLevel === "advanced") {
      return <div className="under ">上級</div>
    } else {
      return <div>上級</div>
    }
  }

  const subTitle = () => {
    if (props.selectLevel === "beginner") {
      document.title = "ポーカー学習(初級)";
      return <>ポーカーのルールから基礎的な知識を習得できます！！</>
    } else if (props.selectLevel === "intermediate") {
      document.title = "ポーカー学習(中級)";
      return <>ポーカーの考え方について学びましょう！</>
    } else {
      document.title = "ポーカー学習(上級)";
      return <>Coming Soon!!</>
    }
  }



  return (
    <div className="container-fluid p-0  m-0 mb-5">
      <div
        className="row m-0"
        style={{
          width: "100%"
        }}
      >
        <div className="col-lg-8 p-2 m-0">

          <div className="container-fluid  bg-white m-0">
            <div className=" row text-center mt-5">
              <div className="col-4">
                <h2 className="m-3 bold " onClick={clickLowLevel}>
                  {biginnerTitle()}
                </h2>
              </div>

              <div className="col-4">
                <h2 className="m-3 bold " onClick={clickMidLevel}>
                  {intermediatelTitle()}
                </h2>
              </div>

              <div className="col-4">
                <h2 className="m-3 bold " onClick={clickHighLevel}>
                  {advancedTitle()}
                </h2>
              </div>

              <div className="fs-6 mt-4 mb-4">{subTitle()}</div>
            </div>

            <div className="row p-0 m-0">
              {props.contents.map((content, index) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 p-1 ms-0 me-0 mb-2 "
                  key={content.tittle.toString()}
                >
                  <Content content={content} />
                </div>
              )
              )}
            </div>
          </div>
        </div>

        <div
          className="d-none d-lg-block col-lg-4   p-3"
          style={{
            height: "40vh",
          }}
        >
          <div className="bg-white shadow-sm  rounded" style={{ height: "100%" }}>
            <div className="m-4 h3">iOSアプリのダウンロードはこちらから！！</div>
            <div className="w-100 text-center mt-3" >
              <a
                href="https://apps.apple.com/jp/app/ntpoker-%E3%83%BC%E3%83%9D%E3%83%BC%E3%82%AB%E3%83%BC%E5%AD%A6%E7%BF%92%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%BC/id1630961215"
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  borderRadius: "13px",
                  width: "80%",
                  height: "60px",
                  top: "90%"
                }}
                target="_blank"
              >

                <img
                  className=""
                  style={{
                    borderRadius: "13px",
                    width: "80%",
                    height: "60px",
                    top: "90%"
                  }}
                  src={'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&releaseDate=1464739200&h=b488c8877a1de0c0ee752e2cea473eec'}
                  alt="Download on the App Store"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
