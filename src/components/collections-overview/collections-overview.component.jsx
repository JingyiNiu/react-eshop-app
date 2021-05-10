import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.style.scss";

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {/* CollectionsOverview component shows CollectionPreview component for each collection */}
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

// pass state.shop.collections as an array to props(collections)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
