import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Ogame's Mypage",
            credentials: {
                id: {label: "id", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials) {
                const user = {id: credentials?.id, password: credentials?.password};

                if(user.id === process.env.ADMIN_ID && user.password === process.env.ADMIN_PASSWORD){
                    return {id: "ogame"}
                }

                return null;
            },
        })
    ]
}
