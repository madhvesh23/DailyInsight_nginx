// import React, { useEffect, useState } from "react";
import Layout from "../Layout/layout";
// import axios from "axios";
// import api from "./Api";
// function Bookmark() {
//   const [readingList, setReadingList] = useState([""]);

//   const LoadBookmarkArticle = async () => {
//     await axios.get(api+"/articles/view")
//       .then((list) => {console.log(list)
//         setReadingList(list.data)})
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     LoadBookmarkArticle();
//   }, []);

//   return (
//     <div>
//
//         <div className="news-section">

//             {readingList.map((data, key) => {
//               return (
//                 <div key={key} className="news-card">
//                   <img src={data.image} alt="News 1" />
//                   <div clasName="news-card-content">
//                     <h3>{data.title}</h3>
//                     <p>{data.description}</p>
//                     {/* {readingListCheck(data.title) ? (
//                       <button
//                         className="add-list"
//                         onClick={() => removefromReadingList(data.title)}
//                       >
//                         Remove from reading list
//                       </button>
//                     ) : (
//                       <button
//                         className="add-list"
//                         onClick={() => addToReadingList(data)}
//                       >
//                         Add to reading list
//                       </button>
//                     )} */}
//                   </div>
//                 </div>
//               );
//             })
//           }
//         </div>
//
//     </div>
//   );
// }

// export default Bookmark;

import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "./Api";
const Bookmark = () => {
  const [Articles, setArticles] = useState([]);
  const bookmarkShow = () => {
    axios
      .get(api + "/articles/view", {
        withCredentials: true,
      })
      .then((data) => {
        setArticles(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    bookmarkShow();
    console.log(Articles);
  }, []);

  return (
    <div className="container">
      <Layout>
        <div className="news-section">
          {Articles.map((data, index) => {
            return (
              <div key={index} className="news-card">
                <img src={data.image} alt="News 1" />
                <div className="news-card-content">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Bookmark;
