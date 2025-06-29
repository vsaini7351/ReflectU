import React from 'react'
import { useState,useEffect } from 'react'
import AppwriteServices from '../appwrite/configuration'
import { Container,PostCard } from '../components'

const AllPosts = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        AppwriteServices.getPosts([])
        .then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })
    },[])
    if(posts.length==0) return (<p className="text-center w-full text-black text-lg">No new posts are added</p>)
  return (
    <div className='w-full py-8 '>
        <Container>
            <div className='flex flex-wrap'>

                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>

    </div>
  )
}

export default AllPosts