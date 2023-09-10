"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Row, Tag, Upload } from "antd";
import Profile from "@/components/Profile";
import { useSearchParams } from "next/navigation";
import { songsData, videoData } from "./data";
import { PauseOutlined, HeartFilled } from "@ant-design/icons"

const singerTags = [
  '#Singing',
  '#Pop',
  '#Instrument',
  '#Soft Rock',
]

const videoTags = [
  '#Magic',
  '#Acrobatics',
  '#Props',
]

const singerData = {
  name: "Ed Sheeran",
  id: "teddysphotos",
  tags: singerTags,
  workName: "Songs",
  workAmount: 65,
  cheoutAmount: '2.3B',
  ranking: 1,
  comments: '5.7M',
  avatorUrl: "/singer-1.png",
}

const magicianData = {
  name: "Chris Mezy",
  id: "@chrismezy",
  tags: videoTags,
  workName: "Performance",
  workAmount: 35,
  cheoutAmount: '3.4M',
  ranking: 5,
  comments: '0.8M',
  avatorUrl: "/singer-14.png",
}


const Songs = () => {
  return (
    <div className={styles.songsContainer}>
      {songsData.map((item, index) => (
        <div key={index} className={styles.songBlock}>
          <Image
            src={item.imgSrc}
            alt={item.imgSrc}
            width={346}
            height={346}
          />
          <div className={styles.title}>
            <span>{item.name}</span>
            <span style={{ flex: 1 }} />
            <PauseOutlined style={{ marginInlineEnd: 36 }} />
            <HeartFilled />
          </div>
          <Image
            src={item.barSrc}
            alt={item.barSrc}
            width={346}
            height={54}
          />
          <div className={styles.lyrics}>
            {item.lyric.map((item, index) => (
              <div key={index}>{item || <br />}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const Videos = () => {
  return (
    <div className={styles.songsContainer}>
      {videoData.map((item, index) => (
        <div key={index} className={styles.videoBlock}>
          <Image
            src={item.imgSrc}
            alt={item.imgSrc}
            width={290}
            height={376}
          />
          <div className={styles.title}>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.text}>{item.title}</div>
            <div className={styles.extra}>
              <HeartFilled />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const SingerPage: FC = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const profileInfo = type === 'singer' ? singerData : magicianData;
  return (
    <div className={classnames(styles.SingerPage)}>
      <Profile
        {...profileInfo}
      />
      <div className={styles.rightContainer}>
        {type === 'singer' ? <Songs /> : <Videos />}
      </div>
    </div>
  )
}

export default SingerPage;