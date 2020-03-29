import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';

import {
    ToastContainer,
} from 'react-toastify';

const Dashboards = lazy(() => import('../../DemoPages/Dashboards'));

const Widgets = lazy(() => import('../../DemoPages/Widgets'));
const Charts = lazy(() => import('../../DemoPages/Charts'));

const AppMain = () => {

    return (
      <Fragment>
        {/* Components */}

        {/* Forms */}

        {/* Charts */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <h6 className="mt-3">
                  Loading
                  {/* <small>
                    Because this is a demonstration we load at once all the
                    Charts examples. This wouldn't happen in a real live app!
                  </small> */}
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/charts" component={Charts} />
        </Suspense>

        {/* Tables */}

        {/* Elements */}

        {/* Dashboard Widgets */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <h6 className="mt-3">
                  Loading
                  {/* <small>Because this is a demonstration we load at once all the Dashboard Widgets examples. This wouldn't happen in a real live app!</small> */}
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/ai" component={Widgets} />
        </Suspense>

        {/* Dashboards */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <h6 className="mt-3">
                  Loading
                  {/* <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small> */}
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/dashboards" component={Dashboards} />
        </Suspense>

        <Route
          exact
          path="/"
          render={() => <Redirect to="/dashboards/basic" />}
        />
        <ToastContainer />
      </Fragment>
    );
};

export default AppMain;