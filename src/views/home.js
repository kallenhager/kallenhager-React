import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>kallenhager</title>
        <meta property="og:title" content="kallenhager" />
      </Helmet>
      <div className={styles['Main']}>
        <div className={styles['White-Card']}>
          <div className={styles['container1']}>
            <img
              alt="image"
              src="/playground_assets/0kallen-1500h.jpg"
              className={styles['image']}
            />
            <div className={styles['container2']}>
              <span className={` ${styles['text']} ${projectStyles['hi']} `}>
                <span>Hi, I&apos;m Kallen</span>
              </span>
              <div className={styles['container3']}>
                <span className={projectStyles['headingText']}>
                  <span>
                    I&apos;m an aspiring data scientist with interests in
                    consumer behavior, emotional processing, and health. Last
                    May I completed a B.S. in Biomedical Sciences and B.A. in
                    Psychology from the University of South Florida.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>Here&apos;s what I&apos;ve been working on:</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['White-Card1']} ${projectStyles['projectbox']} `}
        >
          <div className={styles['Format-Card']}>
            <div className={styles['Text-Container']}>
              <span
                className={` ${styles['Text08']} ${projectStyles['card-Heading']} `}
              >
                <span>Metacritic Scrape</span>
              </span>
              <span className={projectStyles['card-Text']}>
                <span>
                  Scraping data to answer the following questions for PC games:
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
                <span>
                  Should a videogame publisher/developer pay attention to critic
                  reviews?
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Which critic&apos;s scores correlate best with sales?
                </span>
              </span>
              <span className={styles['text21']}>
                <span>Github</span>
                <span>&amp;#8203;</span>
                <br></br>
                <span></span>
              </span>
            </div>
            <div className={styles['Image1']}>
              <img
                alt="image"
                src="/playground_assets/scraper-1200w.png"
                className={styles['image2']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['White-Card2']} ${projectStyles['projectbox']} `}
        >
          <div className={styles['Format-Card1']}>
            <div className={styles['Text-Container1']}>
              <span
                className={` ${styles['Text26']} ${projectStyles['card-Heading']} `}
              >
                <span>Metacritic Scrape</span>
              </span>
              <span className={projectStyles['card-Text']}>
                <span>
                  Scraping data to answer the following questions for PC games:
                  Should a videogame publisher/developer pay attention to critic
                  reviews? Which critic&apos;s scores correlate best with sales?
                </span>
              </span>
            </div>
            <div className={styles['Image3']}>
              <img
                alt="image"
                src="/playground_assets/scraper-1200w.png"
                className={styles['image4']}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Sidebar']}>
        <nav className={` ${styles['Nav']} ${projectStyles['navbar']} `}>
          <span
            className={` ${projectStyles['navbar-Item']} ${projectStyles['navitem']} `}
          >
            METACRITIC SCRAPE &amp; ANALYIS
          </span>
          <span
            className={` ${styles['text31']} ${projectStyles['navbar-Item']} ${projectStyles['navitem']} ${projectStyles['navbar-Item']} `}
          >
            IMPLICIT ATTITUDES ERP EXAMINATION
          </span>
          <span
            className={` ${styles['text32']} ${projectStyles['navbar-Item']} ${projectStyles['navitem']} ${projectStyles['navbar-Item']} `}
          >
            MINOR CANNABINIODS REVIEW
          </span>
        </nav>
      </div>
    </div>
  )
}

export default Home
