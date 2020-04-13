import React from 'react'
import {
  FaSave,
  FaUndoAlt,
  FaRedoAlt,
  FaWindowClose,
  FaAngleLeft,
  FaAngleRight,
  FaEject,
  FaCopy,
  FaPaste,
  FaBrush,
  FaAngleDown
} from "react-icons/fa"
import DataTable from './core/data-table'

function App() {
  return (
    <div className="exl-core">
      <header className="exl-header">
        <div className="exl-header__base">
          <div className="exl-hbase-main">
            <button className="spx-btn spx-btn--sd spx-btn--circle spx-btn--sm">
              <FaSave />
            </button>
            <button className="spx-btn spx-btn--sd spx-btn--circle spx-btn--sm">
              <FaUndoAlt />
            </button>
            <button className="spx-btn spx-btn--sd spx-btn--circle spx-btn--sm">
              <FaRedoAlt />
            </button>
            <button className="spx-btn spx-btn--sd spx-btn--circle spx-btn--sm">
              <FaEject />
            </button>
          </div>
          <div className="exl-hbase-ext">Book1 - Excel</div>
          <div className="exl-hbase-window">
            <button className="spx-btn spx-btn--sd spx-btn--circle spx-btn--sm">
              <FaWindowClose />
            </button>
          </div>
        </div>
        <div className="exl-header__addons">
          <div className="exl-tab-bar">
            <div className="exl-tab-bar__base">
              <button>File</button>
              <button className="is-active">Insert</button>
              <button>Page Layout</button>
              <button>Formulas</button>
              <button>Review</button>
            </div>
            <div className="exl-tab-bar__ext">
              <button>Share</button>
            </div>
          </div>
        </div>
      </header>
      <div className="exl-addons-panel">
        <div className="exl-adn">
          <div>
            <div className="exl-ado exl-ado--col2">
              <div className="exl-ado__col exl-ado-lgicn">
                <FaCopy />
              </div>
              <div className="exl-ado__col">
                <div><FaPaste /></div>
                <div><FaWindowClose /></div>
              </div>
            </div>
          </div>
          <div>
            <div className="exl-ado exl-ado--col2">
              <div className="exl-ado__col flex1">
                <FaAngleDown />
              </div>
              <div className="exl-ado__col">
                <div><FaBrush /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="exl-adn">
          <div>
            <div className="exl-ado exl-ado--col2">
              <div className="exl-ado__col">
                <div className="spx-select">
                  <select>
                    <option value="helvetica">Helvetica</option>
                  </select>
                </div>
              </div>
              <div className="exl-ado__col">
                <div className="spx-select">
                  <select>
                    <option value="10">10</option>
                    <option value="10">10</option>
                    <option value="10">10</option>
                    <option value="10">10</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="exl-main ag-theme-balham">
        <DataTable />
      </main>
      <div className="exl-main-control">
        <div className="exl-main-control__actions">
          <button className="spx-btn spx-btn--sd--inverted spx-btn--circle spx-btn--xsm" disabled>
            <FaAngleLeft />
          </button>
          <button className="spx-btn spx-btn--sd--inverted spx-btn--circle spx-btn--xsm">
            <FaAngleRight />
          </button>
        </div>
        <div className="exl-main-control__tabs">
          <div className="exl-tab-bar exl-tab-bar--sd">
            <div className="exl-tab-bar__base">
              <button>sheet 1</button>
              <button className="is-active">sheet 2</button>
            </div>
          </div>
        </div>
      </div>
      <div className="exl-p-control">
        <div className="exl-p-control__status">
          Ready
        </div>
        <div className="exl-p-control__opts">
          <div className="exl-size-slider">
            <div>-</div>
            <div>
              <div className="spx-range-slider">
                <input type="range" defaultValue="10" min="0" max="100" step="1" />
              </div>
            </div>
            <div>+</div>
          </div>
          <div>100%</div>
        </div>
      </div>
    </div>
  );
}

export default App;
