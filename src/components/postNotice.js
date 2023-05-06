import React, { useState } from 'react'

function PostNotice() {
   let [text,setText] = useState("")
   let [title,setTitle] = useState("")
   let [name,setName] = useState("")
  return (
    <div>
    <h1>Post Notice</h1>
    <div>
        <input type='text'  id='text' placeholder='Enter Author Name' onChange={(e)=>{setName(e.target.value)}} />
        <input type='text'  id='text' placeholder='Enter Title' onChange={(e)=>{setTitle(e.target.value)}} />
        <input type='text'  id='text' placeholder='Enter Notice body' onChange={(e)=>{setText(e.target.value)}} />
        <input type='submit' value='Create Notice' onClick={async(e)=>{
            e.preventDefault()
            if(text!==""&&title!==""&&name!==""){
                let res=await fetch("https://m11-eap8.onrender.com/notice",{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json"
                },
                body:JSON.stringify({
                    text,title,name
                })
            })
            document.location.reload()
            }else{
                alert("Please fill all details!")
            }
            
        }} />   
    </div>
  </div>
  )
}

export default PostNotice