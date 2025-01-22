import React from "react";
import { Routes, Route } from "react-router-dom";
import { ForgotPass } from "./ForgotPass";
export function Login() {
    return (
        <div>
            login

            <div className="Routes">
                 
                 <Routes>
                    <Route path="/ForgotPass" element={<ForgotPass></ForgotPass>}></Route>
                 </Routes>

            </div>
        </div>
    )
}