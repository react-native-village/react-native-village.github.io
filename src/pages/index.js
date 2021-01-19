/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import YouTube from 'react-youtube'
import Head from '@docusaurus/Head'
import styles from './styles.module.css'

const features = [
  {
    title: <>Решаем проблемы</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        В процессе обучения вы можете описать свои проблемы и получить на них квалифицированную помощь от менторов
        курса.
      </>
    )
  },
  {
    title: <>Даем практику и трудоустраиваем лучших</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        После прохождения нашего курса и практики в стеке Java Script, Type Script, React Native, AWS Amplify, в нашем
        стартапе, отличившихся студентов ждет трудоустройство в нашу компанию или компании партнеров.
      </>
    )
  },
  {
    title: <>Открыл знание, открой его другому</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Это золотое правило в нашей школе, так как благодаря открытию знания кому-то еще оно усваивается крепче и так мы
        организуем команду менторов, где можешь быть и ты.
      </>
    )
  }
]

const Feature = ({ imageUrl, title, description }) => {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  const opts = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    }
  }
  // const imgUrl = useBaseUrl(imageUrl)
  const { player, videoContainer, heroBanner } = styles
  return (
    <>
      <Layout title={`${siteConfig.title}`} description="Java Script Camp - лагерь скаутов">
        <Head>
          <meta property="og:image" content="https://react-native-village.github.io/img/app.png" />
        </Head>
        <a href="https://www.patreon.com/javascriptcamp">
          <div className={classnames('image-container')}>
            <img src={useBaseUrl('img/jscamp/1.3.jpg')} alt="Java Script Camp" />
            <img src={useBaseUrl('img/jscamp/1.2.jpg')} alt="Java Script Camp" />
            <img src={useBaseUrl('img/jscamp/1.1.jpg')} alt="Java Script Camp" />
          </div>
        </a>

        <header className={classnames('hero hero--primary', heroBanner)}>
          <div className="container">
            <img src={useBaseUrl('img/jscamp/Покатушки по Джаваскриптушке.png')} alt="Покатушки по Джаваскриптушке" />
            {/* <h1 className="hero__title">Java Script Camp</h1> */}
            <p className="hero__subtitle">
              Лагерь скаутов от создателя первого в Рунете{' '}
              <a href="https://youtube.com/playlist?list=PLth6QPteH5guFUwQj1iCdu-SOZ7O5KCz4">курса по React Native</a> и
              первого русского блогера-программиста в программе{' '}
              <a href="https://aws.amazon.com/ru/developer/community/community-builders/">AWS Community Builders</a> от
              Амазон - Димки Реактнативного
            </p>

            <a href="https://www.patreon.com/javascriptcamp">
              <img src={useBaseUrl('img/jscamp/Button 10$.png')} alt="" />
            </a>
          </div>
        </header>
        <main>
          {features && features.length && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map(({ title, imageUrl, description }) => (
                    <Feature key={title} title={title} imageUrl={imageUrl} description={description} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
        <div className={videoContainer}>
          <YouTube videoId="A_i5-4FuuKw" opts={opts} className={player} />
        </div>

        <Program />

        <header className={classnames('hero hero--primary', heroBanner)}>
          <div className="container">
            <img src={useBaseUrl('img/jscamp/Покатушки по Джаваскриптушке.png')} alt="Покатушки по Джаваскриптушке" />
            {/* <h1 className="hero__title">Java Script Camp</h1> */}
            <p className="hero__subtitle">
              Лагерь скаутов от создателя первого в Рунете{' '}
              <a href="https://youtube.com/playlist?list=PLth6QPteH5guFUwQj1iCdu-SOZ7O5KCz4">курса по React Native</a> и
              первого русского блогера-программиста в программе{' '}
              <a href="https://aws.amazon.com/ru/developer/community/community-builders/">AWS Community Builders</a> от
              Амазон - Димки Реактнативного
            </p>

            <a href="https://www.patreon.com/javascriptcamp">
              <img src={useBaseUrl('img/jscamp/Button 10$.png')} alt="" />
            </a>
          </div>
        </header>
      </Layout>
    </>
  )
}

const Program = () => {
  return (
    <>
      <div className={classnames('image-container')}>
        <img src={useBaseUrl('img/jscamp/34.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/34.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/34.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/3.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/3.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/3.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/4.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/4.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/4.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/5.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/5.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/5.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/6.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/6.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/6.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/7.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/7.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/7.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/8.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/8.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/8.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/9.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/9.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/9.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/10.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/10.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/10.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/11.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/11.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/11.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/12.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/12.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/12.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/13.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/13.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/13.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/14.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/14.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/14.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/15.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/15.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/15.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/16.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/16.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/16.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/17.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/17.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/17.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/18.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/18.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/18.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/20.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/20.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/20.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/19.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/19.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/19.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/21.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/21.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/21.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/23.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/23.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/23.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/22.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/22.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/22.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/24.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/24.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/24.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/26.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/26.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/26.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/25.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/25.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/25.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/27.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/27.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/27.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/29.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/29.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/29.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/28.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/28.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/28.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/30.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/30.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/30.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/32.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/31.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/32.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/31.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/32.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/31.1.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/2.3.jpg')} alt="Java Script Camp" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/2.2.jpg')} alt="Java Script Camp" />
        <img src={useBaseUrl('img/jscamp/2.1.jpg')} alt="Java Script Camp" className="image-mobile" />
      </div>
    </>
  )
}

export default Home
