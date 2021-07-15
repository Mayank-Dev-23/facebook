import 'tailwindcss/tailwind.css'
import {Provider} from "next-auth/client"
import "../public/header.css"
import "../public/sidebar.css"
import "../public/contact.css"
import "../public/feed.css"
import "../public/post.css"

function MyApp({ Component, pageProps }) {

  return (
  
    <Provider session={pageProps.session}>
  <Component {...pageProps} />
  </Provider>

  )
}

export default MyApp
