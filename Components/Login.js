import {signIn} from "next-auth/client"
import Head from "next/head";


function Login() {

    
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      

<div className="container">
    <img src="https://links.papareact.com/5me" height={300} width={300} layout="fixed"
    objectFit="contain" />

    <h1
    onClick={signIn}
    className="button">Get Started with Facebook</h1>
</div>

    </div>
  );
}

export default Login;
