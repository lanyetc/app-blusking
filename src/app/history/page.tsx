"use client"

import { FC } from "react"
import Image from 'next/image'
import styles from './index.module.css'
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";
import { Row } from "antd";

const Transparent_BG_Pages = [
  '/music-festival'
]

const ImageItem = (props: any) => {
  const { imgSrc, width, height, tips, style } = props;
  return (
    <div className={styles.imageItem} style={style}>
      <Image src={imgSrc} alt={imgSrc} width={width} height={height} priority />
      <div className={styles.tips}>{tips}</div>
    </div>
  )
}

const HistoryPage: FC = () => {
  const sectionList = [
    {
      imgSrc: '/history-1.png',
      width: 938,
      height: 370,
      position: 'left',
      tips: 'Hogarth’s 1741 engraving The Enraged Musician',
      year: '1741',
      content: `London in the 1800s. Buskers (called “street musicians”) were met with fierce opposition by some, 
        but with sympathy by others. For many social commentators, 
        street musicians were just another source of “noise”. 
        At the time, the streets were full of the noise: 
        of horses’ hooves on cobbled streets and the shouting (called ‘crying’) of costermongers selling vegetables, 
        fruit and fish. For some, bands and singers were considered to be just another source of annoyance.`
    },
    {
      imgSrc: '/history-2.jpg',
      width: 938,
      height: 418,
      position: 'right',
      tips: '1850s buskers on the bustling London street',
      year: '1850',
      content: `In the bustling streets of 1850 London, 
        busking was a vibrant and ubiquitous form of entertainment that captured the essence of the era. 
        Buskers, often dressed in elaborate costumes, 
        drew crowds of passersby who were eager to be entertained and whisked away from the daily grind. 
        These impromptu performances not only offered moments of respite for the bustling urban population 
        but also contributed to the rich tapestry of London's cultural heritage, 
        embodying the spirit of creativity and spontaneity that defined the Victorian era.`
      
    },
    {
      imgSrc: '/history-3.jpg',
      width: 938,
      height: 512,
      position: 'left',
      tips: 'Gurney Journey: 1903 movie of London street scenes',
      year: '1903',
      content: `In 1903, the vibrant streets of London bore witness to the nascent yet captivating art form of busking. 
        Musicians, jugglers, and various performers took to the bustling thoroughfares, 
        using their talents to captivate passersby and earn a livelihood. 
        These intrepid entertainers transformed public spaces into impromptu stages, 
        adding a touch of magic and spontaneity to the urban landscape. 
        Their performances ranged from melodic tunes played on traditional instruments to mesmerizing 
        displays of skill and dexterity. As the iconic red double-decker buses began to ply the streets, 
        busking became intricately woven into the fabric of London's cultural scene, 
        setting the stage for a tradition that would continue to evolve and enchant through the decades.`
    },
    {
      imgSrc: '/history-4.jpg',
      width: 938,
      height: 528,
      position: 'right',
      tips: 'Violin and organ, 1955',
      year: '1950',
      content: `In 1950s London, busking took on a vibrant and captivating role in the city's cultural tapestry. 
        Musicians, poets, and performers found their creative haven on street corners, 
        bustling squares, and charming alleyways. The post-war era saw a resurgence of artistic expression,
        with individuals using their talents to bring joy and entertainment to passersby. 
        From the soulful melodies of wandering troubadours to the energetic tap dancing routines, 
        these street performances encapsulated the spirit of the times. 
        Whether it was the lively strumming of guitars or the heartfelt recitation of poems, 
        1950s London busking not only added a touch of magic to daily life 
        but also fostered a sense of unity among the diverse crowds 
        that gathered to witness these impromptu displays of artistry.`
    },
    {
      imgSrc: '/history-5.jpg',
      width: 938,
      height: 534,
      position: 'left',
      tips: 'String quartet at Bond Street, 1979',
      year: '1980',
      content: `The 1980s marked a vibrant era in London's busking history, 
        with the city's streets echoing with a diverse array of musical talents and performances. 
        Buskers became an integral part of the urban landscape, 
        drawing crowds and infusing the bustling streets with their creative energy. 
        From the soulful melodies of acoustic guitarists to the rhythmic beats of breakdancers 
        and the enchanting tunes of violinists, London's busking scene encapsulated the spirit of the times. 
        The iconic Covent Garden became a hub for these street performers, 
        where skilled artists showcased their skills to captivated audiences. 
        This era not only enriched the cultural fabric of London 
        but also contributed to shaping the global image of street performance, 
        leaving an indelible mark on the city's musical and artistic heritage.`
    },
    {
      imgSrc: '/history-6.jpg',
      width: 938,
      height: 504,
      position: 'right',
      tips: 'Bubble burst: street entertainer Steves Szczepan Atroszko performs outside the Natural History Museum',
      year: '2019',
      content: `In 2019, London's bustling streets came alive with the vibrant and diverse sounds of busking performances, 
        creating a rich tapestry of musical experiences for both locals and visitors. 
        From the iconic Covent Garden to the historic Southbank Centre, 
        talented artists from various genres gathered to share their passion and creativity. 
        The year witnessed an array of performances 
        that ranged from soul-stirring acoustic melodies to energetic street dance routines, 
        captivating audiences and turning ordinary corners into impromptu stages. 
        London's busking scene in 2019 showcased the city's enduring musical heritage 
        and its commitment to providing a platform for emerging artists to shine amidst the urban rhythm.`
    },
  ]
  return (
    <div className={classnames(styles.historyPage)}>
      <header className={styles.header}>
        <h1>History</h1>
        <div className={styles.description}>
          Busking has a long and rich history that dates back to ancient times.
          Today, busking is still a popular form of entertainment around the world,
          with many cities and towns hosting festivals and events dedicated to street performance.
        </div>
      </header>
      {sectionList.map((item, index) => (
        <Row key={index} className={classnames(styles.container, {[styles.rowReverse]: item.position==='right'})}>
          <ImageItem imgSrc={item.imgSrc} width={item.width} height={item.height} tips={item.tips} style={{textAlign: item.position}} />
          <div className={classnames(styles.content, item.position==='left' ? styles.left : styles.right)}>
            <div className={styles.title}>{item.year}</div>
            <div className={styles.text}>{item.content}</div>
          </div>
        </Row>
      ))}
    </div>
  )
}

export default HistoryPage;