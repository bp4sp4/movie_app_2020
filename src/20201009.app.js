/* 20201009 수업한내용
import React from 'react';
import ProTypes from 'prop-types';
// 이미지 처리
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';

function Food({ name, image, altText, rating }){
    return (
        <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src ={image} alt= {altText} />
    </div>
    );
}
const foodILink = [
    {
        id : 1,
        name: '돈까스',
        image : imgA,
        altText : '돈까스를 먹는 모습',
        rating: 5
    },
    {
        id : 2,
        name: '족발',
        image : imgB,
        altText : '햄버거를 먹는 모습',
        rating: 5
    },
    {
        id : 3,
        name: '쌀국수',
        image : imgC,
        altText : '쌀국수를 먹는 모습',
        rating: 5
    },
    {
        id : 4,
        name: '감자튀김',
        image : imgD,
        altText : '감자튀김을 먹는 모습',
        rating : 5
    },
    {
        id : 5,
        name: '튀김',
        image : imgE,
        altText : '튀김을 먹는 모습',
        rating: 5
    }
    ];

function App() {
return(
<div>
    {foodILink.map(dish => (
        <Food  key = {dish.id}  name={dish.name} image={dish.image} altText={dish.altText} rating={dish.rating}  />
            ))}
</div>
    );
}

Food.proTypes = {
    name : ProTypes.string.isRequired,
    image : ProTypes.string.isRequired,
    altText : ProTypes.strinng.isRequired,
    rating : ProTypes.number.isRequired
}

export default App;
*/
