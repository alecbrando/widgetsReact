import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Convert({language, text}) {
    const [translate, setTranslate] = useState('')
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500)

        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async() => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: debouncedText,
                target: language.value,
                key: '',
            }
            })
            setTranslate(data.data.translations[0].translatedText)
        }
        doTranslation();
    }, [language, debouncedText])
    return (
        <div>
            <h1 className="ui header">{translate}</h1>
        </div>
    )
}
