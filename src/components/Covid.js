import React, { useState } from 'react'
import { useEffect } from "react";
import './covid.css';
import Cards from './Cards.js';

const Covid = () => {
  var res = new Date().toLocaleDateString();
  const [data, setData] = useState([])
  const [time, setTime] = useState(res);
  setInterval(() => {
    var red = new Date().toLocaleTimeString();
    setTime(red);
  }, 500);
  const getCoviddata = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const ac_data = await res.json();
      console.log(ac_data);
      setData(ac_data.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCoviddata()
  }, [])
  return (
    <> 
      <h1>🔴 LIVE TRACKER</h1>
      <h2>live covid data</h2>
      <br/>
      <h2>{time}</h2>
      <div className  = "car">
      <Cards head = "OUR COUNTRY" dat = {data.confirmed}  />
      <Cards head = "TOTAL RECOVERED" dat = {data.recovered}  />
      <Cards head = "TOTAL DEATH" dat = {data.deaths}  />
      <Cards head = "TOTAL ACTIVE CASES" dat = {data.active}  />
      <Cards head = "LAST UPDATED" dat = {data.lastupdatedtime}  />
      <Cards head = "DELTA CONFIRMED" dat = {data.deltaconfirmed}  />
      <Cards head = "DELTA DEATH" dat = {data.deltadeaths}  />
      <Cards head = "DELTA RECOVERED" dat = {data.deltarecovered}  />
      </div>
    </>
  )
}

export default Covid
