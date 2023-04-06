import { useState, useEffect } from "react";

const url ="https://jsonplaceholder.typicode.com/users";
const url2 ="https://jsonplaceholder.typicode.com/posts";
const url3 ="https://jsonplaceholder.typicode.com/comments";

function ShowData2(){
    const[userdata, setUserData]= useState({});
        useEffect(()=>{
            const urls=['url','url2','url3'];
            FileList.forEach(filename=>{
                fetch(`/${filename}.json()`).then(response=>{
                    return response.json()
                }).then(data=>{
                    setUserData(files=>[...files, {[filename]:data}])
                })
            })
        },[]);
        

        return(
            <div className="App">
                <h1 className="App-header">
                    
                </h1>
                <div className="user-container">
                    <h5 className="info-item">{userdata.username}</h5>
                    
                    
                </div>
            </div>
            
        )
}


export default ShowData2;
