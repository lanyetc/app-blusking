"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import Link from "next/link";
import { Card, Col, Input, Row, Tag } from "antd";
import { SearchOutlined, HourglassOutlined } from "@ant-design/icons";
import { resourceData } from "./data";
import { useRouter } from "next/navigation";
const { Meta } = Card;

const tags = [
  '#Singing',
  '#Instrument',
  '#Engagement',
  '#Music Production',
  '#Confidence',
  '#Band',
  '#Song Writing',
]

const ResourcesPage: FC = () => {
  const router = useRouter();
  return (
    <div className={classnames(styles.resourcePage)}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>Resources</h1>
          <div className={styles.description}>
            We have structured lessons throughout the experiences,
            insights and approaches that can be applied to various performance genres and needs.
            We distinguished several categories, click or search with labels.
          </div>
        </div>
        <div className={styles.tags}>
          <span className={styles.searchbar}>
            <Input
              style={{ background: 'transparent', borderRadius: 20 }}
              placeholder="Enter tag"
              prefix={<SearchOutlined />}
            />
          </span>
          {tags.map((tag, index) => <Tag style={{ color: '#9C9A85' }} color="#E7E4D0" key={index}>{tag}</Tag>)}
        </div>
      </header>
      <div className={styles.container}>
        <Row gutter={32} className={styles.content}>
          {resourceData.map((item, index) => (
            <Col key={index} span={8}>
              <Card
                className={styles.card}
                onClick={()=>router.push('/live-lesson')}
                cover={<Image src={item.imgSrc} alt={item.imgSrc} width={412} height={256} />}
              >
                <div className={styles.cardDetail}>
                  <div className={styles.tag}>{item.tag}</div>
                  <div className={styles.text}>{item.content}</div>
                  <div className={styles.info}>
                    <span className={styles.new}>{item.isNew && 'NEW!!!'}</span>
                    <span style={{ flex: 1 }} />
                    <span className={styles.time}>
                      <HourglassOutlined />
                      {item.time}
                    </span>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ResourcesPage;