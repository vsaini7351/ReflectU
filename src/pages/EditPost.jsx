import React, {useState,useEffect} from 'react'
import AppwriteServices from '../appwrite/configuration'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { PostForm,Container } from '../components'

const EditPost = () => {
    const [Post,setPost]=useState(null);
    const {slug} =useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        if(slug){
            AppwriteServices.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                    //yaha agar na chale to post kar dena kahli
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug])

  return Post? (
    <div className='py-8'>
        <Container>
            <PostForm post={Post}/>
        </Container>
    </div>
  ): null
}

export default EditPost