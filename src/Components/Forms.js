import React,{useState} from 'react'

export default function Forms(props) {
  
  const handleUpClick = ()=>{
    //console.log("I WAS UP CLICKED")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Conveted to upper case text","success")
  }
  const handleDnClick = ()=>{
    //console.log("I WAS UP CLICKED")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Conveted to lower case text","success")
  }
  const handleClearClick = ()=>{
    //console.log("I WAS UP CLICKED")
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared","success")
  }
  const handleCopy = ()=>{
    
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text has been copied","success")
  }
  const handleTitleClick = ()=>{
    //console.log("I WAS UP CLICKED")
    
      var splitStr = text.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
          // You do not need to check if i is larger than splitStr length, as your for does that for you
          // Assign it back to the array
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
      }
      // Directly return the joined string
    let newText =  splitStr.join(' '); 
    setText(newText);
    props.showAlert("Text has been changed to title text","success")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been cleared","success")
  }
  
  const [text, setText] = useState('');
  //setText("new text")

  return (
    <>
   <h1 style={{color: props.mode === 'light'?'black':'white'}}>{props.heading} </h1>
<div className = "container" style={{color: props.mode === 'light'?'black':'white'}}>
<div className="mb-3">
  <textarea className="form-control"  style={{backgroundColor: props.mode2  , color: props.mode === 'light'?'black':'white'}} id="myBox" onChange={handleOnChange} rows="8" value = {text}></textarea>
</div>
<button  type="button" className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to up text</button>
<button  type="button" className="btn btn-primary mx-1" onClick = {handleDnClick}>Convert to Low text</button>
<button  type="button" className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear text</button>
<button  type="button" className="btn btn-primary mx-1" onClick = {handleTitleClick}>Title text</button>
<button  type="button" className="btn btn-primary mx-1" onClick = {handleCopy}>Copy text</button>
<button  type="button" className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
<p></p>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters.</p>
<p>{0.008 * text.split(" ").length} minutes read</p>
<h2>
  Preview
</h2>
<p>{text.length>0?text :"Enter text in the above textbox to preview"}</p>
</div>
</>
  )
}
