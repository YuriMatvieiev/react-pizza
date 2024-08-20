import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Header from "./components/Heder";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./Components/Sort";
import "./scss/app.scss";

function App() {
  let [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://66c33742d057009ee9bf756a.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {items.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
