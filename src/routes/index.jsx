import React from "react";
import { Route, Routes as ReactRoutes, useLocation } from 'react-router-dom';
import AppLayout from "@/pages/main/layout/AppLayout";
import Main from "@/pages/main/page/Main";
import Intro from "@/pages/main/page/Intro";
import BusinessService from "@/pages/main/page/business/BusinessService";
import Advisory from "@/pages/main/page/business/Advisory";
import Payroll from "@/pages/main/page/business/Payroll";
import HR from "@/pages/main/page/business/HR";
import IR from "@/pages/main/page/business/IR";
import Education from "@/pages/main/page/business/Education";
import EmployeeService from "@/pages/main/page/employee/EmployeeService";
import Wages from "@/pages/main/page/employee/Wages";
import Dismissal from "@/pages/main/page/employee/Dismissal";
import Harassment from "@/pages/main/page/employee/Harassment";
import Injury from "@/pages/main/page/employee/Injury";
import Login from "@/pages/user/Login";
import Logout from "@/pages/user/Logout";
import ProtectedRoutes from "./ProtectedRoutes";
import ErrorPages from "@/pages/error";
import ErrorPageNotFound from "@/pages/error/PageNotFound";
import { useEffect } from "react";

export default function AppRoutes() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
  
	return (
		<AppLayout>
			<ReactRoutes>
				<Route>
					<Route path='/' element={<Main />} />
					<Route path='/intro' element={<Intro />} />
					<Route path='/business'>
						<Route index element={<BusinessService />} />
						<Route path='advisory' element={<Advisory />} />
						<Route path='payroll' element={<Payroll />} />
						<Route path='hr' element={<HR />} />
						<Route path='ir' element={<IR />} />
						<Route path='edu' element={<Education />} />
					</Route>
					<Route path='/employee'>
						<Route index element={<EmployeeService />} />
						<Route path='wages' element={<Wages />} />
						<Route path='dismissal' element={<Dismissal />} />
						<Route path='harassment' element={<Harassment />} />
						<Route path='injury' element={<Injury />} />
					</Route>
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/*" element={<ProtectedRoutes />} />
				<Route path="/error/*" element={<ErrorPages />} />
				<Route path="*"  element={<ErrorPageNotFound />} />
			</ReactRoutes>
		</AppLayout>
	);
}
