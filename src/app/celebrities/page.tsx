"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import Link from "next/link";
import { Col, Row } from "antd";

const data = [
  {
    name: 'Ed Sheeran',
    tag: 'Singer',
    imgSrc: '/celebrity-1.png',
    height: 292,
    width: 232,
    background: '#F0D20C',
    clickable: false,
  },
  {
    name: 'Anna Dean',
    tag: 'Dancer',
    imgSrc: '/celebrity-2.png',
    height: 255,
    width: 232,
    background: '#70CCC4',
    clickable: false,
  },
  {
    name: 'Jessie J',
    tag: 'Singer',
    imgSrc: '/celebrity-3.png',
    height: 272,
    width: 232,
    background: '#F57E03',
    clickable: false,
  },
  {
    name: 'Bob Geldof',
    tag: 'Acrobats',
    imgSrc: '/celebrity-4.png',
    height: 272,
    width: 232,
    background: '#EC3D63',
    clickable: true,
  },
  {
    name: 'Chris Mezy',
    tag: 'Magician',
    imgSrc: '/celebrity-5.png',
    height: 232,
    width: 232,
    background: '#A5DA74',
    clickable: true,
  },
]

const CelebritiesPage: FC = () => {
  return (
    <div className={classnames(styles.historyPage)}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>Celebrities</h1>
          <div className={styles.description}>
            Check out the performance with top hits.
            We have artists giving excellent performance in the community.
            Click the Profile to listen and watch the performance,
            cheer for your favorite ones and send them to the main page.
          </div>
        </div>
      </header>
      <Row className={styles.celebrityContainer}>
        {data.map((item, index) => (
          <Col key={index} className={styles.card}>
            <div className={styles.item} style={{ backgroundColor: item.background }}>
              <div className={styles.title}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.tag}>{item.tag}</div>
              </div>
              <Image src={item.imgSrc} alt={item.imgSrc} height={item.height} width={item.width}></Image>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CelebritiesPage;