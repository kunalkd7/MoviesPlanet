import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darktheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        //when we will click on next it will move to start of page
        window.scroll(0, 0);
      };
    
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}>
         <ThemeProvider theme={darktheme}>
            <Pagination onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="secondary"
          hideNextButton
          hidePrevButton />
          </ThemeProvider>
        </div>
    )
}

export default CustomPagination
