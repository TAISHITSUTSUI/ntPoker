import React from "react"
import { useInView } from "react-intersection-observer";
import "./animation.css";


function HomeContent() {


  const { ref, inView } = useInView({
    rootMargin: "0px",
    triggerOnce: true
  })


  return (
    <>
      <div className={inView ? "headerFadeIn" :"none"} >
        <h1 
        ref={ref}
        className={"" + inView ? "text-center bold mt-b mb-b headerFadeIn" :"text-center bold mt-b mb-b"}
        >
          プリフロップレンジ表
        </h1>

        <h3 className="m-2">
          レンジ表の確認
        </h3>
        <div className="p darkgray m-2">
          ２種類の操作パネルで素早くハンドレンジを確認する事ができます。
        </div>

        <img
          className="p-3"
          style={{ width: "100%" }}
          src={require(`../images/preflop.png`)}
          alt="アイコン"></img>

        <h3 className="ms-2 mt-b">
          レンジ表の編集、共有
        </h3>
        <div className="darkgray m-2 p">
          あなただけのハンドレンジ表を作成できます。<br />
          作成したハンドレンジ表は他の人と共有することが可能です。
        </div>

        <img
          className="p-3"
          style={{ width: "100%" }}
          src={require(`../images/preflopManagement.png`)}
          alt="アイコン"></img>


        <h1 className="text-center bold mt-b mb-b">エクイティ計算</h1>

        <h3 className="m-2">
          エクイティ計算
        </h3>
        <div className="darkgray m-2 p">
          ポーカーの戦略を考える上でとても重要な、エクイティ計算気を使用できます。ハンドレンジを使用して計算することもですます。<br />
          また、ハンドレンジの役やドローのコンボ数を詳細に解析する機能も提供しています。
        </div>

        <img
          className="p-3"
          style={{ width: "100%" }}
          src={require(`../images/equity.png`)}
          alt="アイコン"></img>

        <div className="w-100 text-center ">
          <a
            className="mt-b mb-b col-12"
            href="https://apps.apple.com/jp/app/ntpoker-%E3%83%BC%E3%83%9D%E3%83%BC%E3%82%AB%E3%83%BC%E5%AD%A6%E7%BF%92%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%BC/id1630961215"
            style={{
              display: "inline-block",
              overflow: "hidden",
              borderRadius: "13px",
              width: "180px",
              height: "60px"
            }}
            target="_blank"
          >

            <img
              className=""
              style={{
                borderRadius: "13px",
                width: "180px",
                height: "60px",
              }}
              src={'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&releaseDate=1464739200&h=b488c8877a1de0c0ee752e2cea473eec'}
              alt="Download on the App Store"></img>
          </a>
        </div>
      </div>

    </>
  );
}

export default HomeContent;