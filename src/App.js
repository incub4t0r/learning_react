import './App.css';
import { useState } from 'react';

function MyButton(props) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>{props.name} {count}</button>
  )
}

const user = {
  name: "John Doe",
  imageUrl: "https://images.unsplash.com/photo-1666762255083-cfbd9d261e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  imageSize: 90,
  urlLink: "https://images.unsplash.com/",
}

const products = [
  { title: "Cat Bed", id: 1 },
  { title: "Dog Bed", id: 2 },
  { title: "Bird Bed", id: 3 },
  { title: "Fish Bed", id: 4 },
  { title: "Rabbit Bed", id: 5 },
];

export default function Profile() {
  const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>
  );
  return (
    <div className="App">
      <div className="App-header">

        <img src={user.imageUrl} className="avatar" />
        <h1>{user.name}</h1>
        <MyButton name="left counter"/>
        <MyButton name="right counter"/>
        
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}