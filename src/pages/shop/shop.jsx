import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  // Route could pass match, location and history as props
  // 'match.path' = '/shop' but in a more relative way
  render() {
    const { match, isCollectionLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`} // shop page itself. It shows CollectionsOverview component which contains 4 CollectionPreviews
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`} // navigate to each corresponding category as per the collection id
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
