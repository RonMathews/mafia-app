export const getMiddleDivStyles = ((props) => ({
    display: "flex", 
    justifyContent: "center", 
    borderRadius: "5px", 
    padding: "10px 0px 0px 0px", 
    margin: "15px 0px 0px 0px", 
    height: "40px",                 
    width: "700px", 
    color: "#000000",
    fontSize: "25px", 
    backgroundColor: props
}));

export const getConferenceLinkStyles = (() => ({
    display: "inline-block", 
    justifyContent: "center", 
    borderRadius: "2px",  
    padding: "10px", 
    margin: "13px auto", 
    height: "35px",  
    backgroundColor: "#97B788",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "600px"
}));

export const getLinkStyles = (() => ({
    textDecoration: "none",
    color: "#000000", 
    fontSize: "20px",
    lineHeight: "29px"
}));

export const getRightDivStyles = (() => ({
    fontSize: "50px", 
    color: "#E0E0E0", 
    opacity: 0.4
}));

export const containerStyles = (() => ({
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between",
    margin: "10px 22px 0px 0px"
}));

export const getWrapperStyles = (() => ({
    textAlign: "center"
}));