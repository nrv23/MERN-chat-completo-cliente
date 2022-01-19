import React from 'react'
import './Friend.scss';

export const Friend = ({data}) => {
    return (
        <div>
            <p>{data.Users[0].firstName } {data.Users[0].lastName }</p>
        </div>
    )
}
