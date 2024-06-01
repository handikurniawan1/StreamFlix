import React from "react";

function Header({saldo}){

    return(
        <header>
            <h1>Stream flix</h1>
            <h3>Balance Rp.{saldo.toLocaleString('id-ID')}</h3>
        </header>
    )
}

export default Header;