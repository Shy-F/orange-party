import { Link } from 'react-router-dom'
import './index.scss'
import orangeStamp from '../../assets/images/orange-stamp.jpg'
import orangeSeal from '../../assets/images/orange-seal.PNG'
import fallingOrange from '../../assets/images/falling-orange.png'

const Home = () => {
    return (
        <>
        <div className='falling-orange1'>
            <img src={fallingOrange} alt='orange' />
        </div>
        <div className='falling-orange2'>
            <img src={fallingOrange} alt='orange' />
        </div>
        <div className='falling-orange3'>
            <img src={fallingOrange} alt='orange' />
        </div>
        <div className='falling-orange4'>
            <img src={fallingOrange} alt='orange' />
        </div>
        <div className='falling-orange5'>
            <img src={fallingOrange} alt='orange' />
        </div>
        <div className='title'>
            <h1> Orange You Curious?</h1>
        </div>
        <div className='envelope'>
            <div className='envelope-front'>
                <div className='from'>
                    <p> The Simpson Family</p>
                    <p> 5714 W Fountain Cir Dr</p>
                    <p> Mason, Ohio 45040</p>
                </div>
                <div className='stamp'>
                    <img src={orangeStamp} style={{ width: '100%'}} alt='stamp' />
                    <p>stamp</p>
                </div>
                <div className='to'>
                    <p> Friends and Family</p>
                </div>
            </div>
            <div className='envelope-back'>
                <div className='opener'></div>
                <div className='seal'>
                    <Link to='/invite' >
                        < img src={orangeSeal} style={{ width: '100%'}} alt='seal' />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home