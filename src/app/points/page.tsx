"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Row, Tag, Upload } from "antd";
import Profile from "@/components/Profile";
import { useRouter, useSearchParams } from "next/navigation";
import { officialData, ticketsData } from "./data";
import { RightOutlined } from "@ant-design/icons"

const PriceItem = (props: {imgSrc: string, name?: string, price: string}) => {
  const {imgSrc, name, price} = props;
  return (
    <div className={styles.priceItem}>
      <Image src={imgSrc} alt={imgSrc} width={186} height={186}/>
      {name && <div className={styles.name}>{name}</div>}
      <div className={styles.price}>
        <Image src={'/points-1.svg'} alt="/points-1.svg" width={40} height={24} />
        {price}
      </div>
    </div>
  )
}

const PointsPage: FC = () => {
  const router = useRouter()
  const onClickEarn = () => {
    router.push('/celebrities')
  }
  return (
    <div className={classnames(styles.PointsPage)}>
      <div className={styles.header}>
      <div className={styles.title}>
        <h1>Hi, Markus:)</h1>
      </div>
      <div className={styles.oprations}>
      <div className={classnames(styles.pointsItem, styles.item)}>
        <span>Points</span>
        <Image src={'/points-1.svg'} alt="/points-1.svg" width={86} height={62} />
        <span className={styles.points}>
          <span className={styles.large}>2,000</span>
          <span className={styles.small}>Equals $20</span>
        </span>
      </div>
      <div className={classnames(styles.earnItem,  styles.item)} onClick={onClickEarn}>
        <span className={styles.left}>
          <Image src={'/points-2.svg'} alt="/points-2.svg" width={54} height={54} />
          <span>Earn</span>
        </span>
        <span className={styles.right}>
          <RightOutlined />
        </span>
      </div>
      </div>
      </div>
      <div className={styles.container}>
        <div className={styles.itemsBox}>
          <div className={styles.title}>Official Merchandise</div>
          <div className={styles.listBox}>
            {officialData.map((item, index)=><PriceItem key={index} {...item}/>)}
          </div>
        </div>
        <div className={styles.itemsBox}>
          <div className={styles.title}>Music Festival Tickets</div>
          <div className={styles.listBox}>
            {ticketsData.map((item, index)=><PriceItem key={index} {...item}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PointsPage;