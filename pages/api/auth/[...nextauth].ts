import NextAuth, { NextAuthOptions, Session } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import IdentityServer4Provider from "next-auth/providers/identity-server4";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Name" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {

          // Add logic here to look up the user from the credentials supplied
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          }
          
          return null
        }
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
      // IdentityServer4Provider({
      //   id: "identity-server4",
      //   name: "IdentityServer4",
      //   authorization: { params: { scope: "email roles openid profile MS-PORT-SIMP" } },
      //   issuer:  process.env.IdentityServer4_Issuer,
      //   clientId: process.env.IdentityServer4_CLIENT_ID,
      //   clientSecret:process.env.IdentityServer4_CLIENT_SECRET
      // })
      // ...add more providers here
    ],
    //custom pages
    pages:{
      signIn:'/auth/login'
    },
    session:{
      maxAge: 120,
      strategy:"jwt",
      updateAge:900
    },

    callbacks:{

      async jwt({ token, account, user }){

        console.log({ token_exp: new Date( token.exp * 1000) });
        
        if (account){
          token.accessToken = account.access_token;

          switch ( account.type ){
            case 'oauth':
              //TODO: crear usuario y verificar si existe

              break;

            case 'credentials':
              token.user = user;
          }

        }


        return token
      },

      async session( { session, token, user } ){

        

        session.accessToken = token.accessToken;
        session.user = token.user as any;

        return session;

      }
    }
}

export default NextAuth(authOptions);

