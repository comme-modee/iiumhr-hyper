// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import Contact from '../component/Contact';
// import Map from '../component/Map';
// import commonStyles from '../style/Common.module.css';
// import { AuthProvider, UserInfoProvider } from '@/common/context';
// import ScrollToTopBtn from '../component/ScrollToTopBtn';

// const AppLayout = ({ children }) => {
//     const location = useLocation();
//     const [ isTablet, setIsTablet ] = useState(window.innerWidth <= 768);
//     const [ isOpenPrivacyPolicy, setIsOpenPrivacyPolicy ] = useState(false);

//     const isMainPath = location.pathname === '/';
    
//     /* video path */
//     const isVideoPath = location.pathname.includes('/index');

//     const isIntroPath = location.pathname.includes('intro');
//     const isBusinessPath = location.pathname.includes('business/');
//     const isEmployeePath = location.pathname.includes('employee/');
//     const isAdminPath = location.pathname.includes('admin') || location.pathname.includes('login') || location.pathname.includes('logout') || location.pathname.includes('error');
//     const isFullPagePath = location.pathname === '/business' || location.pathname === '/employee';

//     const contactType = isBusinessPath ? 'business' : isEmployeePath ? 'employee' : '';

//     const updateBodyStyles = (styles) => {
//         Object.entries(styles).forEach(([key, value]) => {
//             document.body.style[key] = value;
//         });
//     };

//     window.addEventListener('resize', () => {
//         if (window.innerWidth <= 768) {
//             setIsTablet(true)
//         } else {
//             setIsTablet(false)
//         }
//     })
//     useEffect(() => {
//         const bodyStyles = {
//             marginTop: isIntroPath || isBusinessPath || isEmployeePath ? (isTablet ? '60px' : '90px') : '0px',
//             color: !isAdminPath ? 'var(--white)' : 'var(--ct-body-color)',
//             fontFamily: !isAdminPath ? 'var(--font-M)' : 'var(--ct-body-font-family)',
//             letterSpacing: !isAdminPath ? '-0.06rem' : '0',
//             overflowX: !isAdminPath ? 'hidden' : 'auto',
//             // height: !isAdminPath ? 'var(--vh)' : 'auto'
//         };

//         updateBodyStyles(bodyStyles);

//         return () => {
//             updateBodyStyles({ marginTop: '0px' });
//         };
//     }, [isMainPath, isTablet, isIntroPath, isBusinessPath, isEmployeePath, isFullPagePath, isAdminPath]);

//     return (
//         (isMainPath || isVideoPath || isIntroPath || isBusinessPath || isEmployeePath)
//         ?
//         <div className={commonStyles.textCenter}>
//             {!(isMainPath || isVideoPath) && <ScrollToTopBtn/>}
//             <Header type={(isMainPath || isVideoPath) && 'main'} />

//             {children}

//             {!(isMainPath || isVideoPath) &&
//                 <>
//                     <Contact 
//                         type={contactType} 
//                         isOpenPrivacyPolicy={isOpenPrivacyPolicy}
//                         setIsOpenPrivacyPolicy={setIsOpenPrivacyPolicy}
//                     />
//                     <Map />
//                 </>
//             }
//             <Footer type={(isMainPath || isVideoPath) && 'main'} />

//         </div>
//         :
//         isFullPagePath
//         ?
//         <div className={commonStyles.textCenter}>
//             <Header type={isMainPath && 'main'} />
//             {children}
//         </div>
//         :
//         <AuthProvider>
//             <UserInfoProvider>
//                 <React.Fragment>
//                     {children}
//                 </React.Fragment>
//             </UserInfoProvider>
//         </AuthProvider>
//     )
// }

// export default AppLayout