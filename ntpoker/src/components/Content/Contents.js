import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import Contentlist from "./ContentList"
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import ContentView from "./ContentView";
import Breadcrumbs from "../Breadcrumbs"

function Contents(props) {
  const [contents, setrContents] = useState([]);
  const [selectLevel, setSelectLevel] = useState("beginner");



  useEffect(() => {
    //データ取得
    const contentData = collection(db, "contents");
    getDocs(contentData).then((snapShot) => {

      // setBeginnerContents(contents.filter((content) => content.level === "beginner"));
      setrContents(snapShot.docs.map((doc, index) => ({ ...doc.data() })).filter((content) => content.level === selectLevel).sort(function (a, b) {
        return (a.postID < b.postID) ? -1 : 1;  //オブジェクトの昇順ソート
      }));
    })

  }, [selectLevel]);


  return (
    <>
      <div>
        <Breadcrumbs />
      </div>
        <Routes>
          <Route path="/" element={<Contentlist selectLevel={selectLevel} setSelectLevel={setSelectLevel} contents={contents} />} />
          {/* <Route path=":id" element={<ContentView />} />  */}
          <Route path=":id" element={<ContentView />} />
        </Routes>

    </>

  );
}


export default Contents;
