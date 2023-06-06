import { Link } from "react-router-dom"

export default function Navbar() {
	return (
		<div className="span3">
			<div className="sidebar" data-measuring="true">
				<ul className="widget widget-menu unstyled">
					<li className="active">
						<Link to="/" data-selected="true" data-label-id="0">
							<i className="menu-icon icon-dashboard"></i>
							Dashboard
						</Link>
					</li>
					<li>
						<Link to="/staffs">
							<i className="menu-icon icon-bullhorn"></i>
							Staff List
						</Link>
					</li>
					<li>
						<Link to="/benefitPlans">
							<i className="menu-icon icon-tasks"></i>
							Benefit Plans
						</Link>
					</li>
					<li>
						<Link to="/JobHistory">
							<i className="menu-icon icon-inbox"></i>
							Job History
						</Link>
					</li>
				</ul>
				<ul className="widget widget-menu unstyled">
					<li>
						<a
							className="collapsed"
							data-toggle="collapse"
							href="#togglePages"
						>
							<i className="menu-icon icon-cog"></i>
							<i className="icon-chevron-down pull-right"></i>
							<i className="icon-chevron-up pull-right"></i>
							More Pages
						</a>
						<ul id="togglePages" className="collapse unstyled">
							<li>
								<Link to="#">
									<i className="icon-inbox"></i>
									Login
								</Link>
							</li>
							<li>
								<Link to="#">
									<i className="icon-inbox"></i>
									Profile
								</Link>
							</li>
							<li>
								<Link to="#">
									<i className="icon-inbox"></i>
									All Users
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="#">
							<i className="menu-icon icon-signout"></i>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
