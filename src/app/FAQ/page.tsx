"use client"

import { CSSProperties, FC } from "react"
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Collapse, CollapseProps, Input, Row } from "antd";
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

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: 'What permit should I apply for?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'Special conditions for buskers under 16 years of age?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'How long can I busk at one location?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: 'Can I sell my artwork produced through busking?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const FAQPage: FC = () => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: 'rgba(89, 89, 89, 0.74)',
    borderRadius: 24,
    border: 'none',
  };
  return (
    <div className={classnames(styles.FAQPage)}>
      <Row gutter={90} className={styles.container}>
        <Col span={12} className={styles.leftContainer}>
          <div className={styles.faqBlock}>
          <Image
            src={'/FAQ-1.png'}
            alt="/FAQ-1.png"
            width={650}
            height={390}
            className={styles.BGImage}
          />
            <span style={{position: 'relative'}}>FAQ</span>
          </div>
        </Col>
        <Col span={12} className={styles.rightContainer}>
          <Collapse
            className="faq-collapse"
            style={{border: 'none'}}
            defaultActiveKey={['1']}
            expandIconPosition={'end'}
            items={getItems(panelStyle)}
          />
          <div className='sendInput'>
            <Input
              size="large"
              placeholder="Type your questions..."
              style={{background: 'rgba(255, 255, 255, 0.95)', borderRadius: 30}}
              addonBefore={<Icon component={sendSvg} />}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default FAQPage;