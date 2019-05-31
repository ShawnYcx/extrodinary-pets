import React from 'react';
import Layout from '../../components/Layout';
import GalleryRoll from '../../components/GalleryRoll';

import { FaTh, FaAlignJustify } from 'react-icons/fa';

const GalleryIndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="title">Featured</div>
            </div>
            {/* <div className="column is-4 has-text-right">
              <a className="button is-active"><FaTh /></a>
              <a className="button"><FaAlignJustify /></a>
            </div> */}
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
            {/* <div className="column is-4 has-text-right">
              <a className="button is-active"><FaTh /></a>
              <a className="button"><FaAlignJustify /></a>
            </div> */}
          </div>
          <hr />
          <GalleryRoll />
        </div>
      </section>
    </Layout>
  )
}

export default GalleryIndexPage