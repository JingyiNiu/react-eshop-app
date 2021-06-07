import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

// pull fetching state from state
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching, // isLoading的明明根据WithSpinner的props
});

const CollectionsOverviewContainer = compose( // 相当于connect(mapStateToProps)(WithSpinner(CollectionsOverview))
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
