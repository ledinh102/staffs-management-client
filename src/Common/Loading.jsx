import CircularProgress from "@mui/material/CircularProgress"

const Loading = () => {
	return (
		<div
			style={{
				display: "flex",
				height: "50vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CircularProgress />
		</div>
	)
}

export default Loading
