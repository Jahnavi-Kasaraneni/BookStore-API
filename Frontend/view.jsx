import { useEffect, useState } from "react";
import Header from "./header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


function ViewBook(){

    let[data,setbook]=useState();
    let nav=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8080/get').then((res)=>{
            console.log(res)
            setbook(res.data);
        }).catch((err)=>{
            alert(err)
        })
    },[]);

    const deletebook=(id)=>{
        //alert(id);
        axios.delete('http://localhost:8080/delete/'+id).then((res)=>{
           // alert(id);
           if(confirm("Are you sure to delete")){
            alert("deleted")
            window.location.reload();
            
           }
           else{

           }
        }).catch((err)=>{
            alert(err)
        })

    }

    const viewbook=(id)=>{
        nav("/details/"+id);
    }

    const editbook=(id)=>{
        nav("/editbook/"+id);
    }
    return(
        <>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="">View Book</h1>
                    <table>
                        <tr>
                            <th className="pe-5">Title</th>
                            <th className="pe-5">Author</th>
                            <th className="pe-5">Isbn</th>
                            <th className="pe-5">Price</th>
                            <th className="pe-5">Publisher</th>
                            <th className="pe-5">NOC</th>
                            <th className="pe-5">NOP</th>
                            <th className="pe-5">Actions</th>
                        </tr>
                        {
                            data && data.map((data)=>{
                                return(
                                    <>
                                    <tr>
                                        <td className="pe-5">{data.title}</td>
                                        <td className="pe-5">{data.authorname}</td>
                                        <td className="pe-5">{data.isbn}</td>
                                        <td className="pe-5">{data.price}</td>
                                        <td className="pe-5">{data.publisher}</td>
                                        <td className="pe-5">{data.noc}</td>
                                        <td className="pe-5">{data.nop}</td>
                                        <td className="pe-5">{data.noc}</td>
                                        <td className="pe-5">
                                            <div className="grid2">
                                                <button onClick={()=>viewbook(data.id)} className="btn btn-primary p-2">View</button>
                                                <button onClick={()=> editbook(data.id)} className="btn btn-success p-2" >Edit</button>
                                                <button onClick= {() => deletebook(data.id)} className="btn btn-danger p-2">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                    </>
                                )
                            })
                        }
                    </table>
              </div>  
            </div>
        </div>
        
        </>
    )
}
export default ViewBook;