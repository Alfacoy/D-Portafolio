import  Script from 'next/script';
import Container from "../components/Container";
import '../styles/globals.css'

function MyApp({ Component, pageProps}) {
  return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-HG9L20SGD6`} />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html:`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-HG9L20SGD6', {
                    page_path: window.location.pathname,
                });
            `}}/>
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
  )
}

export default MyApp
