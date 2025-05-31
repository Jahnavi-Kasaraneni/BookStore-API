import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function API(){


    let[data,setbook]=useState(); 


    useEffect(()=>{
        axios.get('http://localhost:8080/get').then((res)=>{
           console.log(res);
           setbook(res.data);
        }).catch((err)=>{
            alert(err)
        })
    },[]); 

    return(
        <>
        <div className="container"> 
        <div className="grid">  
        {
            data && data.map((data)=>{
                
                return(
                    <>
                    
                    <div className="irm">
                    <h1>Title: {data.title}</h1>
                    <h2>Author Name: {data.authorname}</h2>
                    <h3>Price: {data.price}</h3>
                   </div>
                    
                    </>
                )
            })
        }
        </div>
        </div> 

        <Footer/>       
        </>
    )
}
export default API;