import React from "react"
import { Link } from "gatsby"
import { formatDate } from "../utils/datetime-utils"
import css from "./PostList.module.scss"

export default ({ posts }) => (
  <ul className={css.postList}>
    {posts.map(post => (
      <li key={post.url}>
        <time className={css.postDate} dateTime={post.date}>
          {formatDate(post.date)}
        </time>

        <Link className={css.postLink} to={post.url}>
          <h2 className={css.postTitle}>{post.title}</h2>
        </Link>
      </li>
    ))}
  </ul>
)
