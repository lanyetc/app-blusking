"use client"

import { FC, useEffect, useState } from "react"
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Collapse, CollapseProps, DatePicker, Input, Modal, Row, Segmented, Tag } from "antd";
import { InstagramFilled, FacebookFilled, TwitterCircleFilled } from '@ant-design/icons';
import Image from 'next/image'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import Link from "next/link";

const timeList = [
  '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00',
  '20:00', '21:00'
]
const unavaliableTimeList = ['13:00', '16:00', '17:00', '21:00',]

interface IProps {
  name: string;
  id: string;
  tags: string[];
  workName: string;
  workAmount: string | number;
  cheoutAmount: string | number;
  ranking: string | number;
  comments: string | number;
  avatorUrl: string;
}

const Profile: FC<IProps> = (props: IProps) => {
  const { name, id, tags, workName, workAmount, cheoutAmount, ranking, comments, avatorUrl } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const onCommentClick = () => {
    setIsModalOpen(true);
  }
  return (
    <div className={classnames(styles.profile)}>
      <Image
        src={avatorUrl}
        alt={avatorUrl}
        width={300}
        height={300}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.otherInfo}>
        <span className={styles.id}>{id}</span>
        <InstagramFilled />
        <FacebookFilled />
        <TwitterCircleFilled />
      </div>
      <div className={styles.tags}>
        {tags.map((tag, index) => <Tag style={{ color: '#9C9A85' }} color="#E7E4D0" key={index}>{tag}</Tag>)}
      </div>
      <Row gutter={24} className={styles.blocks}>
        <Col span={12}>
          <div className={classnames(styles.work, styles.block)} style={{ background: '#F0D20C' }}>
            <div className={styles.title}>{workName}</div>
            <div
              className={styles.text}
              style={{
                color: '#FFF507',
                textShadow: '0px 4px 4px #D3BB16'
              }}
            >
              {workAmount}
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className={classnames(styles.block)} style={{ background: '#70CCC4' }}>
            <div className={styles.title}>Checkouts</div>
            <div
              className={styles.text}
              style={{
                color: '#1F8D84',
                textShadow: '0px 4px 4px #48B1A8'
              }}
            >
              {cheoutAmount}
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className={classnames(styles.block)} style={{ background: '#F57E03' }}>
            <div className={styles.title}>Ranking</div>
            <div
              className={styles.text}
              style={{
                color: '#FFD2B9',
                textShadow: '0px 4px 4px #C73203'
              }}
            >
              {ranking}
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div
            className={classnames(styles.work, styles.block)}
            style={{ background: '#A5DA74' }}
            onClick={onCommentClick}
          >
            <div className={styles.title}>Comments</div>
            <div
              className={styles.text}
              style={{
                color: '#59A016',
                textShadow: '0px 4px 4px #7EAF51'
              }}>
              {comments}
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        className={'comment-modal'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        width={714}
        footer={null}
        centered={true}
      >
        <div className={styles.commentModalBody}>
          {
            !isSend ? (
              <>
                <div className={styles.content}>
                  <div className={styles.leftBlock}></div>
                  <div className={styles.centerBlock}>
                    <div className={styles.text}>@alexsposato</div>
                    <div className={styles.text}>
                      Awesome musicians at Covent Garden London.
                      Really funny, look what they do, they play and sing :-) Like this vibe in London,
                      definitely come back again!
                    </div>
                  </div>
                  <div className={styles.rightBlock}></div>
                </div>
                <div className={styles.footer}>
                  <Input className={styles.input} placeholder="Type here......" />
                  <Button onClick={() => setIsSend(true)}>Send</Button>
                </div>
                <div className={styles.link}>
                  Send comments to get <Link href={'/points'} className="text-with-underline">Points</Link>!!!
                </div>
              </>
            )
              : <>
              <Image  src={'/profile-1.png'} alt={'/profile-1.png'} width={715} height={576}/>
              <div className={styles.specialText}>
                <Link href={'/points'} className="text-with-underline">view my points</Link>
              </div>
              </>
          }
        </div>
      </Modal>
    </div>
  )
}

export default Profile;
