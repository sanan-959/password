
import './App.css';
import {useState} from 'react';
import {UC, LC, NUM, SC} from './Data/PassChar';


function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [special, setSpecial] = useState(false);
  let [passwordLength, setPasswordLength] = useState(8);
  let [password, setPassword] = useState("");

  let createPassword = () => {
    let finalpassword = "";
    let charSet = "";
   
    if(uppercase || lowercase || number || special){
       if(uppercase) charSet += UC;
        if(lowercase) charSet += LC;
        if(number) charSet += NUM;
        if(special) charSet += SC;

        for(let i=0; i<passwordLength; i++){
          finalpassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        setPassword(finalpassword);
        console.log(password)
    }
    else{
      alert("Please select atleast one option");
    }
  };

  let copyPassword = () => {
    let pass = document.getElementById("password");
    pass.select();
    pass.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password copied to clipboard");
  };

  return (
    <>
    <div className="passwordBox">
      <h1>Password Generator App</h1>
      <div className="passwordBoxIn">
        <input type="text" value={password} id="password" placeholder="Your password" readOnly/>
        <button onClick={copyPassword}>Copy</button>
      </div>
      <div className="passlength">
        <label>Password Length</label>
        <input type="number"  value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} min={4} max={12}/>
      </div>

      <div className="passInclude">
        <label>Include uppercase letter</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>
      <div className="passInclude">
        <label>Include lowercase letter</label>
        <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
      </div>
      <div className="passInclude">
        <label>Include number</label>
        <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
      </div>
      <div className="passInclude">
        <label>Include special letter</label>
        <input type="checkbox" checked={special} onChange={()=>setSpecial(!special)}/>
      </div>

      <button className="btn" onClick={createPassword}>Generate Password</button>

    </div>
    </>
  );
}

export default App;
