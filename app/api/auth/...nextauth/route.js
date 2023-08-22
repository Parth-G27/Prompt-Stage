import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'


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

    }
})

export {handler as GET, handler as POST};