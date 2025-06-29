import React from 'react'
import appwriteServices from '../appwrite/configuration'
import {Link} from 'react-router-dom'

const PostCard = ({$id,title,featuredImage}) => {
    //appwrite me id ko $id likha jata hai

  return (
 <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={`${appwriteServices.getFilePreview(featuredImage)}&mode=admin`}alt={title} className='rounded-xl' />
        </div>

         <h2
            className='text-xl font-bold'
            >{title}</h2>
    </div>
 </Link>
)
}

export default PostCard