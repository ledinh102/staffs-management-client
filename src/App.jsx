import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/bootstrap/css/bootstrap-responsive.min.css"
import "./assets/css/theme.css"
import "./assets/images/icons/css/font-awesome.css"
import "./assets/Scripts/jquery-1.9.1.min.js"
import "./assets/Scripts/jquery-ui-1.10.1.custom.min.js"
import "./assets/bootstrap/js/bootstrap.min.js"
import "./assets/Scripts/flot/jquery.flot.js"
import "./assets/Scripts/flot/jquery.flot.resize.js"
import "./assets/Scripts/common.js"

import Home from "./Pages/Home"
import Header from "./Common/Header"
import Footer from "./Common/Footer"
import Navbar from "./Common/Navbar"
import Staffs from "./Pages/Staffs"
import CreateStaff from "./Pages/Staff/Create"
import DeleteStaff from "./Pages/Staff/Delete"
import EditStaff from "./Pages/Staff/Edit"
import StaffProvider from "./Context/StaffContext"

export default function App() {
	return (
		<Router>
			<Header />
			<div className="wrapper">
				<div className="container">
					<div className="row">
						<Navbar />
						<StaffProvider>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/staffs" element={<Staffs />} />
								<Route
									path="/staffs/create"
									element={<CreateStaff />}
								/>
								<Route
									path="/staffs/delete/:staffId"
									element={<DeleteStaff />}
								/>
								<Route
									path="/staffs/edit/:staffId"
									element={<EditStaff />}
								/>
							</Routes>
						</StaffProvider>
					</div>
				</div>
			</div>
			<Footer />
		</Router>
	)
}
