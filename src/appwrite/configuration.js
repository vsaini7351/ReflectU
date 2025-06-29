//database wager ki sari chize yaha karenge

import config from "../../config/config";
import { Client, Databases,Storage, ID } from "appwrite";
import { Query } from "appwrite";

export class Services{
client=new Client();
databases;
bucket; //storage bhi khe sakte ho ise

constructor(){
    this.client
    .setEndpoint(config.appWriteUrl)
    .setProject(config.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket=new Storage(this.client);

    

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug,{title,content,featuredImage,status,userId}) // yaha hum slug ko document ka id maan rhe hai
        }
        catch(error){
            console.log("Appwrite Serive:: createPost:: error: ",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug,{title,content,featuredImage,status})
        }
        catch(error){
            console.log("Appwrite services :: update:: error: ",error);
        }
    }

    async deletePost(slug){
        try{
            // const post= await this.getPost(slug);
            // await this.deleteFile(post.featuredImage)
            await this.databases.deleteDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug);
            return true;
        }
        catch(error){
            console.log("Appwrite Services:: delete :: error: ",error);
            return false;
        }

    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug);
        }
        catch(error){
            console.log("Appwrite Services:: getPost:: error: ",error);
            return false;
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(config.appWriteDatabaseId,config.appWriteCollectionId,queries);
            // ye jo return karega usme .document karenge tab jake sare posts ka array milega
        }
        catch(error){
            console.log("Appwrite Services:: getPosts:: error: ",error);
            return false;
        }
    }


    //file upload services

    async uploadFile(file){
        try{
            return await this.bucket.createFile(config.appWriteBucketId,ID.unique(),file);
            //ye return me file ki id hi dega upload ke baad
        }
        catch(error){
            console.log("Appwrite Services:: uploadFile:: error: ",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(config.appWriteBucketId,fileId);
            return true;
        }
        catch(error){
            console.log("Appwrite Services:: deleteFile:: error: ",error);
            return false;
        }
    }

    getFilePreview(fileId){
            const image= this.bucket.getFilePreview(config.appWriteBucketId,fileId);
            console.log(image);
            return image;
    } // isme async lagane ki jarurat nhi as bhut fast operation hai // give a url of preview
}


const services=new Services();

export default services;