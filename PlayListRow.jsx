import React, { useContext, useEffect, useState } from 'react'
import './playlist.css'
import { songContext } from './YoutubeContent'

const PlayListRow = ({ listItems, id }) => {
    const{subscriptions, handleActivate}=useContext(songContext)
    
    return (
        <>
            <div className='list2'> 
            <tr>
                <td>{listItems.id}</td>
                <td>{listItems.genre}</td>
                <td>
                {
                    subscriptions[id]?
                    <button id={id} onClick={(e)=>{handleActivate(e)}} style={{backgroundColor:'beige'}}>Unsubscribe</button> 
                    :
                    <button id={id} onClick={(e)=>{handleActivate(e)}} style={{backgroundColor:'lightgreen'}}>Subscribe</button>
                }
                </td>
                </tr>
                </div>
        </>
    )
}

export default PlayListRow