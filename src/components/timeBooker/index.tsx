"use client"

import { FC, useEffect, useState } from "react"
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Collapse, CollapseProps, DatePicker, Input, Row, Segmented } from "antd";
import { EnvironmentFilled } from '@ant-design/icons';
import Image from 'next/image'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const timeList = [
  '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00',
  '20:00', '21:00'
]
const unavaliableTimeList = ['13:00', '16:00', '17:00', '21:00',]

interface IProps {
  options: Array<any>,
  onBook: any,
}

const TimeBooker: FC<IProps> = (props: IProps) => {
  const { options, onBook } = props;
  const [value, setValue] = useState<string | number>(options[1]);
  useEffect(()=>{
    setValue(options?.[1])
  }, [options]);
  return (
    <div className={classnames(styles.bookContainer, 'time-booker-block')}>
      <Segmented block options={options} value={value} onChange={setValue}/>
      <div className={styles.timeListBox}>
        {timeList.map((item, index) => (
          <div className={styles.item} key={index}>
            <span className={styles.time}>{item}</span>
            <span style={{ flex: 1 }} />
            <Button
              className={classnames({ [styles.disabled]: unavaliableTimeList.includes(item) })}
              ghost disabled={unavaliableTimeList.includes(item)}
              onClick={()=>onBook?.(item)}
            >
              book
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeBooker;
