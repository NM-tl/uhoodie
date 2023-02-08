import ReactFullpage from "@fullpage/react-fullpage";
import './App.css';
import './index.css';

import First from "./components/First/First";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";

const anchors = ["firstPage", "secondPage", "thirdPage"];

function App() {
  return (
    <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["var(--dark)","var(--light)","var(--dark)" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
          <div>
            <First />
            <Second />
            <Third />
          </div>
      );
    }}
  />
  );
}

export default App;
