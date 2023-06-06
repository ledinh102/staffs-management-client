/* eslint-disable react/no-unknown-property */
import { useContext, useEffect } from "react"
import { StaffContext } from "../Context/StaffContext"
import SalaryChart from "./Chart/SalaryChart"
import Loading from "../Common/Loading"

export default function Home() {
	const {
		staffs,
		getStaffs,
		getSalary,
		getSalaryTop10,
		salary,
		salaryTop10,
		employees,
		getEmployees,
		personals,
		getPersonals,
	} = useContext(StaffContext)

	useEffect(() => {
		getStaffs()
		getEmployees()
		getPersonals()
		getSalary()
		getSalaryTop10()
	}, [])

	return (
		<div key={Math.random()} className="span9">
			<div className="content">
				<div className="btn-controls">
					<div className="btn-box-row row-fluid">
						<a href="#" className="btn-box big span4">
							<i className="icon-user"></i>
							<b>{personals.length}</b>
							<p className="text-muted">
								Employees of HR
							</p>{" "}
						</a>
						<a href="#" className="btn-box big span4">
							<i className="icon-user"></i>
							<b>{employees.length}</b>
							<p className="text-muted">
								Employees of Payroll
							</p>{" "}
						</a>
						<a href="#" className="btn-box big span4">
							<i className="icon-money"></i>
							<b>
								{salary
									.reduce(
										(sumSalary, currentSalary) =>
											sumSalary +
											Number(currentSalary.Salary),
										0
									)
									.toLocaleString()}{" "}
								$
							</b>
							<p className="text-muted">Profit</p>
						</a>
					</div>
					<div className="btn-box-row row-fluid">
						<div className="span8">
							<div className="row-fluid">
								<div className="span12">
									<a href="#" className="btn-box small span4">
										<i className="icon-envelope"></i>
										<b>Messages</b>{" "}
									</a>
									<a href="#" className="btn-box small span4">
										<i className="icon-group"></i>
										<b>Clients</b>{" "}
									</a>
									<a href="#" className="btn-box small span4">
										<i className="icon-exchange"></i>
										<b>Expenses</b>
									</a>
								</div>
							</div>
							<div className="row-fluid">
								<div className="span12">
									<a href="#" className="btn-box small span4">
										<i className="icon-save"></i>
										<b>Total Sales</b>{" "}
									</a>
									<a href="#" className="btn-box small span4">
										<i className="icon-bullhorn"></i>
										<b>Social Feed</b>{" "}
									</a>
									<a href="#" className="btn-box small span4">
										<i className="icon-sort-down"></i>
										<b> Bounce Rate </b>
									</a>
								</div>
							</div>
						</div>
						<ul className="widget widget-usage unstyled span4">
							<li>
								<p>
									<strong>Full-time</strong>
									<span className="pull-right small muted">
										{Math.round(
											(salary.filter(
												(item) =>
													item.Pay_Rate_Name ===
													"Full-time"
											).length /
												salary.length) *
												100
										)}
										%
									</span>
								</p>
								<div className="progress tight">
									<div
										className="bar bar-success"
										style={{
											width: `${Math.round(
												(salary.filter(
													(item) =>
														item.Pay_Rate_Name ===
														"Full-time"
												).length /
													salary.length) *
													100
											)}%`,
										}}
									></div>
								</div>
							</li>
							<li>
								<p>
									<strong>Contractual</strong>
									<span className="pull-right small muted">
										{Math.round(
											(salary.filter(
												(item) =>
													item.Pay_Rate_Name ===
													"Contractual"
											).length /
												salary.length) *
												100
										)}
										%
									</span>
								</p>
								<div className="progress tight">
									<div
										className="bar bar-info"
										style={{
											width: `${Math.round(
												(salary.filter(
													(item) =>
														item.Pay_Rate_Name ===
														"Contractual"
												).length /
													salary.length) *
													100
											)}%`,
										}}
									></div>
								</div>
							</li>
							<li>
								<p>
									<strong>Part-time</strong>
									<span className="pull-right small muted">
										{Math.round(
											(salary.filter(
												(item) =>
													item.Pay_Rate_Name ===
													"Part-time"
											).length /
												salary.length) *
												100
										)}
										%
									</span>
								</p>
								<div className="progress tight">
									<div
										className="bar bar-warning"
										style={{
											width: `${Math.round(
												(salary.filter(
													(item) =>
														item.Pay_Rate_Name ===
														"Part-time"
												).length /
													salary.length) *
													100
											)}%`,
										}}
									></div>
								</div>
							</li>
							<li>
								<p>
									<strong>Temporary</strong>
									<span className="pull-right small muted">
										{Math.round(
											(salary.filter(
												(item) =>
													item.Pay_Rate_Name ===
													"Temporary"
											).length /
												salary.length) *
												100
										)}
										%
									</span>
								</p>
								<div className="progress tight">
									<div
										className="bar bar-danger"
										style={{
											width: `${Math.round(
												(salary.filter(
													(item) =>
														item.Pay_Rate_Name ===
														"Temporary"
												).length /
													salary.length) *
													100
											)}%
										`,
										}}
									></div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="module">
					<SalaryChart chartData={salaryTop10} />
				</div>
				<div className="module">
					<div className="module-head">
						<h3>DataTables</h3>
					</div>
					<div className="module-body table">
						{salary.length === 0 ? (
							<Loading />
						) : (
							<table
								cellPadding="0"
								cellSpacing="0"
								border="0"
								className="datatable-1 table-bordered table-hover table-striped display"
								width="100%"
							>
								<thead>
									<tr>
										<th>ID</th>
										<th>Full name</th>
										<th>Salary</th>
										<th>Type</th>
										<th>Vacation Days</th>
									</tr>
								</thead>

								<tbody>
									{salary.map((item) => (
										<tr key={item.Employee_ID}>
											<th>{item.Employee_ID}</th>
											<th>{item.Full_Name}</th>
											<th>
												{Number(
													item.Salary
												).toLocaleString()}
												$
											</th>
											<th>{item.Pay_Rate_Name}</th>
											<th>{item.Vacation_Days}</th>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
