import './App.css'
import MainHeader from "./components/MainHeader.jsx";
import PostList from "./components/PostList.jsx";
import {useState} from "react";

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(true) //init state
    function hideModalHandler() {
        setModalIsVisible(false);
    }
    function openModalHandler() {
        setModalIsVisible(true);
    }

  return (
      <>
        <MainHeader onCreatePost={openModalHandler} />
          <main>
              <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
          </main>
      </>
  );
}
    
export default App
