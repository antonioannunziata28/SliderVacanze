import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

let h5style = {
    color: "var(--primary-blue)",
}


const SingleHoliday = ({titolo,descrizione,durata,img,prezzo,next,prev}) => {
    return (
        <div className="holiday-container">
            <img src={img} alt={titolo} className="img" />
            <div className="holiday-info">
                <h4>{titolo}</h4>
                <p>{descrizione}</p>
                <div className="holiday-cost">
                    <small>{durata}</small>
                    <h5 style={h5style}>€{(prezzo /100).toFixed(2)}</h5>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-reset" onClick={prev}>
                        <GrFormPreviousLink className="icon" />{" "}
                    </button>
                    <button type="button" className="btn btn-reset" onClick={next}>
                        <GrFormNextLink className="icon" />{" "}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default SingleHoliday;