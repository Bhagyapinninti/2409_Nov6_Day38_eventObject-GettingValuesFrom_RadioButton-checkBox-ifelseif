import React, { useRef } from "react";

function Signup() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let firstNameSpanRef = useRef();
  let lastNameSpanRef = useRef();
  let emailSpanRef = useRef();
  let passwordSpanRef = useRef();

  let marksInputRef= useRef();

  let maleRadioButtonRef = useRef();
  let femaleRadioButtonRef = useRef();
  let selectedGender;
  let salutation;
  let maritalStatus;

  let labelResultRef = useRef();
  let stateSelectRef = useRef();

  let languagesKnown ={tel:"False", eng:"False", hin:"False", tam:"False", mal:"False", kan:"False"} ;
  //console.log(languagesKnown)

  let onCreateAccount = () => {
    if (selectedGender == "Male") {
      salutation = "Mr.";
    } else {
      if (maritalStatus == "single") {
        salutation = "Ms.";
      } else {
        salutation = "Mrs.";
      }
    }
    console.log(languagesKnown)
    labelResultRef.current.innerHTML =
      `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} 
      from ${stateSelectRef.current.value}, Your account has been created successfully.
       Your selected languages are ${languagesKnown.eng==true? "English":""}
       ${languagesKnown.hin==true? "Hindi":""} ${languagesKnown.tel==true? "Telugu":""}
       ${languagesKnown.tam==true? "Tamil":""} ${languagesKnown.kan==true? "Kannada":""}
       ${languagesKnown.mal==true? "Malayalam":"."}`;
  };

 

    let nameRegex = /^[A-Za-z\s]{2,30}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

  let validateName = (inputRef, spanRef) => {
    let nameResult = nameRegex.test(inputRef.current.value);
    if (nameResult == true) {
      spanRef.current.innerHTML = "Valid";
      spanRef.current.style.color = "green";
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.color = "red";
    }
  };

  let validateEmail = (inputRef, spanRef) => {
    let emailResult = emailRegex.test(inputRef.current.value);
    if (emailResult == true) {
      spanRef.current.innerHTML = "Valid";
      spanRef.current.style.color = "green";
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.color = "red";
    }
  };

  let validatePassword = (inputRef, spanRef) => {
    let passwordResult = passwordRegex.test(inputRef.current.value);
    if (passwordResult == true) {
      spanRef.current.innerHTML = "Valid";
      spanRef.current.style.color = "green";
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.color = "red";
    }
  };

  return (
    <div>
      <form>
        
        <h1>Sign Up Form</h1>
        <hr></hr>

<div>
  <label>First Name</label>
  <input
    ref={firstNameInputRef}
    onChange={() => {
      validateName(firstNameInputRef, firstNameSpanRef);
    }}
  ></input>
  <span ref={firstNameSpanRef}></span>
</div>

<div>
  <label>Last Name</label>
  <input
    ref={lastNameInputRef}
    onChange={() => {
      validateName(lastNameInputRef, lastNameSpanRef);
    }}
  ></input>
  <span ref={lastNameSpanRef}></span>
</div>

<div>
  <label>Gender</label>
  <input
    type="radio"
    name="gender"
    ref={maleRadioButtonRef}
    onClick={() => {
      if (maleRadioButtonRef.current.checked == true) {
        selectedGender = "Male";
      }
    }}
  ></input>
  <label style={{ width: "auto" }}>Male</label>
  <input
    type="radio"
    name="gender"
    ref={femaleRadioButtonRef}
    onClick={() => {
      if (femaleRadioButtonRef.current.checked == true) {
        selectedGender = "Female";
      }
    }}
  ></input>
  <label style={{ width: "auto" }}>Female</label>
</div>

<div>
  <label>Marital Status</label>
  <input
    type="radio"
    name="status"
    onClick={(eventObject) => {
      if (eventObject.target.checked == true) {
        maritalStatus = "single";
      }
    }}
  ></input>
  <label style={{ width: "auto" }}>Single</label>
  <input
    type="radio"
    name="status"
    onClick={(eventobject) => {
      if (eventobject.target.checked == true) {
        maritalStatus = "Married";
      }
    }}
  ></input>
  <label style={{ width: "auto" }}>Married</label>
</div>

<div>
  <label>Age</label>
  <input></input>
</div>
   
<div>
  <label>Marks</label>
  <input ref={marksInputRef}
  onChange={()=>{
    let marks= (marksInputRef.current.value);
    if(marks<35)
    {
      console.log(`Fail`)
    }
    else if(marks>=35 && marks<=59){
      console.log(`Average`)
    }
    else if(marks>=60 && marks<=79){
      console.log(`Good`)
    }
    else if(marks>=80 && marks<=89){
      console.log(`Very Good`)
    }
    else if(marks>=90 && marks<=100){
      console.log(`Excellent`)
    }
    else{
      console.log(`Invalid Marks`)
    }
  }}
  ></input>

</div>

<div>
  <label>Email</label>
  <input
    ref={emailInputRef}
    onChange={() => {
      validateEmail(emailInputRef, emailSpanRef);
    }}
  ></input>
  <span ref={emailSpanRef}></span>
</div>

<div>
  <label>Password</label>
  <input
    ref={passwordInputRef}
    onChange={() => {
      validatePassword(passwordInputRef, passwordSpanRef);
    }}
  ></input>
  <span ref={passwordSpanRef}></span>
</div>

<div>
  <label>State</label>
  <select ref={stateSelectRef}>
    <option>Select State</option>
    <option>Andhra Pradesh</option>
    <option>Telangana</option>
    <option>Tamilnadu</option>
    <option>Kerala</option>
    <option>Karnataka</option>
    <option>Maharastra</option>
    <option>Gujarat</option>
    <option>Uttar Pradesh</option>
  </select>
</div>

<div>
  <label>Languages</label>
  <input type="checkbox"
  onChange={(e)=>{
    languagesKnown.eng=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>English</label>
  <input type="checkbox"
   onChange={(e)=>{
    languagesKnown.hin=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>Hindi</label>
  <input type="checkbox"
   onChange={(e)=>{
    languagesKnown.tel=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>Telugu</label>
  <input type="checkbox"
   onChange={(e)=>{
    languagesKnown.kan=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>kannada</label>
  <input type="checkbox"
  
  onChange={(e)=>{
    languagesKnown.tam=e.target.checked;
  }}></input>
  <label style={{width:"auto"}}>Tamil</label>
  <input type="checkbox"
   onChange={(e)=>{
    languagesKnown.mal=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>Malayalam</label>
</div>

<div>
  <button
    type="button"
    onClick={() => {
      onCreateAccount();
    }}
  >
    Sign Up
  </button>
</div>
<label style={{width:"500px"}} ref={labelResultRef}></label>
        
        
      </form>
    </div>
  );
}

export default Signup;
