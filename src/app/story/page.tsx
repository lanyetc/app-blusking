"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import Link from "next/link";
import { Col, Row } from "antd";
import StoryBGImg from '../../../public/story-1.png'
import { storiesData } from "./data";


const StoryPage: FC = () => {
  return (
    <div className={classnames(styles.historyPage)}>
      <header className={styles.header}>
        <Image src={StoryBGImg} alt='/story-1.png' />
        <div className={styles.title}>
          <h1>Stories</h1>
          <div className={styles.description}>
            Read our success stories of 
            <Link style={{textDecoration: 'underline'}} href='/celebrities'> celebrity </Link>
            buskers and activity held by associations,
            highlighting their achievements and contributions to the community.
          </div>
        </div>
      </header>
      {storiesData.map((item, index) => (
        <Row 
          key={index} 
          className={classnames(styles.container, { [styles.rowReverse]: item.position === 'right' })}
          style={{backgroundColor: item.bacground, color: item.color}}>
          <Col span={18} style={{textAlign: item.position}}>
            <Image src={item.imgSrc} alt={item.imgSrc} width={item.width} height={item.height} priority/>
          </Col>
          <Col span={6}>
            <div className={classnames(styles.content, item.position === 'left' ? styles.left : styles.right)}>
              <div className={styles.sectionTitle}>{item.title}</div>
              <div className={styles.text}>{item.content.map((text, index) => <div className={styles.text} key={index}>{text}</div>)}</div>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  )
}

export default StoryPage;