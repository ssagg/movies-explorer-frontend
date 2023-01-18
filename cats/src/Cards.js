import './cards.css'
import {useEffect} from "react";
import logo from "./images/Photo.png"
function Cards(props) {
    // useEffect(()=>{
    //
    // })
function handleClick(){
    props.onCardClick()
}
return(

     <div className='card'  onClick={handleClick}>
         <ul className='card__text'>
             <li className='card__title'>Сказочное заморское яство

             </li>
             <li className='card__subtitle'>Нямушка</li>
             <li className='card__taste'>с курой</li>
             <li className='card__korm'>100 порций
                 5 мышей в подарок
                 заказчик доволен</li>
         </ul>


         <img className='card__image' src={logo}/>
         <div className='card__circle'></div>
     </div>


)
}
export default Cards;