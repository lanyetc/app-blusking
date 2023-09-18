"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import Link from "next/link";
import { Card, Col, Row, Tag } from "antd";
import { newsData } from "./data";
import { useRouter } from "next/navigation";
const {Meta} = Card;

const tags = [
  '#Upcoming Events',
  '#Interviews',
  '#Music Festivals',
  '#Regulations',
  '#Application',
  '#Code of Conduct',
]

const NewsPage: FC = () => {
  const router = useRouter()
  const handleOnCardClick = (index: number) => {
    if(index === 0) {
      router.push('/music-festival')
    } else if (index === 1) {
      router.push('/regulations')
    }
  }
  return (
    <div className={classnames(styles.historyPage)}>
      <header className={styles.header}>
        <Image src='/news-1.png' alt='/news-1.png' width={810} height={566} priority/>
        <div className={styles.title}>
          <h1>News</h1>
          <div className={styles.description}>
            Read our success stories of
            <Link style={{ textDecoration: 'underline' }} href='/celebrities'> celebrity </Link>
            buskers and activity held by associations,
            highlighting their achievements and contributions to the community.
          </div>
        </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => <Tag color="gray" key={index}>{tag}</Tag>)}
        </div>
      </header>
      <div className={styles.container}>
        <Row gutter={32} className={styles.content}>
          {newsData.map((item, index) => (
            <Col key={index} span={8}>
              <Card
                onClick={()=>handleOnCardClick(index)}
                className={styles.card}
                cover={<Image src={item.imgSrc} alt={item.imgSrc} width={412} height={256} priority/>}
              >
                <Meta className={styles.cardMeta} title={item.content} description={item.date}></Meta>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default NewsPage;