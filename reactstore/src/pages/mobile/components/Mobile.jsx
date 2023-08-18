import React from 'react'
import Filter from './Filter'
import { useState } from 'react';
import { MobileData } from '../../../components/Data/MobileData'

function Mobile() {
  
  const [mobileData,setMobileData]=useState([...MobileData]);
  
  return (
    mobileData.map((item,index)=>{
      return(
    
                  <div className="col">
                    <div className=" card rounded-0 border-white ">
                      <img src={item.imgUrl} />

                      <div className="card-body bg-white ">
                        <p className="card-header bg-white"><b>{item.name}</b></p>
                        <p> {item.color}</p>
                        <div className="d-grid gap-2 col-12 mx-auto">
                          <a href="phonemodel.html" ><button className="btn btn-dark rounded-0" type="button" >Buy</button></a>
                        </div>
                        <div className="d- justify-content-between align-items-center ">
                          <div className="btn-group">
                            
                          </div>
                          
                          <small className="text-decoration-line-through text-secondary">{item.rate}</small>
                          <small className="text-black text-primary">{item.rate}</small>
                        </div>
                      </div>
                    </div>
                  </div>   
    

    
    
      
      )
        
    }) 
)}


export default Mobile  
