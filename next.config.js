/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = ''
let images = {}
if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
  images = {
    loader: 'custom',
    loaderFile: './image-loader.js',
  }
}
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: isGithubActions && "export",
  images: images,
}

module.exports = nextConfig
