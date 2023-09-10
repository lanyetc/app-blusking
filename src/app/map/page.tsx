"use client"

import { CSSProperties, FC, useState } from "react"
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Collapse, CollapseProps, DatePicker, Input, Row } from "antd";
import {EnvironmentFilled} from '@ant-design/icons';
import Image from 'next/image'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import TimeBooker from "@/components/timeBooker";
import { useRouter } from "next/navigation";


const MapPage: FC = () => {
  const router = useRouter();
  const defaultDate = dayjs(new Date());
  const dateFormat = 'ddd, MMM DD YYYY'

  const [currentDate, setCurrentDate] = useState(defaultDate)
  const [bookOptions, setBookOptions] = useState([
    defaultDate.subtract(1,'day').date(),
    defaultDate.date(),
    defaultDate.add(1,'day').date(),
  ])

  const onDateChange = (date: Dayjs | null) => {
    if(date) {
      setCurrentDate(date)
      setBookOptions([
        date.subtract(1,'day').date(),
        date.date(),
        date.add(1,'day').date(),
      ])
    }
  }
  const onBook = () => {
    router.push('/application')
  }
  return (
    <div className={classnames(styles.FAQPage)}>
      <Row gutter={90} className={styles.container}>
        <Col span={18} className={styles.leftContainer}>
          <div className={styles.MapBlock}>
            <Image
              src='/map-1.png'
              alt='/map-1.png'
              width={1000}
              height={792}
            />
          </div>
        </Col>
        <Col span={6} className={styles.rightContainer}>
          <div className={styles.selectItem}>
            <DatePicker defaultValue={defaultDate} className="map-date-selector" onChange={onDateChange} allowClear={false} />
            <span>{currentDate.format(dateFormat)}</span>
          </div>
          <div className={styles.selectItem}>
            <EnvironmentFilled className={styles.locationIcon}/>
            <span>Leicester Square</span>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.inputItem}>
              <span className={styles.label}>Performance genre:</span>
              <Input
                className={styles.input}
                placeholder="type here..."
              />
            </div>
            <div className={styles.inputItem}>
              <span className={styles.label}>Performance description/Song list:</span>
              <Input
                className={styles.input}
                placeholder="type here..."
              />
            </div>
            <div className={styles.inputItem}>
              <span className={styles.label}>Props prepared to use:</span>
              <Input
                className={styles.input}
                placeholder="type here..."
              />
            </div>
          </div>
          <div>
            <TimeBooker options={bookOptions} onBook={onBook} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MapPage;