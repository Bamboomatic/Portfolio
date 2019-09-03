import React, {Component} from 'react';

export default props => {
    console.log(props.match.params)
    const links = props.match.params.links;

    return (
        <>
            <h1>strona {links}</h1>

        </>
    )
}