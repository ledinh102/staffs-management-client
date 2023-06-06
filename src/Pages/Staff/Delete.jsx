import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { db } from "../../firebase"
import { doc, setDoc } from "firebase/firestore"

const baseUrl = import.meta.env.VITE_BASE_URL

const Delete = () => {
	let { staffId } = useParams()
	let navigate = useNavigate()
	const [staff, setStaff] = useState({})

	useEffect(() => {
		axios.get(baseUrl + "/staffs/" + staffId).then((res) => {
			setStaff(res.data)
		})
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			console.log(staff)
			await axios
				.delete(baseUrl + "/staffs/delete/" + staffId)
			await setDoc(doc(db, "staffs", "staff"), {
				staff: Math.random(),
			})
			alert("Delete staff from database successfully")
			navigate("/staffs")
		} catch (error) {
			console.log(error.response.data)
			alert("Delete staff from database not successfully")
		}
	}

	return (
		<div className="span9">
			<h2>Delete</h2>
			<h3>Are you sure you want to delete this?</h3>
			<div>
				<h4>Staff</h4>
				<hr />
				<dl className="dl-horizontal">
					<dt>Employee_ID</dt>
					<dd>{staff.Employee_ID}</dd>
					<dt>First_Name</dt>
					<dd>{staff.First_Name}</dd>
					<dt>Last_Name</dt>
					<dd>{staff.Last_Name}</dd>
					<dt>Middle_Initial</dt>
					<dd>{staff.Middle_Initial}</dd>
					<dt>Address1</dt>
					<dd>{staff.Address1}</dd>
					<dt>Address2</dt>
					<dd>{staff.Address2}</dd>
					<dt>City</dt>
					<dd>{staff.City}</dd>
					<dt>State</dt>
					<dd>{staff.State}</dd>
					<dt>Zip</dt>
					<dd>{staff.Zip}</dd>
					<dt>Email</dt>
					<dd>{staff.Email}</dd>
					<dt>Phone_Number</dt>
					<dd>{staff.Phone_Number}</dd>
					<dt>Social_Security_Number</dt>
					<dd>{staff.Social_Security_Number}</dd>
					<dt>Drivers_License</dt>
					<dd>{staff.Drivers_License}</dd>
					<dt>Marital_Status</dt>
					<dd>{staff.Marital_Status}</dd>
					<dt>Gender</dt>
					<dd>{staff.Gender ? "True" : "False"}</dd>
					<dt>Shareholder_Status</dt>
					<dd>{staff.Shareholder_Status ? "True" : "False"}</dd>
					<dt>Benefit_Plans</dt>
					<dd>{staff.Benefit_Plans}</dd>
					<dt>Ethnicity</dt>
					<dd>{staff.Ethnicity}</dd>
					<dt>idEmployee</dt>
					<dd>{staff.idEmployee}</dd>
					<dt>Pay_Rate</dt>
					<dd>{staff.Pay_Rate}</dd>
					<dt>PayRates_id</dt>
					<dd>{staff.PayRates_id}</dd>
					<dt>Vacation_Days</dt>
					<dd>{staff.Vacation_Days}</dd>
					<dt>Paid_To_Date</dt>
					<dd>{staff.Paid_To_Date}</dd>
					<dt>Paid_Last_Year</dt>
					<dd>{staff.Paid_Last_Year}</dd>
				</dl>
				<form onSubmit={handleSubmit}>
					<div className="form-actions no-color">
						<input
							type="submit"
							value="Delete"
							className="btn btn-default"
						/>
						<Link className="btn btn-default" to="/staffs">
							Back to List
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Delete
