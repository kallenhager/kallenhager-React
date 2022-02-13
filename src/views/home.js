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
      <div id="main" className={styles['Main']}>
        <div id="hi" className={styles['Container01']}></div>
        <header id="header" className={styles['White-Card']}>
          <div className={styles['container02']}>
            <img
              alt="image"
              src="/playground_assets/0kallen-300h.jpg"
              className={styles['image']}
            />
            <div className={styles['container03']}>
              <span className={` ${styles['text']} ${projectStyles['hi']} `}>
                <span>Hi, I&apos;m Kallen</span>
              </span>
              <div className={styles['container04']}>
                <span
                  className={` ${styles['text02']} ${projectStyles['headingText']} `}
                >
                  <span>
                    I&apos;m a data nerd interested in consumer behavior,
                    emotional processing, and health. Last May I completed a
                    B.S. in Biomedical Sciences and B.A. in Psychology from the
                    University of South Florida.
                  </span>
                </span>
              </div>
              <div className={styles['Links']}>
                <a
                  href="https://www.linkedin.com/in/kallenhager/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={` ${styles['link']} ${projectStyles['headerLink']} `}
                >
                  LinkedIn
                </a>
                <span
                  className={` ${styles['text04']} ${projectStyles['headingText']} `}
                >
                  <span>|</span>
                </span>
                <a
                  href="https://github.com/kallenhager"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={` ${styles['link01']} ${projectStyles['headerLink']} `}
                >
                  Github
                </a>
              </div>
              <div className={styles['container05']}>
                <span
                  className={` ${styles['text06']} ${projectStyles['headingText']} `}
                >
                  <span>Here&apos;s what I&apos;ve been working on:</span>
                </span>
              </div>
            </div>
          </div>
        </header>
        <div
          id="metacritic"
          className={` ${styles['White-Card1']} ${projectStyles['projectbox']} `}
        >
          <div className={styles['Format-Card']}>
            <div className={styles['Text-Container']}>
              <a
                href="https://github.com/kallenhager/metacritic_scraper"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['Title']} ${projectStyles['card-Heading']} `}
              >
                <span>Metacritic Scrape &amp; ANalysis</span>
              </a>
              <span className={projectStyles['card-Text']}>
                <span>
                  I scraped critic scores from Metacritic to answer the
                  following questions:
                </span>
                <br></br>
                <span></span>
                <br></br>
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
              <div className={styles['container06']}>
                <a
                  href="https://github.com/kallenhager/metacritic_scraper"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={` ${styles['Link02']} ${projectStyles['link']} `}
                >
                  <span className={styles['text19']}>Github</span>
                </a>
              </div>
            </div>
            <div className={styles['Image1']}>
              <a
                href="https://github.com/kallenhager/metacritic_scraper"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link03']}
              >
                <img
                  alt="image"
                  src="/playground_assets/scraper-1200w.png"
                  className={styles['image2']}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          id="erp"
          className={` ${styles['White-Card2']} ${projectStyles['projectbox']} `}
        >
          <div className={styles['Format-Card1']}>
            <div className={styles['Text-Container1']}>
              <a
                href="https://docs.google.com/document/d/1vtWn-o7sblhUrK1HUBInWz8Kg9bGAFtm/edit?usp=sharing&amp;ouid=106166205784524408384&amp;rtpof=true&amp;sd=true"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['Title1']} ${projectStyles['card-Heading']} `}
              >
                <span>
                  Implicit and Explicit Attitudes Toward LGBT Individuals - An
                  ERP Examination Using Responses to Emotional Images and Reward
                </span>
              </a>
              <span className={projectStyles['card-Text']}>
                <span>
                  This is my undergraduate thesis project. I cleaned up some
                  data in from an incomplete EEG experiment on homonegativity,
                  prejudice, and sexual imagery. I used R and SPSS to examine
                  correlations between valence rated images and proposed
                  implicit measures of sexual prejudice
                </span>
              </span>
              <div className={styles['container07']}>
                <a
                  href="https://docs.google.com/document/d/1vtWn-o7sblhUrK1HUBInWz8Kg9bGAFtm/edit?usp=sharing&amp;ouid=106166205784524408384&amp;rtpof=true&amp;sd=true"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={` ${styles['Link04']} ${projectStyles['link']} `}
                >
                  GooGle DoCs
                </a>
              </div>
            </div>
            <div className={styles['Image3']}>
              <a
                href="https://docs.google.com/document/d/1vtWn-o7sblhUrK1HUBInWz8Kg9bGAFtm/edit?usp=sharing&amp;ouid=106166205784524408384&amp;rtpof=true&amp;sd=true"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link05']}
              >
                <img
                  alt="image"
                  src="/playground_assets/screenshot%202022-02-10%20190249-1200w.png"
                  className={styles['image4']}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          id="review"
          className={` ${styles['White-Card3']} ${projectStyles['projectbox']} `}
        >
          <div className={styles['Format-Card2']}>
            <div className={styles['Text-Container2']}>
              <a
                href="https://1drv.ms/w/s!Ai843pWZk8qtgfpOsdHPa2Nm0m-ezA?e=0UVF17"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['Title2']} ${projectStyles['card-Heading']} `}
              >
                <span>
                  Reviewing the therapeutic potential of selected minor
                  cannabinoids
                </span>
              </a>
              <span className={styles['text24']}>
                <span>
                  With the passage of 2018 Agriculture Improvement Act the
                  United States legalized the all cannabis-derived cannabinoids
                  apart from delta-9-THC. These minor cannabinoids are now being
                  sold and utilized in concentrations higher than ever seen
                  before in whole-plant preparations. Minor cannabinoid products
                  currently available to the public demonstrate considerable
                  therapeutic potential relevant to a wide variety of
                  conditions. As a class of compounds, they share many
                  therapeutic effects (anti-inflammatory, anti-epileptic).
                  However, it is clear that different cannabinoids possess
                  relatively unique effects, and that some of these effects are
                  in direct opposition to one another (hyperphagia, hypophagia).
                  Differential affinities for and actions at multiple receptors,
                  namely CB1 and CB2, seem to be responsible for these
                  contradictory effects. While the evidence for the therapeutic
                  potential of these minor cannabinoids is promising, more
                  research is needed before any of these products can be
                  confidently recommended by clinicians.
                </span>
              </span>
              <div className={styles['container08']}>
                <a
                  href="https://1drv.ms/w/s!Ai843pWZk8qtgfpOsdHPa2Nm0m-ezA?e=0UVF17"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={` ${styles['Link06']} ${projectStyles['link']} ${projectStyles['link']} `}
                >
                  WORD ONLINE
                </a>
              </div>
            </div>
            <div className={styles['Image5']}>
              <a
                href="https://1drv.ms/w/s!Ai843pWZk8qtgfpOsdHPa2Nm0m-ezA?e=0UVF17"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link07']}
              >
                <img
                  alt="image"
                  src="/playground_assets/screenshot%202022-02-10%20200121-1200w.png"
                  className={styles['image6']}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          id="backtoptop"
          className={` ${styles['White-Card4']} ${projectStyles['backtotop']} ${projectStyles['projectbox']} `}
        >
          <div className={styles['Format-Card3']}>
            <div className={styles['container09']}>
              <a href="#hi" className={projectStyles['bottomlink']}>
                <span>Back to TOP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Sidebar']}>
        <nav className={styles['Nav']}>
          <div className={styles['container10']}>
            <a
              href="#metacritic"
              className={` ${projectStyles['navbar-Item']} ${projectStyles['navitem']} ${projectStyles['navbar-Item']} `}
            >
              METACRITIC SCRAPE &amp; ANALYIS
            </a>
            <a
              href="#erp"
              className={` ${styles['link10']} ${projectStyles['navbar-Item']} ${projectStyles['navitem']} ${projectStyles['navbar-Item']} `}
            >
              IMPLICIT ATTITUDES ERP EXAMINATION
            </a>
            <a
              href="#review"
              className={` ${styles['link11']} ${projectStyles['navbar-Item']} ${projectStyles['navitem']} ${projectStyles['navbar-Item']} `}
            >
              MINOR CANNABINIODS REVIEW
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Home
