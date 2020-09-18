import React from 'react';

function Food({fav}){
    console.log(fav)
    return (
    <h1>I love {fav}</h1>
    );
}
const foodLink = [
    {
        name: '김치',
        image : 'URL'
    }
];

function App() {
return (
    <div>
    <h1>Hello</h1>  
    </div>
    );
}

export default App;