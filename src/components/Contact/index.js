import React from "react";

const contactImg = {
    backgroundImage: 'url("Assets/Contact/scuba.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'initial',
    backgroundPosition: 'bottom right',
    height: "1050px",
    backgroundColor: 'rgb(107,146,174)'
}

export const Container = ({ children }) => {
    return (
        <div className="uk-background-container uk-panel uk-flex uk-height-small uk-position-relative" style={contactImg}>
            {children}
        </div>
    )
}


export const Input = ({ children }) => {
    return (
        <div className="uk-container uk-container-large uk-position-medium uk-position-center">
            <form className="uk-form-horizontal uk-grid-large" uk-grid>
                    {children}
            </form>
        </div>
    )


}