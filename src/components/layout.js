import React from "react"

export default ({children}) => (
    <div>
        <header><h1>Our site title</h1></header>
        <main>{children}</main>
        <footer><p>A cute footer</p></footer>
    </div>
)