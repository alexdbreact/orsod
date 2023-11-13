import React, { useState } from "react";

export default function Myimg() {

    


    const [file, setFile] = useState()
    const handleUpload = (e)=>{
        console.log(file)


    }
    const myee = (e)=>{

        setFile(e.target.files[0])
       
    }
  return (
    <div style={{width: "auto"}}>
قم بتصوير المخالفة     <input
       accept='image/*'
       type='file'
       onChange={myee}
       />
       <button onClick={handleUpload}>oooooooooo</button>
       
   </div>





  );
}
