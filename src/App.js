import React from 'react'
import logo from './logo.svg';
import './App.css';
import Article from './Article'

import photo1 from './desktop.jpg'
import photo2 from './book.jpg'
import photo3 from './lap.jpg'


const articles = [
  {
    title:"If I Were You",
    content:"Mistakes is the proof that you are trying",
    image: photo1
  },
  {
    title:"Think positively ",
    content:"Actions speak louder than words",
    image: photo2
  },
  {
    title:"Everything is possible",
    content:"Do not go back!",
    image: photo3
  }
]
  

function App() {
  return (
    <div className="App">
      {articles.map(article => (
        <Article
          title={article.title}
          content= {article.content}
          image= {article.image} />
        
      ))}

      

    </div>
  );
}

export default App;
