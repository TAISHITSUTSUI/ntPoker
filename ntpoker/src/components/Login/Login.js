import React, {useEffect, useState  } from "react";


function Login() {
  
    return (
        <div className="d-flex justify-content-center">
            <div className="container  bg-secondary m-5" style={{maxWidth:"420px"}}>
                <div className="row p-4 ">
                    <section className="col-12 mb-4 mt-3">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>
                    </section>

                    <section className="col-12 mb-4">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="text" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                    </section>
                    
                    <section className="col">
                            保存しておく
                    </section>
                    <section className="col">
                            パスワードを忘れた
                    </section>

                </div>

                <div className="row p-4">
                    <div className="mt-4 d-grid gap-2 mx-auto">
                        <button className="btn btn-primary" type="button">Log In</button>
                    </div>

                    <div className="mt-4 mb-4 col-12 text-center">
                        ------------または---------------
                    </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button className="btn btn-primary" type="button">google</button>
                        </div>
                        <div className="mt-4 d-grid gap-2 mx-auto">
                            <button className="btn btn-primary" type="button">tiwiter</button>
                        </div>
                </div>
                
                <div className="row bg-primary">
                    <h1>aaa</h1>
                </div>

            </div>

        </div>
  
    );
  }
  
  
  export default Login;