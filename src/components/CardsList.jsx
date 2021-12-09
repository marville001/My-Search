import React, { useContext } from 'react'
import { SearchContext } from '../search.context'
import Card from './Card'

const CardsList = () => {
    const {links, categories} = useContext(SearchContext)
    console.log({links, categories});
    return (
        <div className="max-w-7xl m-auto flex px-5 flex-wrap gap-5">
            {
                [...categories, 1,2,3,5,7,6,7,7,88,89].map(category=>(
                    <Card item={links[category]} />
                ))
            }
            
        </div>
    )
}

export default CardsList
