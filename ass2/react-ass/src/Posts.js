import React, { useEffect, useState } from "react";
import Axios from "axios";


const Posts = () => {
    const [ post , setPost ] =useState({});
 
    useEffect(() => {
        
            const fetchPosts = async () => {
                await Axios.get(`http://localhost:1100/`)
                .then(({data : foundPosts}) => {
                    console.info("All hotels were found.");
                     console.info(foundPosts);
                    setPost(foundPosts);
                })
                .catch((error) => {
                    console.error("some error occured", error);
                });     
            }     
            fetchPosts();
     }); 
    
    const renderCards = post.map((post) => {
        return (
            <div className={"cards"}>
                <div className={"content"}>
                  <div className={"header"}>{post.title}</div>
                     <div className={"meta"}>{post.userId}</div>
                     <div className={"meta"}>{post.id}</div>
                     <div className={"description"}>{post.body}</div>
                 </div>
            </div>
        )
    });

    return (
        <div>
            {renderCards};
        </div>
    )
}

    export default Posts;
