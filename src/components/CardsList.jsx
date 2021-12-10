import React, { useContext } from 'react'
import { SearchContext } from '../search.context'
import Card from './Card'

const CardsList = () => {
    const {links, categories} = useContext(SearchContext)
    console.log({links, categories});
    return (
        <div className="max-w-7xl m-auto flex px-5 flex-wrap gap-5">
            {
                categories?.map(category=>(
                    <Card item={links[category.name]} category={category}/>
                ))
            }
            
        </div>
    )
}

export default CardsList
