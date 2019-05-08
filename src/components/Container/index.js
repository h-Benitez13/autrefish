import React from "react";

var coverImg = {
    backgroundImage: 'url("Assets/Landing/koi.gif")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "1100px"
}

export const Container = ({children}) => {
    return(
        
        <div className="uk-background-cover uk-panel uk-flex uk-height-large uk-position-relative" style={coverImg} >
            {children}
        </div>
        
    )
}