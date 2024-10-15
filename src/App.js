import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import data from './(TC3)Chatbot - stock data.json';

function App() {
  console.log(data);
  const [chatData, setChatData] = useState(data);
  const [mainMenu, setMainMenu] = useState(true);
  const [stockMenu, setstockMenu] = useState(false);
  const [priceMenu, setPriceMenu] = useState(false);
  const [selectedStockExchange, setSelectedStockExchange] = useState([]);
  const [selectedStockName, setSelectedStockName] = useState([]);
  const handleStockexchange = (e, item) => {
    console.log(item);
    setMainMenu(false)
    setstockMenu(true)
    setSelectedStockExchange(item)
  }
  const handleStock = ( item) => {
    console.log(item);
    setSelectedStockName(item);
    setMainMenu(false)
    setstockMenu(false)
    setPriceMenu(true)
  }
  return (
    <div className="App">
     
      <div id="accordion">

        <div class='container'>
        <h1 class="text-left card-header">Hello welcome to LSEG. i'm here to help you</h1>
          {
            mainMenu &&
            <div class="card mt-4">
              <div class="card-header">Please select stock exchange</div>
              {
                chatData.map((item) => {
                  return (

                    <div class="card-body" onClick={(e) => { handleStockexchange(e, item) }}> {item.stockExchange}</div>
                  )
                })
              }

            </div>
          }

          {
            stockMenu &&
            <div class="card mt-4">
              <div class="card-header">Please select stock</div>
              {

                <div class="card-body" >
                  {selectedStockExchange.topStocks?.map((result) => {
                    return (
                      <div onClick={()=>{handleStock(result)}}>{result.stockName}</div>
                    )
                  })}
                </div>

              }
              <div class="card-footer" onClick={() => { setMainMenu(true); setstockMenu(false) }}>Go to Main Menu</div>
            </div>
          }
 {
            priceMenu &&
            <div class="card mt-4">
             
              <div class="card-header">Stock Price of {selectedStockName.stockName} is {selectedStockName.price}

              </div>
           
              <div class="card-footer">
                Please select an option.
                <div  onClick={() => { setMainMenu(true); setstockMenu(false);setPriceMenu(false) }}>Go to Main Menu</div>
                <div  onClick={() => { setMainMenu(false); setstockMenu(true);setPriceMenu(false) }}>Go Back</div>
                
                </div>
            </div>
          }

        </div>

      </div>
    </div>
  );
}

export default App;
