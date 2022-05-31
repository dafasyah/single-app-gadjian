import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// import axios from 'axios';

const PersonelList = () => {
    const [personel, setPersonel] = useState([]);

    const [pageNum, setPageNum] = useState(0);

    const personelPerPage = 4;
    const pagesVisited = pageNum * personelPerPage;

    const pageCount = Math.ceil(personel.length / personelPerPage);
    const changePage = ({ selected }) => {
        setPageNum(selected);
    }

    // const fetchPersonel = async () => {
    //     try {
    //         let resp = await axios.get("https://randomuser.me/api/?results=28")
    //         setPersonel(resp.data.data)
    //     } catch (error) {
            
    //     }
    // }

    // useEffect(() => {
    //    fetchPersonel();
    //   }, [])

    useEffect(() => {
     
             fetch("http://localhost:8000/results").then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                setPersonel(data);
            })
       
      
    }, []);
    return (
        <div className="personel-list container bg-slate-200 p-5 sm:max-w-none sm:w-full">
            <div className="navbar-personel-list bg-white grid grid-cols-2 sm:flex sm:flex-col">
                <div className="m-4">
                    <h1 className="text-4xl font-bold text-custom-green mb-2 uppercase sm:text-3xl">
                        Personnel List
                    </h1>
                    <h1 className="text-xl">
                        List of all personel
                    </h1>
                </div>
                <div className="input-group relative self-center  sm:flex sm:flex-col">
                    <div className="absolute inset-y-3 left-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-custom-green" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon" className="border border-gray-300 text-gray-900 p-2 pl-7 w-1/2 sm:w-auto" placeholder="Find Personels" />
                    <button className="ml-4 bg-custom-green p-1.5 text-white w-2/5 sm:w-auto sm:ml-0 sm:my-3" type="button">ADD PERSONEL <span className="text-xl font-bold">+</span></button>
                </div>


            </div>
            <div className="personel-list-tab grid grid-cols-4 my-8 gap-4 sm:block">
                
                { personel.slice(pagesVisited, pagesVisited + personelPerPage).map((person, p) =>
                    <div className="personel-details px-3 py-2 bg-white rounded sm:my-5 " key={p}>
                        <h1 className="pb-2">Personel ID: <span className="text-custom-green">{person.id.name != null ? person.id.name : "-"}</span></h1>
                        <div className="flex flex-col sm:grid sm:grid-rows-3 sm:grid-flow-col">
                            <div className="pb-2 sm:row-span-4  sm:self-center sm:pb-0 sm:mx-4">
                                <img src={person.picture.large} alt="" className="rounded-full mx-auto" />
                            </div>
                            <div className="pb-2  sm:pb-1">
                                <h1 className="font-semibold">Name</h1>
                                <h1>{person.name.first + " " + person.name.last} </h1>
                            </div>
                            <div className="pb-2  sm:pb-1">
                                <h1 className="font-semibold">Telephone</h1>
                                <h1>{person.phone}</h1>
                            </div>
                            <div className="pb-2  sm:pb-1">
                                <h1 className="font-semibold">Birthday</h1>
                                <h1>{person.dob.date.slice(0, 10)}</h1>
                            </div>
                            <div className="pb-2  sm:pb-1">
                                <h1 className="font-semibold">Email</h1>
                                <h1 className="break-all">{person.email}</h1>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ReactPaginate
                previousLabel={" < Previous Page"}
                nextLabel={"Next Page >"}
                pageCount={pageCount}
                onPageChange={changePage}
                pageClassName={"pagination hidden"}
                containerClassName={"pagination-buttons flex"}
                previousClassName={"prev-buttons flex-auto text-right px-4 font-semibold"}
                previousLinkClassName={"hover:text-slate-700"}
                nextLinkClassName={"hover:text-slate-700"}
                nextClassName={"next-buttons flex-auto text-left px-4 font-semibold"}
                disabledLinkClassName={"pagination-disabled disabled hover:cursor-no-drop hover:text-slate-300 text-slate-300 font-normal"}

            />

        </div>

    );
}

export default PersonelList;