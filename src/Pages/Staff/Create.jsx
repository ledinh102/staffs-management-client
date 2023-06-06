import { useState } from "react"
import { data } from "./data"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { db } from "../../firebase"
import { doc, setDoc } from "firebase/firestore"

const baseUrl = import.meta.env.VITE_BASE_URL

export default function Create() {
	let navigate = useNavigate()
	const [staff, setStaff] = useState({
		Employee_ID: "",
		First_Name: "",
		Last_Name: "",
		Middle_Initial: "",
		Address1: "",
		Address2: "",
		City: "",
		State: "",
		Zip: "",
		Email: "",
		Phone_Number: "",
		Social_Security_Number: "",
		Drivers_License: "",
		Marital_Status: "",
		Gender: "True",
		Shareholder_Status: "False",
		Benefit_Plans: "1",
		Ethnicity: "",
		idEmployee: "",
		PayRates_id: "",
		Pay_Rate: "",
		Vacation_Days: "",
		Paid_To_Date: "",
		Paid_Last_Year: "",
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setStaff({
			...staff,
			[name]: value,
		})
	}

	const handleCheckbox = (e) => {
		setStaff({
			...staff,
			Shareholder_Status: e.target.checked,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await axios.post(baseUrl + "/staffs/create", staff)
			await setDoc(doc(db, "staffs", "staff"), {
				staff: Math.random(),
			})
			alert("Add a new staff successfully")
			navigate("/staffs")
		} catch (error) {
			let errMsg = error.response.data.message
			if (errMsg.includes("Violation"))
				alert("Employee ID already exists")
			else if (errMsg.includes("NULL")) alert("Employee ID not specified")
			else alert(errMsg)
		}
	}

	return (
		<div className="span9">
			<div className="content">
				<div className="module">
					<div className="module-head">
						<h3>Create Staff</h3>
					</div>

					<form
						onSubmit={handleSubmit}
						className="form-horizontal row-fluid"
					>
						<div className="module-body">
							<div className="control-group">
								<label
									className="control-label"
									htmlFor="EmployeeID"
								>
									Employee ID
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Employee_ID"
										name="Employee_ID"
										type="text"
										value={staff.Employee_ID}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label"
									htmlFor="EmployeeID"
								>
									First Name
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="First_Name"
										name="First_Name"
										type="text"
										value={staff.First_Name}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Last_Name"
								>
									Last_Name
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Last_Name"
										name="Last_Name"
										type="text"
										value={staff.Last_Name}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Middle_Initial"
								>
									Middle_Initial
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Middle_Initial"
										name="Middle_Initial"
										type="text"
										value={staff.Middle_Initial}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Address1"
								>
									Address1
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Address1"
										name="Address1"
										type="text"
										value={staff.Address1}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Address2"
								>
									Address2
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Address2"
										name="Address2"
										type="text"
										value={staff.Address2}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="City"
								>
									City
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="City"
										name="City"
										type="text"
										value={staff.City}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="State"
								>
									State
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="State"
										name="State"
										type="text"
										value={staff.State}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Zip"
								>
									Zip
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Zip"
										name="Zip"
										type="text"
										value={staff.Zip}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Email"
								>
									Email
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Email"
										name="Email"
										type="text"
										value={staff.Email}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Phone_Number"
								>
									Phone_Number
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Phone_Number"
										name="Phone_Number"
										type="text"
										value={staff.Phone_Number}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Social_Security_Number"
								>
									Social_Security_Number
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										name="Social_Security_Number"
										type="text"
										value={staff.Social_Security_Number}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Drivers_License"
								>
									Drivers_License
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Drivers_License"
										name="Drivers_License"
										type="text"
										value={staff.Drivers_License}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Marital_Status"
								>
									Marital_Status
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Marital_Status"
										name="Marital_Status"
										type="text"
										value={staff.Marital_Status}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Gender"
								>
									Gender
								</label>
								<div className="controls">
									<select
										id="Gender"
										name="Gender"
										onChange={handleChange}
									>
										<option value="True">Male</option>
										<option value="False">Female</option>
									</select>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Shareholder_Status"
								>
									Shareholder_Status
								</label>
								<div className="controls">
									<input
										className="check-box"
										id="Shareholder_Status"
										name="Shareholder_Status"
										type="checkbox"
										value={staff.Shareholder_Status}
										onChange={handleCheckbox}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Benefit_Plans"
								>
									Benefit_Plans
								</label>
								<div className="controls">
									<select
										className="span6"
										id="Benefit_Plans"
										name="Benefit_Plans"
										onChange={handleChange}
									>
										{data.map((item, index) => {
											return (
												<option
													key={index + 1}
													value={index + 1}
												>
													{item}
												</option>
											)
										})}
									</select>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>

							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Ethnicity"
								>
									Ethnicity
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Ethnicity"
										name="Ethnicity"
										type="text"
										value={staff.Ethnicity}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>
							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="idEmployee"
								>
									idEmployee
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="idEmployee"
										name="idEmployee"
										type="text"
										value={staff.idEmployee}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>
							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Pay_Rates_ID"
								>
									Pay Rates ID
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Pay_Rates_ID"
										name="Pay_Rates_ID"
										type="text"
										value={staff.Pay_Rates_ID}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>
							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Pay_Rate"
								>
									Pay Rate
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Pay_Rate"
										name="Pay_Rate"
										type="text"
										value={staff.Pay_Rate}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>
							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Vacation_Days"
								>
									Vacation Days
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Vacation_Days"
										name="Vacation_Days"
										type="text"
										value={staff.Vacation_Days}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>
							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Paid_To_Date"
								>
									Paid To Date
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Paid_To_Date"
										name="Paid_To_Date"
										type="text"
										value={staff.Paid_To_Date}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>
							<div className="control-group">
								<label
									className="control-label col-md-2"
									htmlFor="Paid_Last_Year"
								>
									Paid Last Year
								</label>
								<div className="controls">
									<input
										className="span6 text-box single-line"
										id="Paid_Last_Year"
										name="Paid_Last_Year"
										type="text"
										value={staff.Paid_Last_Year}
										onChange={handleChange}
									/>
									<span className="field-validation-valid text-danger"></span>
								</div>
							</div>
							<div className="control-group">
								<div className="col-md-offset-2 controls">
									<input
										type="submit"
										value="Create"
										className="btn btn-default"
									/>
									<Link
										className="btn btn-default"
										to="/staffs"
									>
										Back to List
									</Link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
