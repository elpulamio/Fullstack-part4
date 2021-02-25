const dummy = (blogs) => {
  return 1
}

const totalLikes = (listWithOneBlog) => {
  let total = listWithOneBlog.reduce(function (sum, blog) {
    return sum + parseInt(String(blog.likes)) 
  }, 0)
  return total
}

const totalLikesBlogs = (blogs) => {
  let total = blogs.reduce(function (sum, blog) {
    return sum + parseInt(String(blog.likes)) 
  }, 0)
  return total
}

const favoriteBlog = (blogs) => {
    function getLikes(){
      return blogs.map(blog => blog.likes)
    }
    function getMaxLikes(){
      return Math.max(...getLikes());
    }
    return blogs.filter(blog => blog.likes === getMaxLikes()).map(rightBlog => rightBlog)
}

module.exports = {
  dummy,
  totalLikes,
  totalLikesBlogs,
  favoriteBlog
}

