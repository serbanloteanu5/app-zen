/* 
    Filename: professional_code.js
    Description: This code is a complex implementation of a social media app.
                It includes user authentication, creating posts, liking, and commenting on posts,
                as well as following/unfollowing other users and displaying a user's feed.
*/

// User class to represent a user in the social media app
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.following = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }

  likePost(post) {
    post.likes++;
  }

  commentPost(post, comment) {
    post.comments.push(comment);
  }

  follow(user) {
    this.following.push(user);
  }

  unfollow(user) {
    const index = this.following.indexOf(user);
    if (index > -1) {
      this.following.splice(index, 1);
    }
  }

  getFeed() {
    let feed = [];
    for (let i = 0; i < this.following.length; i++) {
      const user = this.following[i];
      feed = feed.concat(user.posts);
    }
    return feed;
  }
}

// Post class to represent a social media post
class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }
}

// Usage example
const user1 = new User("JohnDoe", "johndoe@example.com", "password");
const user2 = new User("JaneSmith", "janesmith@example.com", "password");

user1.createPost("Hello, world!");
user1.createPost("This code is amazing!");
user1.createPost("I'm learning JavaScript.");

user1.likePost(user1.posts[0]);
user1.commentPost(user1.posts[0], "Nice post!");

user1.follow(user2);
user1.createPost("Just followed Jane!");

user2.createPost("Welcome to the social media app!");

console.log(user1.getFeed());