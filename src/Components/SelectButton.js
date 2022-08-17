import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(({selected})=>({
  selectbutton: {
    border: "1px solid #38cbff",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: selected ? "gold" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "#38cbff",
      color: "black",
    },
    width: "22%",
    //   margin: 5,
  },
}));


const SelectButton = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <span onClick={onClick} className={classes.selectbutton} >
      {children}
    </span>
  );
};
export default SelectButton;


