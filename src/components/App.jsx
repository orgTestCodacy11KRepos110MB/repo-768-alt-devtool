import AltContainer from 'alt/components/AltContainer'
import DispatcherSearchStore from '../stores/DispatcherSearchStore'
import DispatcherView from './DispatcherView.jsx'
import React from 'react'
import StoresStore from '../stores/StoresStore'
import StoresView from './StoresView.jsx'
import Tabs from 'react-simpletabs'

class App extends React.Component {
  render() {
    //    <i className="fa fa-dot-circle-o"></i> Record
    //    <i className="fa fa-pause"></i> Pause
    //    <i className="fa fa-play-circle"></i> Play
    //
    //    <i className="fa fa-recycle"></i> Recycle
    //    <i className="fa fa-refresh"></i> Refresh
    //    <i className="fa fa-filter"></i> Filter
    //    <i className="fa fa-history"></i> History
    //    <i className="fa fa-undo"></i> Undo
    return (
      <Tabs>
        <Tabs.Panel title="Dispatches">
          <AltContainer store={DispatcherSearchStore}>
            <DispatcherView />
          </AltContainer>
        </Tabs.Panel>
        <Tabs.Panel title="Stores">
          <AltContainer store={StoresStore}>
            <StoresView />
          </AltContainer>
        </Tabs.Panel>
        <Tabs.Panel title="Tools">
          <div className="sp-lg txt-center">
            <label>
              <button className="btn btn-lg bg-blue">
                Take Snapshot
              </button>
            </label>
            <label>
              <button className="btn btn-lg bg-red">
                Flush
              </button>
            </label>
          </div>
        </Tabs.Panel>
      </Tabs>
    )
  }
}

export default App
