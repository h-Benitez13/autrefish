import React from "react";

const contactImg = {
    backgroundImage: 'url("Assets/Contact/ocean.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: "1100px"
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
        <div className="uk-container uk-container-small uk-position-medium uk-position-center">
            <form className="uk-grid-large" uk-grid>
                
                    {children}
                
            </form>
        </div>
    )


}