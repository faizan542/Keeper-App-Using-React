import React from 'react'

let date = new Date();
let getYear = date.getFullYear();
function Footer() {
    
  return (
    <div className='footer'>
        <p>Copyright &copy; {getYear}</p>
    </div>
  )
}

export default Footer
