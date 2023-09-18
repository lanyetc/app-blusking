"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Row, Tag, Upload } from "antd";
import {regulationData} from './data';

const NewsPage: FC = () => {
  return (
    <div className={classnames(styles.regulationPage)}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.name}>Regulations</div>
          <div className={styles.date}>Updated: 18/06/2023</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.articalHeader}>
          <div className={styles.title}>
            {regulationData.title}
          </div>
          <div className={styles.info}>
            {regulationData.info}
          </div>
        </div>
        <Image src={regulationData.imgSrc} alt={regulationData.imgSrc} width={976} height={540} priority/>
        <div className={styles.paragraph}>{regulationData.brief}</div>
        {regulationData.sections.map((item, index)=>(
          <div className={styles.section} key={index}>
            <div className={styles.subtitle}>{item.title}</div>
            <div className={styles.paragraph}>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsPage;