"use client"

import { CSSProperties, FC } from "react"
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Collapse, CollapseProps, Input, Row, Tag } from "antd";
import Icon from '@ant-design/icons';
import Image from 'next/image'

const text = `In order to apply for a licence you must submit the following documents: 
application form relevant application fee photographic ID (including passport or driving licence) 
- if the applicant does not have either passport or driving licence, 
we will accept the long form birth certificate with a recent photograph certificate of public liability insurance exceeding 
£2million declaration of right to work in the UK description of your performance activity 
and a description of any instruments or other equipment that may be used during the performance`

const sendSvg = () => (
  <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4026" width="32" height="32"><path d="M478.4128 491.7248l-202.1376-30.1056a81.92 81.92 0 0 1-64.67584-52.38784L125.52192 178.4832c-7.8848-21.17632 2.49856-44.8512 23.22432-52.92032a39.38304 39.38304 0 0 1 31.90784 1.47456L878.592 475.15648c19.90656 9.9328 28.18048 34.48832 18.432 54.82496-3.8912 8.21248-10.40384 14.848-18.432 18.8416L180.6336 896.96256a39.77216 39.77216 0 0 1-53.6576-18.8416 41.7792 41.7792 0 0 1-1.45408-32.58368l86.07744-230.74816a81.92 81.92 0 0 1 64.67584-52.38784l202.1376-30.1056a20.48 20.48 0 0 0 0-40.5504z" p-id="4027" fill="#ffffff"></path></svg>
)

const tags = [
  '#Guitar',
  '#Instrument',
  '#Music',
  '#Technique',
  '#Singing'
]

const materials = [
  'How to Perform on Stage like a Professional for Music Artists',
  'How to Interact with Audience',
  'How to Create A High Performance Culture',
  'How to Develop Performing Skills',
  'Busking Tips for Beginners',
  'The Best Busking Equipment',
  '10 Busking Tips: What you need to',
]

const LivePage: FC = () => {
  return (
    <div className={classnames(styles.LivePage)}>
      <Row gutter={56} className={styles.container}>
        <Image
          className={styles.imageBG}
          src={'/live-1.png'}
          alt={'/live-1.png'}
          width={704}
          height={692}
        />
        <Col span={6} className={styles.leftContainer}>
          <div className={styles.avator}>
            <Image
              src='/live-2.png'
              alt='/live-2.png'
              width={124}
              height={124}
            />
          </div>
          <div className={styles.performanceType}>Musician</div>
          <div className={styles.name}>Susan Ledger</div>
          <div className={styles.tags}>
            {tags.map((item, index) => (
              <Tag style={{ color: '#D0D0D0', marginBottom: 8 }} color="rgba(61, 60, 60, 0.74)" key={index}>{item}</Tag>
            ))}
          </div>
          <div className={styles.info}>
          “This lesson will mainly focus on playing chord and some basic techniques to learn as a beginner...”
          </div>
          <div className={styles.materialsBox}>
            <div className={styles.materialsHeader}>
              Materials
            </div>
            <div className={styles.materialContent}>
              {materials.map((item, index) => (
                <div className={styles.materialItem} key={index}>
                  <span className={styles.text}>{index+1}. </span>
                  <span className={classnames(styles.text, styles.rightText, 'text-with-underline')}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col span={18} className={styles.rightContainer}>
          <div className={styles.liveTitle}>
            Session 1 - How to play chord as a beginner?
          </div>
          <div style={{marginBlockStart: 74}}>
          <iframe style={{marginBlockStart: 24}} width="100%" height="500"
          src={'https://www.youtube.com/embed/cUxRhesT8gY'}>
        </iframe>
          </div>
          <div className={classnames('sendInput', styles.sendInput)}>
            <Input
              size="large"
              placeholder="Type here..."
              style={{background: 'rgba(255, 255, 255, 0.95)', borderRadius: 30}}
              addonBefore={<Icon component={sendSvg} />}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LivePage;