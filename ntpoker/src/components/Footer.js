import React from "react"

export default function Footer() {

    return(
        <> 
        <div id="footerwrap">
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h4>FOLLOW US</h4>
                <div className="hline-w"></div>
                <div className="p">
                    <a href="https://apps.apple.com/jp/app/ntpoker-%E3%83%BC%E3%83%9D%E3%83%BC%E3%82%AB%E3%83%BC%E5%AD%A6%E7%BF%92%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%BC/id1630961215?uo=4" target="_blank"><i className="fa fa-apple"></i></a>
                    {/* <a href="#twitter"><i className="fa fa-facebook"></i></a> */}
                    <a href="https://twitter.com/ntpoker1800" target="_blank"><i className="fa fa-twitter"></i></a>
                    {/* <a href="#twitter"><i className="fa fa-tumblr"></i></a> */}
                    {/* <a href="#twitter"><i className="fa fa-instagram"></i></a>
                    <a href="#twitter"><i className="fa fa-tumblr"></i></a> */}
                </div>
                </div>
                <div className="col-lg-6">
                <h4>About</h4>
                <div className="hline-w"></div>
                <div className="p">
                    <div>
                        <a href="https://ntpoker-1800.web.app/terms.html" target="_blank" className="text-decoration-none text-light">利用規約</a>
                    </div>
                    <div>
                        <a href="https://ntpoker-1800.web.app/policy.html" target="_blank" className="text-decoration-none text-light">プライバシーポリシー</a>
                    </div>
                </div>
                </div>

            </div>
            </div>
            </div>
            <div id="copyrights">
            <img style={{height:50,width:50}} src={require(`../images/app_icon.png`)}  alt="アイコン"></img>
            <div className="credits">
                <strong>NTPoker</strong>
            </div>
            <div className="container">
                <div 
                className="p"
                style={{
                    color:"whitesmoke"
                }}
                >
                    &copy; 1900 Co.
                </div>
            </div>
            </div>
        </>

    )
}