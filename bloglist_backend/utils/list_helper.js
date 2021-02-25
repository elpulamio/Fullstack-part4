const dummy = (blogs) => {
  return 1
}

const totalLikes = (listWithOneBlog) => {
  return parseInt(String(listWithOneBlog.map(blog => blog.likes)))
}

module.exports = {
  dummy,
  totalLikes
}

