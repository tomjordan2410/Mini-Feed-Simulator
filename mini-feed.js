let feed = [];

function addPost(username, content, timestamp = Date.now()) {
    let newPost = {
    id: feed.length + 1,
    username: username, 
    content: content,
    likes: 0,
    timestamp: timestamp
    };

    feed.push(newPost);
}

function likePost(postId) {
    let post = feed.find(post => post.id === postId);
    if (post) {
        post.likes++;
    }
    if (!post) {
        console.log("No post found");
        return;
    }
}

function getFeed() {
    return feed;
}

function sortByNewest() {
    return feed.toSorted((a, b) => b.timestamp - a.timestamp);
}

function sortByLikes() {
    return feed.toSorted((a, b) => b.likes - a.likes);
}

function getPostsByUser(username) {
    let filteredPosts = feed.filter(post => post.username === username);
    if (filteredPosts.length === 0) {
        console.log("User not Found");
        return;
    }
    return filteredPosts;
}

// ************************************

const now = Date.now();

addPost("Tom", "Here's my first post", now - 10000);
addPost("Steve", "Here's the second post", now - 5000);
addPost("Brent", "here's the third post", now);
likePost(1);
likePost(1);
likePost(2);
likePost(2);
likePost(2);
