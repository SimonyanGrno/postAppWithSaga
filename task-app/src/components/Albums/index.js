import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap"

import { getAlbums } from "./actions"

const Albums = () => {
  const dispatch = useDispatch();
  const { albums } = useSelector(({ allAlbums: { albums } }) => ({
    albums
  }))

  const hanldeGetAlbums = () => {
    dispatch(getAlbums())
  }

  console.log(albums)

  return (
    <div className="ml-3">
      <h3 className="text-muted">Albums</h3>

      <Button variant="info" onClick={hanldeGetAlbums}>Get ALbums</Button>

      {albums.length ? (
        <ul className="list-group mt-3">
          {albums.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Albums
