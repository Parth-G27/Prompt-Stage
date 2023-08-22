import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import {connectToDB} from '@utils/database';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        })
    ],
    async session({session}){

    },
    async signIN({profile}){
        try {
            await connectToDB();
            // Check if user exists, If not create new user
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})

export {handler as GET, handler as POST};