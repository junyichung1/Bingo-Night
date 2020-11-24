import React from "react";
import bingoBoard from '../../images/Bingo-Board.png';
import './BoardPage.css'

function BingoBoard(props) {
    return(
        <div>
            <img className="bingoboard" src={bingoBoard}></img>
        </div>
    )
}
export default BingoBoard;