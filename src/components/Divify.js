import React from 'react'
import tokenize from "./utils/tokenize"
import "./Divify.css"
const Divify = (props) => {
    let tokenizedText = tokenize(props.text)
    return (
        <div className="container">
            <h1 className="titleContainer">
                {tokenizedText.title.map((i) => {
                    return <div onClick={() => {
                        alert('you clicked ' + i)
                    }} className="titleElement" id={i}>{i}&nbsp;</div>
            })}
            </h1>
            <div className="bodyContainer">
                {tokenizedText.body.map((i) => {
                    return <div onClick={() => {
                        alert('you clicked ' + i)
                    }} className="titleElement" id={i}>{i}&nbsp;</div>
                })}
            </div>

        </div>
    )
}

export default Divify