import React from 'react';
import  ReactDOM   from 'react-dom/client';
import './index.css';


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

const App = () => {
    return (
        <div className='container'>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

const Header = () => {
    // const style = {color : 'red',fontSize : '3rem',textTransform : 'uppercase'}
        return(
            <header className='header'>
                <h1>Pizza 🍕 House</h1>
            </header>
            
        )
}

const Menu = () => {

    const data = pizzaData;
    const dataLength = data.length;
        return (
            <main className='menu'>
                <h1>Menu</h1>
                {(dataLength > 0) ? 
                <>
                <p>Authentic Italian cuisine,6 creative dishes to choose from . All from our stone     oven, all organice , all delicious.</p>
                <ul className='pizzas'>
                    {pizzaData.map((pizza) => (
                        <Pizza pizzaObj={pizza} />
                    ))}
                </ul>
                </>:
                (<p>Working On Menu , Comback Later Please.....</p>)
                }


                {/* <Pizza name={"Funghi Pizza"} photoName='pizzas/funghi.jpg' title={"Veg Pizza"} ingredients={"Tomato, mozarella, and pepperoni"} price={150}/>

                <Pizza name={"Pizza Prosciutto"} photoName='pizzas/prosciutto.jpg' title={"Pizza Prosciutto"} ingredients={"Tomato, mozarella, ham, aragula, and burrata cheese"} price={200}/> */}
            </main>
        )
}

const Pizza = ({pizzaObj}) => {
    return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <li>
            <h3>{pizzaObj.title}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? 'SOLD OUT': pizzaObj.price}</span>
        </li>
    </div>
    )
}

const Footer = () => {
        const isTime = new Date().getHours();
        const open = 9;
        const close = 22;
        const isOpen = isTime >= open && isTime <= close;
        console.log(isOpen); 

    return (
        <footer className='footer'>
            <div className='order'>
                {isOpen ? <Order close={close}/>: <p>Please come Back Later</p>}
                <button className='btn'>Order</button>
            </div>
            
        </footer>
    )
}

const Order = ({close}) => {
    return(
        <div>
            <p>W're Open Until {close}:00 . Visit Our Resturant or Order Online</p>
        </div>

    )
}



// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App/></React.StrictMode>);