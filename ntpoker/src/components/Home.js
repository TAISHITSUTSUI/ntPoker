import React, { useEffect, useState ,useRef } from "react"
import "./animation.css";
import { useInView } from "react-intersection-observer";
import HomeContent from "./HomeContent.js"


function Home() {


  const { ref, inView } = useInView({
    rootMargin: "0px",
    triggerOnce: true
  })


  return (
    <div className="col-lg-6 mx-auto">
      <div className="m-0 p-0 ">
        <div className=" row bg-white" style={{ height: "90vh", width: "100%" }}>
          <img
            className="position-absolute top-50 start-50 translate-middle fadeIn"
            style={{ height: 250, width: 250 }}
            src={require(`../images/app_icon.png`)}
            alt="アイコン"></img>
          <h1 className="text-center bold position-absolute start-50 translate-middle demo02" style={{ top: "70%", fontSize: "60px" }}>
            <span>N</span>
            <span>T</span>
            <span></span>
            <span>P</span>
            <span>o</span>
            <span>k</span>
            <span>e</span>
            <span>r</span>
          </h1>

          <a
            href="https://apps.apple.com/jp/app/ntpoker-%E3%83%BC%E3%83%9D%E3%83%BC%E3%82%AB%E3%83%BC%E5%AD%A6%E7%BF%92%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%BC/id1630961215"
            style={{
              display: "inline-block",
              overflow: "hidden",
              borderRadius: "13px",
              width: "180px",
              height: "60px",
              top: "90%"
            }}
            target="_blank"
          >

            <img
              className="position-absolute start-50 translate-middle fall"
              style={{
                borderRadius: "13px",
                width: "180px",
                height: "60px",
                top: "90%"
              }}
              src={'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&releaseDate=1464739200&h=b488c8877a1de0c0ee752e2cea473eec'}
              alt="Download on the App Store"></img>
          </a>

        </div>

        

        <div 
        className={inView ? "p-4 " : "none"}
          style={{
            backgroundColor: "#252320"
          }}
        >
          <h3
            ref={ref}
            className={inView ? "white bold mt-5 mb-3 tileFadeIn" : "white bold mt-5 back"}
            style={{ fontSize: "32px" }}
          >
            NTPokerとは？
          </h3>
          <div
            className={inView ? "p white mt-2  mb-b contentFadeIn" : "white mt-2  mb-b back"}
            style={{ fontSize: "18px" }}
          >
            NTPokerはポーカーの上達のためにさまざまなコンテンツを提供しているiOSアプリです。<br />
          </div>

          <h3
            className={inView ? "white bold mt-b tileFadeIn" : "white bold mt-b"}
            style={{ fontSize: "32px" }}
          >
            できることは？
          </h3>

          <ul
            className={inView ? "list white mb-5 contentFadeIn" : "list white mb-5"}
          >
            <li>
              ー充実した学習コンテンツの閲覧
            </li>
            <li>
              ープリフロップレンジ表の確認、編集、共有
            </li>
            <li>
              ーハンドレンジも使用できるエクイティ計算機能
            </li>

          </ul>

        </div>
      </div>

      <HomeContent />

    </div>
  );
}

export default Home;