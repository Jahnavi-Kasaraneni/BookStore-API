function Header(){
    return(
        <>
        <div className="bg">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="head">
                   <h1 className="text-start py-2">Book Library</h1>
                   </div>
                   <div className="tail ">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="/home" className=" px-3 text-decoration-none ">Home</a></li>
                        <li className="list-inline-item"><a href="/addbook" className=" px-3 text-decoration-none ">Add Book</a></li>
                        <li className="list-inline-item"><a href="/viewbook"  className="px-3 text-decoration-none ">View Book</a></li>
                    </ul>
                    </div>
                        
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Header;