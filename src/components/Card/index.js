import './styles.scss'
import dice from '../../assets/icon-dice.svg'
import { useEffect, useState } from 'react';



export function Card(){
    const [advice, setAdvice] = useState({id:0, advice: ""});

    
    useEffect(() => {
       handleClick()
    },[])

   async function handleClick(){
        await fetch('https://api.adviceslip.com/advice')
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            throw response
        }).then(data =>{
            setAdvice(data.slip)
        })
        .catch(error =>{
            console.error("Error: ", error)
        })

    }

    return (
    <>
        <main>
            <div>
                <h1 className='title'>
                    ADVICE #{advice.id}
                </h1>

                <blockquote className='advice'>
                    "{advice.advice}"
                </blockquote>

                <div className='divider'></div>

                <button onClick={handleClick}>
                    <img  src={dice} alt='Another' />
                </button>
            </div>
        </main>
    </>
      );
}