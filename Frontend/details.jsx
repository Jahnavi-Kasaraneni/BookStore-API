import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./header";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

function Details(){

    let[title,settitle]=useState();
    
    let[authorname,setauthor]=useState();

    let[isbn,setisbn]=useState();

    let[price,setprice]=useState();

    let[publisher,setpublisher]=useState();

    let[noc,setnoc]=useState();

    let[nop,setnop]=useState();

    let{id}=useParams();

    let nav=useNavigate();

    useEffect(()=>
    {
        axios.get('http://localhost:8080/getsingle/'+id).then((res)=>{
            console.log(res)
            settitle(res.data.title);
            setauthor(res.data.authorname);
            setisbn(res.data.isbn);
            setprice(res.data.price);
            setpublisher(res.data.publisher)
            setnoc(res.data.noc);
            setnop(res.data.nop);
        }).catch((err)=>{
            alert(err)
        })
    },[]);


    const done=()=>{
        nav("/viewbook")
    }

    return(
        <>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="">View Book Details</h1>
                    <div className="border-1 border border-secondary shadow-lg rounded-4 px-5 py-5">
                        <div className="row py-3">
                        <div className="col-6 my-2">
                            <h4>Title</h4>
                            <div className="form-group">
                            <input type="text"  className="form-control"
                            defaultValue={title}/>
                            </div>
                        </div>
                        <div className="col-6 my-2">
                            <h4>Author name </h4>
                            <div className="form-group">
                            <input type="text"  className="form-control"
                            defaultValue={authorname}/>
                            </div>
                        </div>
                        <div className="col-6 my-2">
                            <h4>ISBN</h4>
                            <div className="form-group">
                            <input type="text"  className="form-control"
                            defaultValue={isbn}/>
                            </div>
                        </div>
                        <div className="col-6 my-2">
                            <h4>Price</h4>
                            <div className="form-group">
                            <input type="text"  className="form-control"
                            defaultValue={price}/>
                            </div>
                        </div>
                        <div className="col-6 my-2">
                            <h4>Publisher</h4>
                            <div className="form-group">
                            <input type="text" className="form-control"
                            defaultValue={publisher}/>
                            </div>
                        </div>
                        <div className="col-6 my-2">
                            <h4>NOC</h4>
                            <div className="form-group">
                            <input type="text" className="form-control"
                            defaultValue={noc}/>
                            </div>
                        </div>
                        <div className="col-6 my-2">
                            <h4>NOP</h4>
                            <div className="form-group">
                            <input type="text"  className="form-control"
                            defaultValue={nop}/>
                            </div>
                        </div>
                            <div className="col-12 my-2 text-center"> 
                                <button className="btn btn-success p-2" onClick={done}>Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
       <Footer/>
        </>
    )
}
export default Details;