
import Header from "./component/Header";
import FeatureMovie from "./component/FeatureMovie";
import MediaList from "./component/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "./libs/constants";

function App() {
  return (
    <div>
     <Header/>
    <FeatureMovie/>
    <MediaList title="Trending" tabs={TRENDING_TABS}/>
    <MediaList title="Top Rated" tabs={TOP_RATED_TABS }/>

    </div>
  );
}

export default App;
