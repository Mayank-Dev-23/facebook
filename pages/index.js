import Head from "next/head";
import Header from "../Components/Header";
import { getSession } from "next-auth/client";
import Login from "../Components/Login";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Contact from "../Components/Contact";
import { db } from "../firebase";

export default function Home({ session,posts }) {

  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-x-hidden">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>

      {/* HEADER  */}
      <Header />

      {/* MAIN */}
      <main className="flex " >
        <Sidebar />
        <Feed  posts={posts}/>
        <Contact />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // pre fetching of the posts
  const posts =await  db.collection("posts").orderBy("timestamp" ,"desc").get();
const docs =posts.docs.map(post =>({ 
  id:post.id,
  ...post.data(),
  timestamp:null
}))

  return {
    props: {
      session,
      posts:docs,
    },
  };
}
