import {signIn} from "next-auth/client"
import Head from "next/head";


function Login() {

    
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      

<div className="grid place-items-center p-10">
    <img src="https://links.papareact.com/5me" height={300} width={300} layout="fixed"
    objectFit="contain" />

    <h1
    onClick={signIn}
    className="bg-blue-500 p-4 text-white rounded-full shadow-2xl mt-6 cursor-pointer hover:bg-blue-400">Get Started with Facebook</h1>
</div>

    </div>
  );
}

export default Login;
