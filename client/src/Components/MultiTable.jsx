import React from "react";
import {
	Paper,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
} from "@mui/material";

const MultiTable = () => {
	const columns = [
		{ id: "rank", name: "Rank" },
		{ id: "name", name: "Name" },
		{ id: "city", name: "City" },
		{ id: "ward", name: "Ward" },
		{ id: "score", name: "Score" },
	];
	return (
		<div>
			<Paper sx={{ width: "100%", padding: "20px" }}>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell key={column.id}>
										{column.name}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody></TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default MultiTable;
