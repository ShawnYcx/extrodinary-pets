import React from 'react';
import Layout from '../../components/Layout';
import GalleryRoll from '../../components/GalleryRoll';

const GalleryIndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="title">Featured</div>
            </div>
          </div>
          <hr />
          <GalleryRoll />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="title">Gallery</div>
            </div>
          </div>
          <hr />
          <GalleryRoll />
        </div>
      </section>
    </Layout>
  )
}

export default GalleryIndexPage