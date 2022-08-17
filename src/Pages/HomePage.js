import { CircularProgress } from "@material-ui/core";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Banner from "../Components/Banner/Banner";
import ErrorFallback from "../Components/ErrorBoundary";
const CoinsTable = React.lazy(()=>import("../Components/CoinsTable"))


const Homepage = () => {
  return (
    <div>
      <Banner />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>

      <Suspense fallback={<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><CircularProgress
            style={{ color: "#009ad1" }}
            size={250}
            thickness={1}
            /></div> }>  
      <CoinsTable />
      </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Homepage;
