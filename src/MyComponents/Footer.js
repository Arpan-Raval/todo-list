import React from 'react'
export const Footer = () => {
  let footerStyle = {
    marginTop: "40px",
    top:"95vh",
    width:"100%"
  }
  return (
    <footer className='bg-dark text-light py-3'style={footerStyle}>
      <p className="text-center">
      &copy; My website / To-Do-List 
      </p>
    </footer>
  )
}
