import '../App.css';
import PostList from "../components/PostList.jsx";
import {Outlet} from "react-router-dom";
import {URL_Base} from "../constant.js";

function Posts() {
  return (
      <>
          {/*outlet nay la giu cho cho modal */}
          <Outlet></Outlet>
          <main>
              <PostList />
          </main>
      </>
  );
}
    
export default Posts

export async function loader() {
    const res = await fetch(URL_Base +'/posts');
    const resData = await res.json();
    return resData.posts;
}
