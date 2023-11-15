



const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        create: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

let container= document.getElementById("container");

console.log(posts)

posts.forEach((element) => {
   
    let post = document.createElement("div");
    post.classList.add("post");
    container.appendChild(post);

    let postHeader = document.createElement("div");
    postHeader.classList.add("post__header");
    post.appendChild(postHeader);

    let postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");
    postHeader.appendChild(postMeta);

    let postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");
    postMeta.appendChild(postMetaIcon);
    
    let imgProfilePic = document.createElement("img");
    imgProfilePic.src = element.author.image;
    imgProfilePic.classList.add("profile-pic");
    postMetaIcon.appendChild(imgProfilePic);

    let postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");
    postMeta.appendChild(postMetaData);

    let postMetaAuthor = document.createElement("div");
    postMetaAuthor.innerHTML = element.author.name;
    postMetaAuthor.classList.add("post-meta__author");
    postMetaData.appendChild(postMetaAuthor);

    let postText = document.createElement("div");
    postText.innerHTML = element.content;
    postText.classList.add("post__text");
    post.appendChild(postText);

    let containerPostImage = document.createElement("div");
    containerPostImage.classList.add("post__image");
    post.appendChild(containerPostImage);

    let postImage = document.createElement("img");
    postImage.src = element.media;
    postImage.classList.add("post__image");
    containerPostImage.appendChild(postImage);


    // div footer
    let postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");
    post.appendChild(postFooter);
    
    // container likes js-likes
    let containerLikes = document.createElement("div");
    containerLikes.classList.add("likes");
    containerLikes.classList.add("js-likes");
    postFooter.appendChild(containerLikes);

    // likes__cta
    let ctaLikes = document.createElement("div");
    ctaLikes.classList.add("likes__cta");
    containerLikes.appendChild(ctaLikes);

    // a like-button  js-like-button
    let likeButton = document.createElement("a");
    likeButton.classList.add("like-button");
    likeButton.classList.add("js-like-button");
    ctaLikes.appendChild(likeButton);

    let likeIcon = document.createElement("i");
    likeIcon.classList.add("like-button__icon"); 
    likeIcon.classList.add("fas");
    likeIcon.classList.add("fa-thumbs-up");
    likeButton.appendChild(likeIcon);
    
    let spanLike = document.createElement("i");
    spanLike.innerHTML = ` Mi Piace`;
    spanLike.classList.add("like-button__label"); 
    likeButton.appendChild(spanLike);

    let likePeople = document.createElement("div");
    likePeople.innerHTML = ` Piace a <b>${element.likes}</b> persone`;
    likePeople.classList.add("likes__counter"); 
    containerLikes.appendChild(likePeople);
})