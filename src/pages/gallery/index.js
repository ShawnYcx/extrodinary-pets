import React from 'react';
import Layout from '../../components/Layout';
import GalleryRoll from '../../components/GalleryRoll';

const GalleryIndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <GalleryRoll />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GalleryIndexPage