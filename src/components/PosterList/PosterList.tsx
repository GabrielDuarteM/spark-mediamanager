import * as React from "react"

import { createStyleSheet, withStyles } from "material-ui/styles"
import { Link } from "react-router-dom"

import IVideo from "../../@types/IVideo"
import Poster from "../Poster/Poster"

const styles = createStyleSheet("PosterList", theme => ({
  posterList: {
    display: "flex",
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    height: 320,
    cursor: "default",
    outline: "none",
  },
}))

interface IHocProps {
  classes: {
    posterList: string
    link: string
  }
}

interface IProps {
  className?: string
  videos: IVideo[]
  setEditVideo: (video: IVideo) => void
}

type IFullProps = IProps & IHocProps

const PosterList = ({ classes, className, videos, setEditVideo }: IFullProps) =>
  <div className={`${className} ${classes.posterList}`}>
    {videos.map((video, i) =>
      <Link to="/videoDetails" onClick={() => setEditVideo(video)} key={i} className={classes.link}>
        <Poster video={video} />
      </Link>
    )}
  </div>

export default withStyles<IProps>(styles)(PosterList)
