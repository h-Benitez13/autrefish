import React from "react";



export const Container = ({children}) => {
    return(
        
        <div className="uk-background-cover uk-panel uk-flex uk-height-large uk-position-relative"  >
            {children}
        </div>
        
    )
}