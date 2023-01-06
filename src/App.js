import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, changeTitle] = useState(['강남 카페 추천', '성수 전시회 추천', '노원 디저트 추천']);
  let [heart, changeHeart] = useState(0)
  let posts = '공릉 맛집';
  function setTitle(){
    var newList = [...title]
    newList[0] = '여의도 식당 추천'
    changeTitle( newList );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>React Blog</div>
      </div>
      <div className ='list'>
        <h4 className ='title'>{title[0]}<span onClick={() => {changeHeart(heart + 1)}}> ❤ </span>{heart} </h4>
        <p className = 'content'>작성자: 송미란</p>
        <hr/>
        <h4 className = 'title'>{title[1]}</h4>
        <p className = 'content'>작성자: 손두리</p>
        <hr/>
        <h4 className = 'title'>{title[2]}</h4>
        <p className = 'content'>작성자: 세비어</p>
        <hr/>
        <button onClick ={setTitle}>제목 변경</button>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return (
    <div className = 'modal'>
        <h2>Main Title</h2>
        <p>today</p>
        <p>detail</p>
      </div>
  )
}


export default App;
