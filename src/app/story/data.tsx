interface StoryItem {
  imgSrc: string,
  width: number,
  height: number,
  position: 'right' | 'left',
  bacground: string,
  color?: string,
  title: string,
  content: string[],
}

export const storiesData: StoryItem[] = [
  {
    imgSrc: '/story-2.png',
    width: 818,
    height: 612,
    position: 'left',
    bacground: '#F1EFDB',
    color: '#000000',
    title: '2023 Covent Garden Performing competition',
    content: [
      `Since the 1660s Covent Garden has never missed a chance to put on a performance. 
      The first record of Covent Garden street entertainment came in 1662, 
      when Samuel Pepys’ diary notes that a marionette show featuring a character named Punch took place on the Piazza. 
      Today, the custom continues.`,
      `In the vibrant atmosphere of 2023 Covent Garden, 
      anticipation and excitement are palpable as the annual Performing Arts Competition takes center stage. 
      Musicians, dancers, magicians, and an array of talented artists 
      from all corners of the globe converge to showcase their skills in this prestigious event. 
      Covent Garden's historic cobblestone streets transform into a mesmerizing display of creativity and passion, 
      with captivating melodies, intricate choreography, and awe-inspiring feats captivating the gathered audience. 
      As the competition unfolds, a sense of camaraderie among performers is palpable, 
      fostering an environment of mutual appreciation for the arts. 
      The event not only celebrates the diverse range of talents 
      but also serves as a testament to the enduring allure of live performances 
      in an ever-evolving world.`
    ]
  },
  {
    imgSrc: '/story-3.jpg',
    width: 820,
    height: 470,
    position: 'right',
    bacground: '#000000',
    title: `Buskers' JamFest 2023`,
    content: [
      `The annual "Buskers' JamFest," held on September 8, 2019, 
      in various popular locations across London, provided a delightful showcase of artistic expression 
      and street performance. Talented buskers from across the city gathered to participate, 
      delivering an eclectic range of performances that included mesmerizing guitar solos, 
      dynamic breakdancing routines, and soul-stirring vocal harmonies.`,
      `The event offered something for everyone, 
      with children delighted by interactive drum circles and adults swaying to the rhythm of jazz ensembles. 
      "Buskers' JamFest" not only entertained but also highlighted the crucial role of busking 
      in promoting a vibrant cultural atmosphere. 
      This event served as a reminder of how the streets can become stages, 
      fostering a unique and spontaneous connection between performers 
      and the diverse audience that gathered to appreciate their craft.`
    ]
  },
  {
    imgSrc: '/story-4.png',
    width: 822,
    height: 562,
    position: 'left',
    bacground: '#F1EFDB',
    color: '#000000',
    title: `2023 International Busking Day`,
    content: [
      `On International Busking Day, 
      the lively streets of cities around the world transformed into vibrant stages of creativity 
      and expression. Musicians, dancers, 
      and artists of all kinds gathered to celebrate the art of busking, 
      captivating passersby with their talents. 
      In bustling squares, picturesque parks, and charming alleyways, 
      the atmosphere was alive with the rhythms of diverse cultures and genres.`,
      `International Busking Day provided a unique opportunity for performers 
      to connect with their audiences on a personal level, 
      fostering a sense of community and appreciation for the arts. 
      From soulful guitar strums to mesmerizing dance routines, 
      the day was a testament to the power of street performance in bringing joy 
      and unity to people from all walks of life. `,
      `The shared experience of enjoying these impromptu performances 
      fostered a sense of camaraderie among spectators, 
      creating moments of joy, surprise, and connection. 
      International Busking Day highlighted the remarkable ability of street performances 
      to transcend language barriers and cultural differences, 
      reminding us all of the universal language of art that can bring people closer together.`
    ]
  },
]