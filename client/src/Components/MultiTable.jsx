import React, { useEffect, useState } from "react";
import {
	Paper,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	TablePagination,
} from "@mui/material";
import { CellTower } from "@mui/icons-material";

const MultiTable = () => {
	const columns = [
		{ id: "rank", name: "Rank" },
		{ id: "name", name: "Name" },
		{ id: "city", name: "City" },
		{ id: "ward", name: "Ward" },
		{ id: "score", name: "Score" },
	];

	const [rows, rowchange] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(6);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	useEffect(() => {
		fetch("https://mocki.io/v1/12cb63e9-5203-4d83-a928-b62828fb3a8b")
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				// Calculate weights using AHP
				//BY CALCULATING MATRIX MANUALLY OR ON MATHS.JS WE GET THE WEIGHTS
				const weights = {
					vw: 0.2,
					sq: 0.2,
					c: 0.2,
					ei: 0.2,
					ce: 0.2,
				};

				// Calculate finalScore for each row
				const dataWithScores = response.data.map((row) => {
					const score =
						row.vw * weights.vw +
						row.sq * weights.sq +
						row.c * weights.c +
						row.ei * weights.ei +
						row.ce * weights.ce;
					return { ...row, score };
				});

				// Sort rows in descending order of finalScore
				const sortedData = dataWithScores.sort(
					(a, b) => b.score - a.score
				);

				// Assign rank to each row based on sorted order
				const dataWithScoresAndRanks = sortedData.map((row, index) => {
					const rank = index + 1;
					return { ...row, rank };
				});

				rowchange(dataWithScoresAndRanks);
			});
	}, []);

	return (
		<div className="flex flex-row justify-center items-center">
			<Paper
				sx={{
					width: "80%",
					padding: "20px",
					background: "#25bdab",
					marginTop: "30px",
					borderRadius: "20px",
				}}
			>
				<TableContainer>
					<Table stickyheader>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										sx={{
											color: "#ffffff",
											fontFamily: "Poppins,sans-seeri",
											fontWeight: "bold",
											fontSize: "15px",
											backgroundColor: "black",
											textAlign: "center",
										}}
									>
										{column.name}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows &&
								rows
									.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage
									)
									.map((row, i) => {
										const isAlternateRow = i % 2 === 1;
										return (
											<TableRow
												key={i}
												className={
													isAlternateRow
														? "alternate-row"
														: ""
												}
											>
												{columns &&
													columns.map(
														(columns, i) => {
															let value =
																row[columns.id];
															return (
																<TableCell
																	key={value}
																	sx={{
																		fontWeight:
																			"600",
																		textAlign:
																			"center",
																		borderBottom:
																			"1px solid black",
																	}}
																>
																	{value}
																</TableCell>
															);
														}
													)}
											</TableRow>
										);
									})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					rowsPerPageOptions={[6]}
				></TablePagination>
			</Paper>
		</div>
	);
};

export default MultiTable;
