import React,{useState} from 'react'



export default function TextForm(props) {
const[text,setText]= useState('');

const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
}

const handleUpClick=()=>{
    console.log("uppercase was clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    if(wordLength()>0){
        props.showAlert("Text turned to uppercase","success")
    }
}

const handleLoClick=()=>{
    setText(text.toLowerCase());
    if(wordLength()>0){
        props.showAlert("Text turned to lowercase","success");
    }
}

const wordLength=()=>{
    let length=0;
    const arr1=text.split(" ");
    for(let i=0;i<arr1.length;i++){
      if(arr1[i]!=""){
        length=length+1;
      }
    }
    return length;



}
//setText('tahsin');
  return (
    <>
    <div className="container" style={{backgroundColor:props.mode==='light'?'white':props.color,color:props.mode==='light'?'black':'white'}}>
        <h1>
            {props.heading}
        </h1>
       
        <div className="mb-2">
        
        <textarea class="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value ={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>

        </div>
        <button className="btn btn-primary mx-2 my-1" disabled={wordLength()===0} onClick={handleUpClick}>Turn to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" disabled={wordLength()===0} onClick={handleLoClick}>Turn to lowercase</button>
      
    </div>
    <div className="my-4" style={{backgroundColor:props.mode==='light'?'white':props.color,color:props.mode==='light'?'black':'white'}}>
        <h3>
            Your text Summary
        </h3>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters*/}
          {/*{wordLength()} words*/}
          {text.split(" ").filter((element)=>{
            return element.length!=0;
          }).length} words and {text.length} characters

        </p>
       <p>
        Average time to read this whole paragraph is {wordLength()*0.08} minutes
       </p>
    </div>
    </>
  )
}

