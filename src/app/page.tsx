"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Col, Row, Layout, Space, Input, Button } from 'antd'
import classnames from 'classnames'
import { useRouter } from 'next/navigation'

const { Content } = Layout;

const CardRadiusItem = (props: any) => {
  const { radius = '', label, imgSrc, style } = props;
  return (
    <div className={classnames(styles.cardRadiusItem, {
      [styles.radiusTL]: radius.includes('tl'),
      [styles.radiusTR]: radius.includes('tr'),
      [styles.radiusBL]: radius.includes('bl'),
      [styles.radiusBR]: radius.includes('br'),
      [styles.lineHeightZero]: imgSrc,
    })}
      style={style}>
      {imgSrc && <Image src={imgSrc} alt={imgSrc} width={160} height={160} priority />}
      {label && <div className={styles.label}>{label}</div>}
    </div>
  )
}

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.linerTopLeft}></div>
      <div className={styles.linerButtomRight}></div>
      <Row className={styles.pageContent}>
        <Col flex='1 1 500px'>
          <div className={styles.leftBlock}>
            <h1 className='font-ecazr'>Redefine Busking,</h1>
            <h1 className='font-ecazr'>Resonate with Souls</h1>
            <div className={styles.description}>
              <div>
                We aim to promote busking culture in London,
                bringing it to a boarder world stage,
                and enhance interaction between buskers and audience.
              </div>
              <div>
                We encourage support for local performers by providing them professional systems and resources.
              </div>
              <div>
                Explore the website for more information...
              </div>
              <Space direction="horizontal">
                <Input 
                  placeholder="search news" 
                  style={{background: 'transparent', borderRadius: '20px', color: '#ffffff', width: 256}}
                />
                <Button style={{ width: 80, borderRadius: '20px' }} onClick={() =>{router.push('/news')}}>
                  Search
                </Button>
              </Space>
            </div>
          </div>
        </Col>
        <Col flex='0 1 480px'>
          <Row>
            <Col span={8}>
              <CardRadiusItem radius='tl' imgSrc='/home-1.png' />
            </Col>
            <Col span={8}>
              <CardRadiusItem radius='br' style={{ background: '#F0D20C', color: '#FFF7BF' }} label='Interactive Map' />
            </Col>
            <Col span={8}>
              <CardRadiusItem radius='tl' style={{ background: '#EC3D63' }} label='1000+ Buskers' />
            </Col>
            <Col span={8}>
              <CardRadiusItem radius='bl' style={{ background: '#71DED5', color: '#BCFBF5' }} label='Busking Application' />
            </Col>
            <Col span={8}>
              <CardRadiusItem
                radius='tr' 
                style={{ background: '#000000' }} 
                label={<div>
                  <div className={styles.large}>45K+</div>
                  <div>Audience</div>
                </div>}
              />
            </Col>
            <Col span={8}>
              <CardRadiusItem radius='bl' imgSrc='/home-2.png' />
            </Col>
            <Col span={8}>
              <CardRadiusItem radius='tl' imgSrc='/home-3.png' />
            </Col>
            <Col span={8}>
              <CardRadiusItem radius='tl tr bl br' style={{ background: '#F1EFDB' }} />
            </Col>
            <Col span={8}>
              <CardRadiusItem radius='tl' style={{ background: '#A5DA74', color: '#D7F9B8' }} label="Learning Resources" />
            </Col>
            <Col span={8}>
              <CardRadiusItem radius='bl' style={{ background: '#0A3796', color: '#5374B9' }} label="Scheduling & Booking" />
            </Col>
            <Col span={8}>
              <CardRadiusItem imgSrc='/home-4.png' />
            </Col>
            <Col span={8}>
              <CardRadiusItem 
                radius='tr bl' 
                style={{ background: '#F57E03' }}
                label={<div>
                  <div className={styles.large}>600+</div>
                  <div>Events</div>
                </div>}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </main>
  )
}
