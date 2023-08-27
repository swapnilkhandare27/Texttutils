import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to Uppercase", "success")
    }
    const handleLoclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to lowercase", "success")
    }
    const handleclearclick = ()=>{
      //console.log("Uppercase was clicked" + text);
      let newText = ' ';
      setText(newText)
  }
    const handleOnchange =(event)=>{
        //console.log("on change");
        setText(event.target.value)
    }

    const handlecopyclick = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

   
    const [text, setText] = useState('Enter a text');

    return (
        <>
        <div className='container' style={{Color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>Clear text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handlecopyclick}>Copy text</button>
    </div>
    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
    </div>
    </>
  )
}
  
