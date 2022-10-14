import React from 'react'


const firstBook = {
  title: 'Dietro le quinte della storia. La vita quotidiana attraverso il tempo',
  imageSrc: "https://m.media-amazon.com/images/I/81jmLF0rPjL._AC_UL320_.jpg",
  author: 'Piero Angela e Alessandro Barbero',
  price: '11.40$'

}

const Book = ({book, children}) => {
  const {imageSrc, title, author, price} = book;
  return (
    
    <article className='book'>
      <img src={imageSrc} alt='book'/>
      <h4>{title}</h4>
      <h6>{author}</h6>
      <p>{price}</p>
      {children}
    </article>
  )
}

const BookList = () => {
  return (
  <>
    <Book book={firstBook}><h1>Primo libro</h1></Book>
    <Book book={firstBook}><h1>Secondo libro</h1></Book>
  </>
  )
}

const app = () => {
  return (
   <BookList/>
  )
}

export default app
