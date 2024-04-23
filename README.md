# Pulse

This is a full-stack twitter clone maintained by [cvs0](https://github.com/cvs0).

# How it works

We use prisma to connect to our database and their we have various different models for users, posts, comments, and notifications.

## APIs

Pulse has many different publicly accessible APIs

 - /api/register                The API to register a user.
 - /api/like                    The API to toggle the like on a post.
 - /api/follow                  The API to follow a specified user.
 - /api/edit                    The API to edit a user profile.
 - /api/current                 The API to return the current session.
 - /api/comments                The API to post comments.
 - /api/users                   The API to retrieve all users.
 - /api/users/[userId]          The API to return a specific users user-id and follower count.
 - /api/posts                   The API to return all of the users posts / comments, or to create a post.
 - /api/posts/[postId]          The API to return info about a specific post.
 - /api/notification/[userId]   The API to retrieve the users notifications / mark them.

## Roadmap
 - @ mentions coming soon.
 - Image upload coming soon (powered by uploadthing).
 - Many oauth2 providers instead of just email and password login.
 - Security fixes.
 - Better UI/UX
