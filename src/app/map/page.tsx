"use client"

import { CSSProperties, Children, FC, useEffect, useState } from "react"
import styles from './index.module.css'
import classnames from "classnames";
import { Button, Card, Col, Collapse, CollapseProps, DatePicker, Input, Row, Segmented, Timeline } from "antd";
import { EnvironmentFilled, WarningFilled } from '@ant-design/icons';
import Image from 'next/image'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import TimeBooker from "@/components/timeBooker";
import { useRouter } from "next/navigation";

const codeConductTexts = [
  `not making too much noise`,
  `not blocking public highways (footpaths, pavements, open pedestrian areas)`,
  `not displaying notices asking for payment`,
  `not carrying out street trading (you need a street trading licence for this)`,
  `only busking in certain parts of the town or for a limited period of time`
]

const ScheduleTimeline = (props: any) => {
  const {type} = props
  const eventItems = [
    {
      dot: <span className={styles.dotPast} />,
      children: <div className={styles.contentPast}>
        <span className={styles.data}>16/06</span>
        <span className={styles.detail}>Sing with Me</span>
      </div>
    },
    {
      dot: <span className={styles.dotCurrent} />,
      children: <div className={styles.contentCurrent}>
        <span className={styles.data}>18/06</span>
        <span className='text-with-underline' style={{fontSize: 20}}>Busking Competition</span>
      </div>
    },
    {
      dot: <span className={styles.dotFuture} />,
      children: <div className={styles.contentFuture}>
        <span className={styles.data}>19/06</span>
        <span className={styles.detail}>Random Dance</span>
      </div>
    },
    {
      dot: <span className={styles.dotFuture} />,
      children: <div className={styles.contentFuture}>
        <span className={styles.data}>22/06</span>
        <span className={styles.detail}>Magic time</span>
      </div>
    },
    {
      dot: <span className={styles.dotFuture} />,
      children: <div className={styles.contentFuture}>
        <span className={styles.data}>24/06</span>
        <span className={styles.detail}>Feel the Instrument</span>
      </div>
    },
    {
      dot: <span className={styles.dotFuture} />,
      children: <div className={styles.contentFuture}>
        <span className={styles.data}>25/06</span>
        <span className={styles.detail}>A New Me</span>
      </div>
    },
  ]
  const buskerItems = [
    {
      dot: <span className={styles.dotPast} />,
      children: <div className={styles.contentPast}>
        <span className={styles.data}>10:00</span>
        <span className={styles.detail}>dkjfahjd</span>
      </div>
    },
    {
      dot: <span className={styles.dotCurrent} />,
      children: <div className={styles.contentCurrent}>
        <span className={styles.data}>11:00</span>
        <span className='text-with-underline' style={{fontSize: 20}}>Leicester Square</span>
      </div>
    },
    {
      dot: <span className={styles.dotFuture} />,
      children: <div className={styles.contentFuture}>
        <span className={styles.data}>12:00</span>
        <span className={styles.detail}>Chinatown</span>
      </div>
    },
    {
      dot: <span className={styles.dotFuture} />,
      children: <div className={styles.contentFuture}>
        <span className={styles.data}>13:00</span>
        <span className={styles.detail}>Covent Garden</span>
      </div>
    },
    {
      dot: <span className={styles.dotFuture} />,
      children: <div className={styles.contentFuture}>
        <span className={styles.data}>15:00</span>
        <span className={styles.detail}>Bond Street</span>
      </div>
    },
  ]
  return (
    <Timeline
      className='schedule-timeline'
      items={type === 'Event' ? eventItems : buskerItems}
    />
  )
}

const PersonBlock = () => {
  return (
    <div className={styles.personBlock}>
      <Image
        src={'/singer-14.png'}
        alt={'/singer-14.png'}
        width={120}
        height={120}
        priority
      />
      <div className={styles.infoBlock}>
        <span className={styles.name}>Chris Mezy</span>
        <span className={styles.info}>
          <span className={styles.type}>Magician</span>
          <span style={{flex: 1}}/>
          <Image
            src={'/map-2.svg'}
            alt={'/map-2.svg'}
            width={26}
            height={26}
            priority
          />
        </span>
      </div>
    </div>
  )
}

const BuskerRightContent = () => {
  const [segmentValue, setSegmentValue] = useState('Event')
  return <div>
    <div className={styles.codeConduct}>
      <div className={styles.header}>
        <WarningFilled style={{color: '#F0D20C', marginRight: 8}}/>
        <span>Code of Conduct</span>
      </div>
      <ul className={styles.content}>
        {codeConductTexts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className={styles.contentSwitch}>
      <Segmented
        block
        options={['Event', 'Busker']}
        onChange={(value) => setSegmentValue(value as string)}
        className="map-segment"
      />
    </div>
    {segmentValue === 'Event' && (
      <div className={styles.selectItem} style={{ marginBottom: 36, marginTop: 44 }}>
        <EnvironmentFilled className={styles.locationIcon} />
        <span>Leicester Square</span>
      </div>
    )}
    {segmentValue === 'Busker' && <PersonBlock />}
    {segmentValue === 'Event' && <ScheduleTimeline type={segmentValue}/>}
    {segmentValue === 'Busker' && <div className={styles.scheduleBlock}>
      <div className={styles.header}>SCHEDULE</div>
      <div className={styles.content}>
        <ScheduleTimeline type={segmentValue}/>
      </div>
    </div>}
  </div>
}

const AudienceRightContent = () => {
  const router = useRouter();
  const defaultDate = dayjs(new Date());
  const dateFormat = 'ddd, MMM DD YYYY'

  const [currentDate, setCurrentDate] = useState(defaultDate)
  const [bookOptions, setBookOptions] = useState([
    defaultDate.subtract(1, 'day').date(),
    defaultDate.date(),
    defaultDate.add(1, 'day').date(),
  ])

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
  const onBook = () => {
    router.push('/application')
  }
  return <div>
    <div className={styles.selectItem}>
      <DatePicker defaultValue={defaultDate} className="map-date-selector" onChange={onDateChange} allowClear={false} />
      <span>{currentDate.format(dateFormat)}</span>
    </div>
    <div className={styles.selectItem}>
      <EnvironmentFilled className={styles.locationIcon} />
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
  </div>
}

const MapPage: FC = () => {
  const [type, setType] = useState('')
  useEffect(()=>{
    setType(localStorage.getItem('userInfo') || '')
  },[])

  return (
    <div className={classnames(styles.FAQPage)}>
      <Row gutter={90} className={styles.container}>
        <Col span={16} className={styles.leftContainer}>
          <div className={styles.MapBlock}>
            <Image
              style={{ width: '100%' }}
              src='/map-1.png'
              alt='/map-1.png'
              width={1000}
              height={792}
              priority
            />
          </div>
        </Col>
        <Col span={8} className={styles.rightContainer}>
          {type === 'busker' ? <BuskerRightContent /> : <AudienceRightContent />}
        </Col>
      </Row>
    </div>
  )
}

export default MapPage;