/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Pagination from '@mui/material/Pagination';
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import { CryptoState } from "../CryptoContext";
import { useNavigate } from "react-router-dom";

export function numberWithCommas(x) {
  return x.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const useStyles = makeStyles((theme)=>({
  row: {
    backgroundColor: "#101214",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0a0b0d",
    },
    fontFamily: "Montserrat",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "#7DF9FF",
    },
  },
}));


export default function CoinsTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol, coins, loading, fetchCoins } = CryptoState();

 
  const classes = useStyles();
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  const countp = (handleSearch().length/10).toFixed(0);


  const headarr = ["Coin", "Price", "24h Change", "Market Cap"];
    
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(70,224,255,1) 100%)" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#009ad1" }}>
                <TableRow>
                  {headarr.map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row?.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => navigate(`/coins/${row.id}`)}
                        className={classes.row}
                        key={row?.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "#00ff77" : "#ff0500",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <Pagination
          count={countp}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
