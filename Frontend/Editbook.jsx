import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";

function Editbook(){
    let[title,settitle]=useState();

    let[authorname,setauthor]=useState();

    let[isbn,setisbn]=useState();

    let[price,setprice]=useState();

    let[publisher,setpublisher]=useState();

    let[noc,setnoc]=useState();

    let[nop,setnop]=useState();

    let nav=useNavigate();

    let{id}=useParams();


    useEffect(()=>{
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


    const editbook=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8080/edit/'+id,{title,authorname,isbn,price,publisher,noc,nop}).then((res)=>{
            alert("successfully edited");
            nav("/viewbook")
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        
        <>
        <Header/>
        <div className="container">
            <div className="row py-5">
                <div className="col-5 mx-auto">
                    <div className="border-1 border border-secondary shadow-lg rounded-4 px-5 py-5">
                    <h1 className="text-secondary text-center">Add Book</h1>
                    <form onSubmit={editbook} method="post">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                            <input type="text" placeholder="Enter Title *" onChange={(e)=>settitle(e.target.value)} className="form-control"
                            defaultValue={title}/>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="form-group">
                            <input type="text" placeholder="Enter Author Name *" onChange={(e)=>setauthor(e.target.value)} className="form-control"
                            defaultValue={authorname}/>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="form-group">
                            <input type="text" placeholder="Enter ISBN number *" onChange={(e)=>setisbn(e.target.value)} className="form-control"
                            defaultValue={isbn}/>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="form-group">
                            <input type="text" placeholder="Enter price *" onChange={(e)=>setprice(e.target.value)} className="form-control"
                            defaultValue={price}/>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="form-group">
                            <input type="text" placeholder="Enter Publisher *" onChange={(e)=>setpublisher(e.target.value)} className="form-control"
                            defaultValue={publisher}/>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="form-group">
                            <input type="text" placeholder="Enter NOC *" onChange={(e)=>setnoc(e.target.value)} className="form-control"
                            defaultValue={noc}/>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="form-group">
                            <input type="text" placeholder="Enter NOP *" onChange={(e)=>setnop(e.target.value)} className="form-control"
                            defaultValue={nop}/>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <input type="submit" className="btn btn-success py-2"/>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
        </>
    )
}
export default Editbook;