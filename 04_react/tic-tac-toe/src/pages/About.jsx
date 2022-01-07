import {useLocation} from "react-router-dom";
import queryString from "query-string";

export default function About(){

  const location = useLocation().search;
  // const obj = new URLSearchParams(location.search);
  // console.log(obj.get('name'))
  const query = queryString.parse(location);
  console.log(query);

  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {query.name && <p>name은 {query.name} 입니다.</p>}
    </div>
  );
}