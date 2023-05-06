import React, { useEffect, useState } from 'react'

function ViewNotice() {
    let [visible,setvisible]=useState(false)
    let [text,setText]=useState("")
    let [title,setTitle] = useState("")
    useEffect(()=>{
       (async ()=>{
            let res =await fetch("https://m11-eap8.onrender.com/notice")
    res=await res.json()
    setres(res)
        })()
    },[])
    let [res,setres]=useState([])
  return (
    <>
    <h1>Notices</h1>
    {
    res.map(item=><div><h2 key={item._id}>{item.title}   By:{item.name}</h2>
                            <p>{
                                "Date : "+item.date.split('T').shift()+"  Time : "+(((item.date.split('T'))[1].split('Z'))[0])
                                
                                
                            }</p>
                        <h3>{item.text}</h3>
    <button id={item._id} key={item._id} onClick={async(e)=>{
        let res=await fetch(`https://m11-eap8.onrender.com/notice/${e.target.id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"Application/json"
                }
            })
            document.location.reload()
    }}>Delete</button>
    <button id={item._id} key={(item._id)+":update"} onClick={(e)=>{
        setvisible(e.target.id)
    }}>Update</button>
    </div>)
    }
   {visible&& <div className='Modal'>
        <div>
        <h1>Update Notice</h1> 
        <input type='text'  id='text' placeholder='Enter Title' onChange={(e)=>{setTitle(e.target.value)}} />
        <input type="text" placeholder='write updated notice' onChange={(e)=>setText(e.target.value)}/>       

        <input type="submit" value="Update" onClick={async()=>{
            let payload={}
            if(text!==""){
                payload.text=text
            }
            if(title!==""){
                payload.title=title
            }
             let res=await fetch(`https://m11-eap8.onrender.com/notice/${visible}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"Application/json"
                },body:JSON.stringify(payload)
            })
            document.location.reload()
        }}/>
        </div>  
    </div>}
    <hr />
    </>
  )
}
export default ViewNotice