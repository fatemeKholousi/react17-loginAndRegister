import React, { useState } from 'react'
import "./App.css"
import CityStateSelect from './CityStateSelect';
function SignUp() {
const [select_edu, setSelect_edu] = useState({value:'chooseSth'})
let edu_place_su= document.getElementById("edu_place_su");
    const selectedEductionHandle=(e)=>{
        setSelect_edu({value:e.target.value})
        if(select_edu.value!=='chooseSth'){
            edu_place_su.style.display="block"; }
        else
        {
            edu_place_su.style.display="none";}
        }


//----------state for all my text input + Refactoring + a Single Source of the Truth-----------------
const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    edu_place: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

//-------------------------------------------------------------




//const handleChange=(e)=>{setfName(e.target.value)}
// const handleSubmit=(e)=>{
//     e.preventDefault();
//     alert(`بعنوان اسم ${fname} را وارد کرده اید`);}
    return (
        <div>
            <CityStateSelect/>
    <form className="sign_up_form" >
        <h1 id="title_for_signup_form">رایگان ثبت نام کنید</h1>
        <div className="name_n_lname">
        <input type="text" placeholder="نام*" id="name_su"  name="fname" onChange={handleInputChange} required/>
        <input type="text" placeholder="نام خانوادگی*" id="lname_su" name="lname" onChange={handleInputChange} required/>
        </div>
        <div className="email_n_password">
        <input type="email" placeholder="پست الکترونیک*" id="email_su" name="email" onChange={handleInputChange} required />
        <input type="password" placeholder="کلمه عبور*" id="password_su" name="password" onChange={handleInputChange} required/>
        
        <select id="education_select" onChange={selectedEductionHandle} value={select_edu.value} required>
            <option value="chooseSth">مدرک</option> 
            <option value="kardani">کاردانی</option> 
            <option value="karshenasi">کارشناسی</option>
            <option value="karshenasiArshad">کارشناسی ارشد</option>
            <option value="doctora">دکترا</option> 
       </select>
       <input type="text" placeholder="محل تحصیل" id="edu_place_su" name="edu_place" onChange={handleInputChange} required/>

        <input type="submit" value="ثبت نام" id="register_btn" /></div>

        </form>
</div>
)
}

export default SignUp
// const handleChange=(e)=>{setfName(e.target.value)}
