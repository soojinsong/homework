import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styled from 'styled-components';

// 전체 칸
const TodoContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;

  font-family: Arial, sans-serif;
`;

// 입력창
const TodoInput = styled.div`
  display:flex;
  justify-content: center;
  padding: 10px;
  font-size:16px;
  margin-bottom: 10px;
`;

// 추가되는 내용들 칸
const TodoItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 5px;
`;

// 요소들 들어가는 칸
const TodoList = styled.div`
  margin-top: 20px;
`;

class eli {
  cnt;
  key;

  constructor(c, k) {
    this.cnt = c;
    this.key = k;
  }

  getC() {
    return this.cnt;
  }
  getK() {
    return this.key;
  }
  setC(cc) {
    this.cnt = cc;
  }
  setK(kk) {
    this.key = kk;
  }
}

function App() {
  const [n, setN] = useState(10000);
  // 입력된 내용이 들어간 리스트 변경
  const [todos, setTodos] = useState([]);
  // 입력창이 갱신
  const [inputValue, setInputValue] = useState('');

  function nPlus() {
    setN(n + 1);
    return n;
  }

  // 입력되는 글자 인식
  const inputing = (event) => {
    setInputValue(event.target.value);
  };

  // 리스트에 입력한 내용 추가
  const addItem = () => {
    let k = nPlus();
    
    const neww = new eli(inputValue, k); // 'const' 키워드를 사용하여 변수를 정의

    // 입력된 내용(inputValue)를 리스트 맨 뒤에 넣은 리스트를 set해줌.
    setTodos([...todos, neww]);
    console.log("추가] " + todos);
    // 입력창을 비움 (새로운 글을 입력받을 수 있게)
    setInputValue('');
  };

  // 받은 인자(키값)와 같은 키값의 아이템을 삭제
  const deleteItem = (event) => {
    const key = event.target.getAttribute('data-key'); // 클릭된 요소의 key 속성을 읽음
    //// event가 일어난 target의 data-key라는 속성의 값을 찾아서(getAttribute) = key에 넣음.
    console.log(key + "현재 찾는 키값");
    const updatedTodos = todos.filter((item) => item.key !== parseInt(key)); // 새로운 배열을 생성하여 삭제된 요소를 제외하고 저장
    //// 리스트.filter(x): 리스트의 요소를 순회적으로 조건 x에 부합하는 요소들만 모은 리스트를 리턴해줌.
    //// filter(함수). 함수가 들어감. 함수이름을 적든, 화살표 함수가 들어가든. 그 함수에서 리턴되는게 true인 것만 모아서 만드는 것.
    setTodos(updatedTodos); // 새로운 배열로 상태를 업데이트
    //// 배열을 조건에 맞는 것(이벤트 객체의 키값이 아닌 것)만으로 이루어진 배열로 업뎃. (=키값이 같은건 제외됨.)
    console.log("삭제] "+todos);
  };

  return (
    <>
      <TodoContainer>
        <h1>My Starbucks Todo List</h1>
        <TodoInput>
          <input onChange={inputing} placeholder='Enter your todo'></input>
          <button onClick={addItem}>Add Todo</button>
        </TodoInput>

        <TodoList>
          <ul>
            {todos.map((item) => (
              <li key={item.key}>
                  {item.cnt} <button onClick={deleteItem} data-key={item.key}>Delete</button>
              </li>
            ))}
            
          </ul>
        </TodoList>
      </TodoContainer>
    </>
  );
}

export default App;