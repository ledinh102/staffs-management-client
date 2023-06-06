import { createContext, useState } from "react"
import $ from "jquery"
import "datatables.net"
import axios from "axios"

const StaffContext = createContext()

const baseUrl = import.meta.env.VITE_BASE_URL

const StaffProvider = ({ children }) => {
	const [staffs, setStaffs] = useState([])
	const [employees, setEmployees] = useState([])
	const [personals, setPersonals] = useState([])
	const [salaryTop10, setSalaryTop10] = useState({
		labels: "",
		datasets: [],
	})
	const [salary, setSalary] = useState([])

	const getSalary = () => {
		axios
			.get(baseUrl + "/salary")
			.then((result) => {
				return result.data
			})
			.then((data) => {
				setSalary(data)
				setTimeout(() => {
					$(".datatable-1").DataTable()
				}, 1000)
			})
	}

	const getSalaryTop10 = () => {
		axios
			.get(baseUrl + "/salary/top/10")
			.then((result) => {
				return result.data
			})
			.then((data) => {
				setSalaryTop10({
					labels: data.map((item) => item.Full_Name),
					datasets: [
						{
							label: "Salary",
							data: data.map((item) => item.Salary),
							backgroundColor: ["#4bb1cf"],
						},
					],
				})
			})
	}

	const getStaffs = () => {
		axios
			.get(baseUrl + "/staffs")
			.then((result) => {
				return result.data
			})
			.then((data) => {
				setStaffs(data)
				setTimeout(() => {
					$(".datatable-1").DataTable()
				}, 1000)
			})
	}

	const getEmployees = () => {
		axios
			.get(baseUrl + "/employees")
			.then((result) => {
				return result.data
			})
			.then((data) => {
				setEmployees(data)
			})
	}

	const getPersonals = () => {
		axios
			.get(baseUrl + "/personals")
			.then((result) => {
				return result.data
			})
			.then((data) => {
				setPersonals(data)
			})
	}

	return (
		<StaffContext.Provider
			value={{
				staffs,
				setStaffs,
				getStaffs,
				salaryTop10,
				setSalaryTop10,
				salary,
				setSalary,
				getSalary,
				getSalaryTop10,
				employees,
				getEmployees,
				personals,
				getPersonals
			}}
		>
			{children}
		</StaffContext.Provider>
	)
}

export { StaffContext }
export default StaffProvider
