/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */
const API_URL = "http://localhost:4000/api/posts/";
const API_BASE_URL = "http://localhost:4000/";

window.onload = () => {
  getPost();
  getPostIdParam();
};

const getPostIdParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
};

const getPost = () => {
  // CODE GOES HERE
  const postId = getPostIdParam();
  const url = `${API_URL}${postId}`;
  fetch(url, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      return buildPost(resData);
    })
    .catch((err) => {
      console.log(err);
    });
};

const buildPost = (param) => {
  // HINT: Convert the date number to a Date string
  let dataContent = "";
  const postDate = new Date(parseInt(param.added_date)).toDateString();
  const postImage = `${API_BASE_URL}${param.post_image}`;
  dataContent += ` 
      <header class="individual-banner" style="background: url(${postImage}) center/cover no-repeat;"></header>
      <div class="main">
        <div class="main-container">
          <div class="navigation">
            <a href="index.html">
              Back
            </a>
          </div>
          <div class="post-container">
          <div id="individual-post-title">${param.title}</div>
          <div id="individual-post-date">${postDate}</div>
          <div id="individual-post-content">${param.content}</div>
          </div>
        </div>
      </div>
    
    `;
  document.querySelector(".container").innerHTML = dataContent;
};
