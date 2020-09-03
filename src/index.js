import Post from './Post'
import './styles/style.css'
import json from "./assets/json.json"
import webpackLogo from "./assets/webpack-logo.png"

const post = new Post("Webpack Post Title", webpackLogo)

console.log(post.toString())
console.log(json.title)
