import React from 'react'

function Login() {
    return (
        <div>
        <h1 id="title_for_login_form">خوش آمدید</h1>

        <input type="email" placeholder="*پسورد" id="email_su" name="email"  required />
        <input type="password" placeholder="*کلمه عبور" id="password_su" name="password" required/>
        <input type="submit" value="ورود"  id="login_btn"/>

        </div>
    )
}

export default Login
