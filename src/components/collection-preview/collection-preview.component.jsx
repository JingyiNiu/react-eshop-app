import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      {/* CollectionPreview component shows the name of collection and 4 items of each collection */}
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
