import React from 'react'

export default function inputList({data}){

    return (
        data.map((el,i)=>(
            <option key={i} value={el.id}>{el.descripcion}</option>
        ))
    )

}
