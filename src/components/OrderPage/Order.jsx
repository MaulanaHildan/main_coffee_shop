import React, { useState } from 'react';

import HeroPng from "../../assets/coffee2.png";
import menupng from "../../assets/menu.jpg";

const OrderPage = () => {
    const [teaValue, setTeaValue] = useState(0);
    const [coffeeVal, setCoffeVal] = useState(0);
    const [nomor, setNomor] = useState(null)
    const [selectedItems, setSelectedItems] = useState([]);
  
    const handleAdd = (input) => {
      if (input === 1) {
        setTeaValue((prevTeaValue) => prevTeaValue + 1);
      } else if (input === 2) {
        setCoffeVal((prevCoffeeVal) => prevCoffeeVal + 1);
      }
    };
  
    const handleMinus = (input) => {
      if (input === 1) {
        if (teaValue > 0) {
          setTeaValue((prevTeaValue) => prevTeaValue - 1);
        }
      } else if (input === 2) {
        if (coffeeVal > 0) {
          setCoffeVal((prevCoffeeVal) => prevCoffeeVal - 1);
        }
      }
    };
  
    const removeItemFromOrder = (index) => {
      const updatedItems = [...selectedItems];
      updatedItems.splice(index, 1);
      setSelectedItems(updatedItems);
    };
  
    const submitOrder = async () => {
        const formdata = new FormData();
        if (!nomor) return;
      
        formdata.append("number", nomor);
      
        let HCO = `===========================\n                      INVOICE\n===========================\n\nDetail Pesanan:\n`;
        let TL = `Total Pembayaran: ${teaValue * 12000 + coffeeVal * 15000}\n\nTerima kasih atas pembeliannya!`;
        let CF = coffeeVal > 0 ? `1. Kopi: ${coffeeVal} x\n15.0000+= ${coffeeVal * 15000}\n` : '';
        let TF = teaValue > 0 ? `1. Teh: ${teaValue}+x+12.0000 = ${teaValue * 12000}\n\n` : '';
      
        if (coffeeVal > 0 && teaValue > 0) {
          TF = `2.+Teh: ${teaValue} x 12.0000 = ${teaValue * 12000}\n\n`;
        }
      
        let pesan = HCO + CF + TF + TL;
        formdata.append("message", pesan);
      
        try {
          const response = await fetch("https://gateway.7togksmp.com/whatsapp/message/private", {
            method: "POST",
            body: formdata,
          });
      
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
      
          const result = await response.text();
          console.log(result);
          
          
        } catch (error) {
          console.error("Error submitting order:", error);
        }
        window.location.href= "/thanks";
      };
      
      

    
  
    return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-* items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Order Page
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Menu
              </h1>
              <img class="object-cover" src={menupng} />
              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="p-8 rounded-t-lg" src={HeroPng} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">KOPI</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp 15.000</span>
                    </div>
                    <div className='grid grid-cols-3 gap-5 border border-gray-200 rounded-lg mt-4'>
                    <button onClick={() => handleMinus(2)}>-</button>
                    <h4 >{coffeeVal}</h4>
                    <button onClick={() => handleAdd(2)}>+</button>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="p-8 rounded-t-lg" src={HeroPng} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">TEA</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp 12.000</span>
                    </div>
                    <div className='grid grid-cols-3 gap-5 border border-gray-200 rounded-lg mt-4'>
                    <button onClick={() => handleMinus(1)}>-</button>
                    <h4 >{teaValue}</h4>
                    <button onClick={() => handleAdd(1)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1><b>TOTAL</b></h1>
                  <li>
                    Rp. {coffeeVal * 15000 + teaValue * 12000} 

                  </li>
                  
                  <input type='number' className="placeholder-shown:border-gray-500 ..." placeholder="nomor whatsapp" value={nomor} onChange={(e) => setNomor(e.target.value)}/>
                <button className='bg-amber-900 hover:bg-amber-950 text-white font-bold py-2 px-4 rounded-full' onClick={submitOrder}><h1><b>Submit Order</b></h1></button>
              </div>
            </div>
            
          </div>
        </div>
        </div>
      </section>
    );
  
};

export default OrderPage;
