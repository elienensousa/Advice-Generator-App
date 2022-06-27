import './styles.scss'
import dice from '../../assets/icon-dice.svg'

export function Card(){
    return (
    <>
        <main>
            <div>
                <p className='title'>
                    ADVICE #201
                </p>

                <p className='advice'>
                    "Don't burn bridges"
                </p>

                <div       className='divider'></div>

                <button>
                    <img  src={dice} alt='Another' />
                </button>
            </div>
        </main>
    </>
      );
}