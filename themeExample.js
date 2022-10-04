

import React from 'react';
import { Layout, Notecard } from 'theme';

export default function themeExample() {

  return (
    <Layout>
      <div className="doc-container">
        <h3 className="doc-container-header">Google Doc</h3>
        {data.hits.map(item => (
          <Doc
            header={item.title}
            body={item.points}
            />
        ))}
      </div>
      <div className="zettel-container">
        <h3 className="zettel-container-header">Zettels</h3>
        {data.hits.map(item => (
          <Notecard
            title={(item.title).substr(0, 28) + '...'}
            description={item.author}
            tags={item._tags}
            />
        ))}
      </div>
    </Layout>
  )
}