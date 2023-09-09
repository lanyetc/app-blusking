"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import Link from "next/link";
import { Button, Card, Col, Row, Tag, Upload } from "antd";
const { Meta } = Card;

const tags = [
  '#Upcoming Events',
  '#Interviews',
  '#Music Festivals',
  '#Regulations',
  '#Application',
  '#Code of Conduct',
]

const NewsPage: FC = () => {
  return (
    <div className={classnames(styles.musicFestivalPage)}>
      <Row style={{height: '100%'}}>
        <Col span={8} className={styles.leftContainer}>
          <div className={styles.info}>
            <span>26/07/2023</span>
            <span>location: Olympic National Park</span>
          </div>
          <div className={styles.title}>
            OLYMPIC Music Festival
          </div>
          <div className={styles.detail}>
            Get ready to experience the ultimate celebration of creativity
            and musical talent as we proudly announce the upcoming Busking Festival,
            an event that promises to turn the city into a vibrant stage for artists
            from all walks of life.
          </div>
          <Image src='/music-festival-1.png' alt="/music-festival-1.png" width={544} height={662}/>
        </Col>
        <Col span={16} className={styles.rightContainer}>
          <Image src='/music-festival-2.png' alt="/music-festival-2.png" width={392} height={810} />
          <div className={styles.detail}>
            Welcome to the most exhilarating music festival of the year!
            Get ready to immerse yourself in a whirlwind of electrifying performances,
            infectious beats, and unforgettable moments. From chart-topping headliners to...
          </div>
          <div className={styles.upload}>
            <span className={styles.text}>Want to join in the festival?</span>
            <Upload >
              <Button >Upload your CV</Button>
            </Upload>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default NewsPage;