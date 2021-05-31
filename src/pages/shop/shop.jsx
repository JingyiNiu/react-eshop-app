import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.config";

import { updateCollections } from "../../redux/shop/shop.actions";

// pass CollectionsOverview component to WithSpinner
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// Route could pass match, location and history as props
// 'match.path' = '/shop' but in a more relative way
class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`} // shop page itself. It shows CollectionsOverview component which contains 4 CollectionPreviews
          render={(props) => ( // pass loading status and all the other props
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`} // navigate to each corresponding category as per the collection id
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
