import React from 'react'
import Card from './Card'

const CardsList = () => {
    return (
        <div className="max-w-7xl m-auto flex px-5 flex-wrap gap-5">
            {
                [1,2,3,4,5,6,7,8,9,10].map(item=>(
                    <Card item={item} />
                ))
            }
            
        </div>
    )
}

export default CardsList
