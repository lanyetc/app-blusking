/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = ''
let imgaes = {}
if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
  imgaes = {
    loader: 'custom',
    loaderFile: './image-loader.js',
  }
}
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: "export",
  images: imgaes,
}

module.exports = nextConfig
