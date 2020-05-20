/**
 * TODO: Finish submitNewPost function to submit form data to the API
 */

const API_URL = "http://localhost:4000/api/posts";

const submitNewPost = () => {
  // HINT: Use FormData to store data to send over
  // HINT: Redirect the user to home page after successful submission
  const title = document.getElementById("form-post-title").value;
  const content = document.getElementById("form-post-content").value;
  const postImage = document.getElementById("form-post-image");
  console.log(postImage.files[0]);
  let post = new FormData();
  post.append("title", title);
  post.append("content", content);
  post.append("post_image", postImage.files[0]);

  fetch(API_URL, {
    method: "POST",
    body: post,
  }).then(() => {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
};
