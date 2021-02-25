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

module.exports = {
  dummy,
  totalLikes,
  totalLikesBlogs
}

