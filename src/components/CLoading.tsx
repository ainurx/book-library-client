import React, { CSSProperties } from "react";
import { PacmanLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const overlayStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, 
    // pointerEvents: 'none'
  };

const CLoading: React.FC<{loading: boolean}> = ({loading}) =>{
    return(
        loading && (
            <div style={overlayStyle}>
                <PacmanLoader
                    color={'#91C8E4'}
                    loading={loading}
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    )
}

export default CLoading;

