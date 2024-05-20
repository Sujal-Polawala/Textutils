import React , {useState} from 'react'
import { useSpeechSynthesis } from "react-speech-kit";

export default function TextForm(props) {

    // const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();

  const HandleUpClick = () => {
    // console.log("UpperCase Button was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")
  }

  const HandleLoClick = () => {
    // console.log("UpperCase Button was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")
  }

  const HandleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success")
  }

  const HandleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!", "success")
  }

  const HandleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success")
  }

  const HandleOnChange = (event) => {
    // console.log("Onchange Clicked");
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" style={{backgroundColor: props.mode==='dark'?'#173f6e':'white',color: props.mode==='dark'?'white':'#042743'}} placeholder="Enter Text Here" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='dark'?'#042743':'#0d6efd',borderColor: props.mode==='dark'?'white':'#0d6efd'}} onClick={HandleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='dark'?'#042743':'#0d6efd',borderColor: props.mode==='dark'?'white':'#0d6efd'}} onClick={HandleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='dark'?'#042743':'#0d6efd',borderColor: props.mode==='dark'?'white':'#0d6efd'}} onClick={() => speak({ text: text })}>Speak</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='dark'?'#042743':'#0d6efd',borderColor: props.mode==='dark'?'white':'#0d6efd'}} onClick={HandleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='dark'?'#042743':'#0d6efd',borderColor: props.mode==='dark'?'white':'#0d6efd'}} onClick={HandleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==='dark'?'#042743':'#0d6efd',borderColor: props.mode==='dark'?'white':'#0d6efd'}} onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter(Boolean).length} Words And {text.length} Characters</p>
      <p>{0.008 * text.split(/\s+/).filter(Boolean).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  )
}
