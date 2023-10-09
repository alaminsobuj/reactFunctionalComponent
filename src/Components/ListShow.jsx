import React from 'react'

export default function ListShow() {

    const list =[
        'BMW','TOYOTA',"REDROSE",'COROLA']
const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
    ];
  return (
    <div>ListShow

        <ul>
            <h4>Array List</h4>
        {
          list.map((car,index) =>
          <li key={index}>{index  }-{car}</li>
         )
        }
        
        </ul>
        <ul>
            {cars.map((obj,index)=>
            <li key={obj.id}>{ 'Id ' + obj.id + '  Brand ' + obj.brand}</li>
            )}
        </ul>
    </div>
  )
}
