import React,{useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

const alanAPIKey = '960b2165ba50f1284b7b232de95c3a892e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    // const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanAPIKey,
            onCommand: ({ command }) => {
                if (command === 'testCommand')
                    console.log("hello from AI");
            }
        })
    }, []);
}

export default function Alan() {

    return (
        <div>

        </div>
    )
}
