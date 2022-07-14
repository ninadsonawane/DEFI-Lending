import { Grid } from "@mui/material";
import "./App.css";
import AccountDetails from "./components/AccountDetails";
import Borrow from "./components/Borrow";
import Lend from "./components/Lend";
import MarketPlace from "./components/MarketPlace";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Grid container spacing={3} sx={{ marginTop:"2px"}}>
        <Grid item xs={12}  md={8}>
           <MarketPlace />
        </Grid>
        <Grid item xs={12}  md={4}>
          <AccountDetails />
        </Grid>
      
        <Grid item xs={12}  md={6}>
          <Lend />
        </Grid>
        <Grid item xs={12}   md={6}>
          <Borrow />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
