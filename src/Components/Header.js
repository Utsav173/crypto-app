import {
    AppBar,
    Container,
   
    MenuItem,
    Select,
  
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";

  import { useNavigate } from "react-router-dom";
  import { CryptoState } from "../CryptoContext";
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      fontSize: 20,
    background: "-webkit-linear-gradient(105deg, #ffff00 30%, #39dcff 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      type: "dark",
    },
  });
  
  function Header() {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();
  
    const history = useNavigate();
    


    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => history(`/`)}
                className={classes.title}
                to="/"
              >
                Crypto Bazi
              </Typography>
              {/* <Button color="inherit">Login</Button> */}

              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15}}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;
  