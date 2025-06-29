import config from "../../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    //hum ye chahte hai ji jab object bane tab client ki  .setEndpoint ,.setProject lage hum faltu me phele kyo lagaye isliye yaha par account sirf banakar chod diya define ni kiya kyoki wo karne se phele client par ye methods bhi to lagane padenge

    constructor() {
            this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);  
            
            this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){

        try{
            const userAccount= await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login({email,password});
                //call another method to deal when user account ki crated
            }
            else {return userAccount;}

        }
        catch(error){
            throw error;
        }



    }

    //promises ke sath deal karna hai isliye async liya ye apprwrite par depend nhi rahega hum is function ko hi call karenge chize karne ke liye ese me appwrite se agar shift hona hua to bs is original jagha kuch changes karne hai baki khi nhi
    //This can also fail isliye try catch me lenge

    async login({email,password}){
        try{
        return await this.account.createEmailPasswordSession(email,password);}
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get(); //userData return karega
        }
        catch(error){
            console.log("GetCurrentUser Error: ",error);
        }

        return null; // maan lo agar upar se kuch bhi return nhi ho pata to null to return ho hi jayega
    }

    async logOut(){
        try{
            return await this.account.deleteSessions(); // yaha deleteSessions hai to sare sessions delete kar dega ek sirf deleteSession hota hai jo sirf current session delete karta hai

        }
        catch(error){
            console.log("LogOut error: ",error);
        }
    }
}

//ye sare jitne bhi funcitons hai ye sare promises hai

const authService=new AuthService()

export default authService