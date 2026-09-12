# Mini Feed Simulator

This project simulates the feed of a social media app, running entirely in Node. There are 6 primary features:

| Feature | Role |  Command (function used)   |
|   ---   |   ----   |     ---    |
| Make New Post | Create a new post with a unique id, username, content, number of likes (set to zero to start) and a timestamp. | addPost(username, content, timestamp = date.now()) |
| Like a Post | Increase the number of likes on a specific post by 1. | likePost(postId) |
| Get Feed | Retrieve the feed from the array. | getFeed() |
| Sort by Likes | Sort the posts in the feed by the number of likes (ascending to descending). | sortByLikes() |
| Sort by Date | Sort the posts in the feed by the date of the posts (latest to earliest). | sortByNewest() |
| Filter Posts by User | See all the posts from a specific user. | getPostsByUser() |

## Instructions and Notes

An example post would look like this in the feed:

 {
 
    id: 1,
    
    username: 'Tom',
    
    content: "Here's an example post",
    
    likes: 0,
    
    timestamp: 1789196088897
    
  }

* This simulator is made to run entirely in Node. To run it, run node mini-feed.js .
* To retrieve the feed, console log(getFeed()).
* addPost() requires a "username", "content" and a date. The constant date function at the top of the free space keeps a time reference.
* Since there are no external files, exact timestamps can't be kept - to simulate a difference in time between posts, subtract a number from now e.g. (addPost("Tom", "Example", now - 10000).

### Example Usage


addPost("Tom", "Here's an example post", now - 10000)

likePost(1)

likePost(1)

console.log(getFeed())

console.log(getPostsByUser("Tom"))

console.log(sortByLikes())
