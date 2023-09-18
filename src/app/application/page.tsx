"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import classnames from "classnames";
import Link from "next/link";
import { Card, Col, Input, Row, Steps, Tag } from "antd";
import { SearchOutlined, HourglassOutlined } from "@ant-design/icons";
const { Meta } = Card;

const items = [
  {title: 'Filling form'},
  {title: 'Audition'},
  {title: 'Review and Approval'},
  {title: 'Pay the Fee'},
  {title: 'Receive Certificate'},
]

const ApplicationPage: FC = () => {
  return (
    <div className={classnames(styles.applicationPage)}>
      <div className={styles.innerContainer}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>Application</h1>
          <div className={styles.description}>
            Check out your certificate progress. If you attended audition, the result will be listed here.
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <div className={classnames(styles.steps, 'application-steps')}>
          <Steps current={3} labelPlacement="vertical" items={items} />
        </div>
        <div className={styles.info}>
          <div className={styles.infoTitle}>
          Congratulations! <br/>
          Your application is been accepted.
          </div>
          <div>
          There is a fee associated with obtaining a busking permit. 
          Once the permit is granted, buskers will be required to pay the designated fee, 
          which contributes to the maintenance of busking zones, sound management, 
          and overall regulation enforcement. 
          The fee payment is an essential step to finalize the permit process.
          </div>
        </div>
      </div>
      </div>
      <Image
        src={'/application-1.png'}
        alt="/application-1.png" 
        width={1016}
        height={590}
        priority
      />
    </div>
  )
}

export default ApplicationPage;