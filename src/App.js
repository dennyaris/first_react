import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItem from './Review';

function App() {

  return (
    <div className="Parentbox">
      <h1 className="judul">Nama produk terlaris</h1>
      <ProdukInfo isDiskon="1" namaProduk="emas" harga="25000000" />

      <ReviewItem />
    </div>
  );
}

function CekDiskon(prop) {
  const { isDiskon } = prop;

    if (isDiskon == "1") {
      return (
        <p>Diskon 50% off</p>
      );
    } else {
      return (
        <p>belom ada diskon</p>
      );
    }
}

function ProdukInfo(prop) {
  const { namaProduk,harga,isDiskon } = prop;
  const benefit = ["Barang keren","aman di simpan di bank","menguntungkan"];
  const listBenefit = benefit.map((item) => 
    <li key={item}>{item}</li>
  );
  return (
    <div className="deskripsi">
      <p>Nama Produk : {namaProduk} </p>
      <h4>harga : {harga}</h4>
      <CekDiskon isDiskon={isDiskon} />
      <p>Emas untuk investasi jangka panjang yang sangat menyenangkan</p>
      <ul>
        {listBenefit}
      </ul>
      <a onClick={(e)=>tambahCart(namaProduk, e)} href="#">add to cart</a>
    </div>
  );
}

function tambahCart(e) {
  return console.log("menambahkan barang "+e);
}

export default App;
