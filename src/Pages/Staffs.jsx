import { useEffect, useContext } from "react"
import "firebase/firestore"
import { staffsRef } from "../firebase"
import { onSnapshot } from "firebase/firestore"
import { Link } from "react-router-dom"
import { StaffContext } from "../Context/StaffContext"
import Loading from "../Common/Loading"

export default function StaffList() {
	const { staffs, getStaffs } =
		useContext(StaffContext)

	useEffect(() => {
		onSnapshot(staffsRef, () => {
			getStaffs()
		})
	}, [])

	return (
		<>
			{staffs.length === 0 ? (
				<Loading />
			) : (
				<div key={Math.random()} className="span9">
					<div className="module">
						<div className="module-head">
							<h3>
								Staffs -{" "}
								<Link to="/staffs/create">Create New</Link>
							</h3>
						</div>
						<div className="module-body table">
							<table
								cellPadding="0"
								cellSpacing="0"
								border="0"
								className="datatable-1 table-bordered table-hover table-striped display"
								width="100%"
							>
								<thead>
									<tr role="row">
										<th>ID</th>
										<th>Full Name</th>
										<th>City</th>
										<th>Phone_Number</th>
										<th>SSN</th>
										<th>Pay Rate</th>
										<th>Vacation_Days</th>
										<th>Shareholder</th>
										<th></th>
									</tr>
								</thead>

								<tbody>
									{staffs.map((item) => (
										<tr key={item.Employee_ID}>
											<td>{item.Employee_ID}</td>
											<td>
												{item.First_Name +
													" " +
													item.Last_Name}
											</td>
											<td>{item.City}</td>
											<td>{item.Phone_Number}</td>
											<td>
												{item.Social_Security_Number}
											</td>
											<td>{item.Pay_Rate}</td>
											<td>{item.Vacation_Days}</td>
											<td>
												{item.Shareholder_Status
													? "true"
													: "false"}
											</td>
											<td>
												<Link
													to={
														"/staffs/edit/" +
														item.Employee_ID
													}
												>
													Edit
												</Link>{" "}
												|{" "}
												<Link
													to={
														"/staffs/delete/" +
														item.Employee_ID
													}
												>
													Delete
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
