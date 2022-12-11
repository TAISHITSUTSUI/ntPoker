import React from 'react'
import { useParams } from 'react-router-dom';
import { urlList } from './ContentURL.js'
import Iframe from 'react-iframe'

export default function ContentView(props) {

  const { id } = useParams();

  function changeIframe() {
    const scrollHeight = document.getElementById("iframe").contentWindow.document.body.scrollHeight;
    document.getElementById("iframe").height = scrollHeight;
    document.title = id;
  }

  return (
    <>
      <div className='container-fulid m-0 p-0 p-md-3 bg-white'>

        <div
          className='row m-0 p-0'
          style={{
          }}
        >

          <div className='col-lg-8 col m-0 p-md-3 p-0'>
            <div>
              <h1 className='mt-4 mb-4'>
                【ポーカー役の一覧】
              </h1>
              <p>
                ポーカーの役
              </p>
            </div>
            <Iframe
              id="iframe"
              url={urlList[id]}
              width='100%'
              height="100%"
              frameBorder="0"
              title='content'
              scrolling='no'
              onLoad={() => changeIframe()}
              className="w-100"
            />
          </div>
          <div
            className='d-none d-md-block col-md-4 m-0 p-md-3 '
            style={{
              height: "100vh"
            }}
          >
            <div className='h-50 bg-white'>
              <div className='fs-2 m-4'>
                他の記事
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

