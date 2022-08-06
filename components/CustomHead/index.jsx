import {useEffect, useState} from "react";
import Head from 'next/head';

const CustomHead = ({title,index,follow, metaType, metaImage, metaImageAlt, metaUrl}) => {
    const [robot,setRobot] = useState('');
    const description = `Full Stack MERN & Salesforce Administrator. Armo cosas que la gente pueda usar <3. Bienvenidos, un gusto conocerlos.`;
    const image = metaImage || '/images/wellcome/night.png';
    const imageAlt = metaImageAlt || 'Brian Durand Website';
    const facebookType = metaType || `website`;
    const urlContent = metaUrl || `https://www.durandbrian.com/`;
    const author = `@alfacoy`

    useEffect(()=>{
        if(index){
            follow ? setRobot('index,follow') : setRobot('index,nofollow');
        }else{
            follow ? setRobot('noindex,follow') : setRobot('noindex,nofollow');
        }

    },[])

    return(
        <Head>
            <title>{title}</title>
            <meta name="author" content={author} />
            <meta name="copyright" content="Brian Ezequiel Durand" />
            <meta name="description" content={description} />
            <meta name="robots" content={robot}/>
            <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/*TWITTER*/}
            <meta name="twitter:card" content="summary" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta name="twitter:creator" content={author} />
            <meta property="twitter:image" content={image} />
            <meta property="twitter:image:alt" content={imageAlt} />

            {/*FACEBOOK*/}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={facebookType} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={urlContent} />
        </Head>
    )
}

export default CustomHead;