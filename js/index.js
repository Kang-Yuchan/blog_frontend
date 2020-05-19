const API_URL = "http://localhost:4000/api/posts";
const API_BASE_URL = "http://localhost:4000/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  fetch(API_URL, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      buildPosts(resData);
    });
};

const buildPosts = (blogPosts) => {
  let blogPostsContent = "";
  for (blogPost of blogPosts) {
    const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${blogPost.post_image}`;
    blogPostsContent += `
    <div class="post">
      <div class="post-image" style="background-image: url(${postImage})"></div>
        <div class="post-content">
          <h4 class="post-date">${postDate}</h4>
          <h2 class="post-title">${blogPost.title}</h2>
          <p class="post-text">${blogPost.content}</p>
        </div>
    </div>
    `;
  }
  document.querySelector(".main__container").innerHTML = blogPostsContent;
};
