import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

// type OrderData = {
//   name: string;
//   trackingId: number;
//   date: string;
//   status: string;
// };

// function createData({ name, trackingId, date, status }: OrderData): OrderData {
//   return { name, trackingId, date, status };
// }

// function createData(
//   name: string,
//   trackingId: number,
//   date: string,
//   status: string
// ) {
//   return { name, trackingId, date, status };
// }

// const rows = [
//   createData("Air Max", 47283910, "April 12 2023", "Approved"),
//   createData("Jordan Retro", 58392047, "June 25 2023", "Pending"),
//   createData("Stan Smith", 91837465, "August 7 2022", "Rejected"),
//   createData("Chuck Taylor", 20583749, "January 19 2024", "Approved"),
// ];

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("lasania chiken", 18908424, "2 March 2022", "Approved"),
  createData("big Baza Bang", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("cupcake", 18908424, "2 March 2022", "Delivered"),
];

const makeStyles = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Tracking ID
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Date
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                {" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell className="details" align="left">
                  Detail
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasicTable;
