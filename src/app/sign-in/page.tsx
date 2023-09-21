"use client"

import { CSSProperties, FC, useState } from "react"
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Collapse, CollapseProps, DatePicker, Form, Input, Row, Select } from "antd";
import { CloudUploadOutlined, EnvironmentFilled } from '@ant-design/icons';
import Image from 'next/image'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import TimeBooker from "@/components/timeBooker";
import Dragger from "antd/es/upload/Dragger";
import { useRouter } from "next/navigation";

const performanceType = [
  { label: 'Music', value: 'Music' },
  { label: 'Dance', value: 'Dance' },
  { label: 'Circus skills', value: 'Circusskills' },
  { label: 'Magic shows', value: 'Magicshows' },
  { label: 'Living statues', value: 'Livingstatues' },
  { label: 'Spoken word', value: 'Spokenword' },
  { label: 'Visual arts', value: 'Visualarts' },
]

const idealPitch = [
  { label: 'Paddington', value: 'Paddington' },
  { label: 'Marylebone', value: 'Marylebone' },
  { label: 'Oxford Street', value: 'OxfordStreet' },
  { label: 'Regent Street', value: 'RegentStreet' },
  { label: 'Piccadilly', value: 'Piccadilly' },
  { label: 'Chinatown', value: 'Chinatown' },
  { label: 'Leicester Square', value: 'LeicesterSquare' },
  { label: 'Covent Garden', value: 'CoventGarden' },
  { label: 'Embankment', value: 'Embankment' },
  { label: 'Trafalgar Square', value: 'TrafalgarSquare' },
]

const LoginPage: FC = () => {
  const [started, setStarted] = useState(false);
  const defaultDate = dayjs(new Date());
  const dateFormat = 'ddd, MMM DD YYYY'

  const [currentDate, setCurrentDate] = useState(defaultDate)
  const [bookOptions, setBookOptions] = useState([
    defaultDate.subtract(1, 'day').date(),
    defaultDate.date(),
    defaultDate.add(1, 'day').date(),
  ])
  const router =useRouter()

  const onDateChange = (date: Dayjs | null) => {
    if (date) {
      setCurrentDate(date)
      setBookOptions([
        date.subtract(1, 'day').date(),
        date.date(),
        date.add(1, 'day').date(),
      ])
    }
  }
  const onBook = () => {}
  const onClickSubmit = () => {
    if (!started) {
      setStarted(true)
    } else {
      router.push('/');
    }
  }
  return (
    <div className={classnames(styles.LoginPage)}>
      <Form
        className={classnames(styles.loginFormContainer, 'login-form-container')}
        name="loginForm"
        layout='vertical'
        requiredMark={false}
      >
        <div className={classnames(styles.block, styles.basic)}>
          <div className={styles.title}>Join in us!</div>
          <div className={styles.formContent}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name' }]}
            >
              <Input className={styles.input} placeholder="enter your name" />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input your age' }]}
            >
              <Input className={styles.input} placeholder="enter your age" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email' }]}
            >
              <Input className={styles.input} placeholder="enter your email" />
            </Form.Item>
            <div className={styles.submitBtn}><Button onClick={onClickSubmit}>{started ? 'SUBMIT' : 'START'}</Button></div>
          </div>
        </div>
        {started && <div className={classnames(styles.block, styles.step1)}>
          <div className={styles.title}>01</div>
          <div className={styles.formContent}>
            <Form.Item
              label="Choose your performance type:"
              name="performanceType"
              rules={[{ required: true, message: 'Please select your performance type' }]}
            >
              <Select
                className={classnames(styles.select, 'sign-in-select')}
                placeholder="select performance type"
                options={performanceType}
              />
            </Form.Item>
          </div>
        </div>}
        {started && <div className={classnames(styles.block, styles.step2)}>
          <div className={styles.title}>02</div>
          <div className={styles.formContent}>
            <Form.Item
              label="Choose your ideal pitch:"
              name="idealPitch"
              rules={[{ required: true, message: 'Please select your deal pitch' }]}
            >
              <Select
                className={classnames(styles.select, 'sign-in-select')}
                placeholder="select deal pitch"
                options={idealPitch}
              />
            </Form.Item>
          </div>
        </div>}
        {started && <div className={classnames(styles.block, styles.step3)}>
          <div className={styles.title}>03</div>
          <div className={styles.formContent}>
            <Form.Item
              label="Upload your CV:"
              name="cv"
              rules={[{ required: true, message: 'Please upload your CV' }]}
            >
              <Dragger className={classnames("sign-in-upload", styles.signUpload)}>
                <div className={styles.dragContent}>
                <span className="ant-upload-drag-icon">
                  <CloudUploadOutlined />
                </span>
                <span className="ant-upload-text">Drop your profile</span>
                <span className="ant-upload-text">or</span>
                <div className={styles.uploadBtn}>Browse</div>
                </div>
              </Dragger>
            </Form.Item>
          </div>
        </div>}
        {started && <div className={classnames(styles.block, styles.step4)}>
          <div className={styles.title}>04</div>
          <div className={styles.formContent}>
            <div className={styles.selectItem}>
              <DatePicker defaultValue={defaultDate} className="map-date-selector" onChange={onDateChange} allowClear={false} />
              <span>{currentDate.format(dateFormat)}</span>
            </div>
            <div className={styles.selectItem}>
              <EnvironmentFilled className={styles.locationIcon} />
              <span>Leicester Square</span>
            </div>
            <TimeBooker options={bookOptions} onBook={onBook} />
          </div>
        </div>}
      </Form>
      <Image
        className={styles.backgroundImg}
        src={'/login-bg.png'}
        alt={'/login-bg.png'}
        width={1826}
        height={748}
      />
    </div>
  )
}

export default LoginPage;