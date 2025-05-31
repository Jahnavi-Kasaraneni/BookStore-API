import { useEffect, useState } from "react";
import Header from "./header";
import Latest from "./latest";
import axios from "axios";
import API from "./api";

function Home(){

    return(
        <>
        <Header/>
        <div className="bg1">
            <h1 className="text-white">Welcome to Book Library!!</h1>
        </div>
        <Latest/>
        <API/>
        </>
    )
}
export default Home;