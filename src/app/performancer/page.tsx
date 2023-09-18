"use client"

import { FC, useState } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Modal, Row, Tag, Upload } from "antd";
import Profile from "@/components/Profile";
import { useSearchParams } from "next/navigation";
import { songsData, videoData } from "./data";
import { PauseOutlined, HeartFilled, ArrowLeftOutlined } from "@ant-design/icons"

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
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  return (
    <div className={styles.songsContainer}>
      {videoData.map((item, index) => (
        <div key={index} className={styles.videoBlock}>
          <Image
            src={item.imgSrc}
            alt={item.imgSrc}
            width={290}
            height={376}
            onClick={()=>{
              setVideoSrc(item.videoSrc)
              setOpen(true)
            }}
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
      <Modal 
        open={open}
        footer={null}
        onCancel={()=>{
          setOpen(false)
          setVideoSrc('')
        }}
        width={800}
        destroyOnClose
      >
        <iframe style={{marginBlockStart: 24}} width="100%" height="500"
          src={videoSrc}>
        </iframe>
      </Modal>
    </div>
  )
}

const Main = () => {
  return <div className={styles.mainBlock}>
    <div className={classnames(styles.date, 'text-with-underline')}>June</div>
    <div className={styles.articles}>
      <div className={styles.item} style={{ backgroundColor: '#70CCC4' }}>
        <div className={styles.header}>Fri. 16</div>
        <div className={styles.title} style={{ color: '#06413C' }}>Concert</div>
        <div className={styles.time}>20:00-22:00</div>
        <Image
          src='/singer-17.png'
          alt="/singer-17.png"
          width={336}
          height={208}
          priority
        />
      </div>
      <div className={styles.item} style={{ backgroundColor: '#F1EFDB' }}>
        <div className={styles.header} style={{ backgroundColor: '#F57E03' }}>Sun. 25</div>
        <div className={styles.title} style={{ paddingBlock: 90, paddingInline: 64, color: '#834200' }}>Music Festival</div>
        <div style={{ textAlign: 'right' }}>
          <Image
            src='/singer-16.png'
            alt="/singer-16.png"
            width={206}
            height={54}
            priority
          />
        </div>
      </div>
      <div className={styles.item} style={{ backgroundColor: '#EB3D63' }}>
        <div className={styles.header}>Fri. 16</div>
        <div className={styles.title} style={{ color: '#6B051C' }}>Concert</div>
        <div className={styles.time}>20:00-23:00</div>
        <Image
          src='/singer-18.png'
          alt="/singer-18.png"
          width={336}
          height={208}
          priority
        />
      </div>
    </div>
  </div>
}

const SingerPage: FC = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const profileInfo = type === 'singer' ? singerData : magicianData;
  const [isDetail, setIsDetail] = useState(false);
  return (
    <div className={classnames(styles.SingerPage)}>
      <Profile
        {...profileInfo}
        onDetail={() => setIsDetail(true)}
      />
      <div className={styles.rightContainer}>
        {!isDetail ? <Main /> : (
          <>
            <div className={styles.backBar}><ArrowLeftOutlined onClick={() => setIsDetail(false)} /></div>
            {type === 'singer' ? <Songs /> : <Videos />}
            {type !== 'singer' &&
              <Image
                src={'/singer-15.png'}
                alt={'/singer-15.png'}
                width={1200}
                height={900}
                priority
              />
            }
          </>
        )}
      </div>
    </div>
  )
}

export default SingerPage;