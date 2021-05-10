import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection';

// Route could pass match, location and history as props
// 'match.path' = '/shop' but in a more relative way
const ShopPage = ({ match  }) => (
  <div className='shop-page'>
    {/* navigate to shop page. It shows CollectionsOverview component */}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    {/* navigate to each corresponding category as per the collection id */}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
