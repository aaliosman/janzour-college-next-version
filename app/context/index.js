"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext(null);

export function AppWrapperProvider({ children }) {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);
  const [isLoading4, setIsLoading4] = useState(true);
  const [isLoading5, setIsLoading5] = useState(true);

  const [aboutCollegeData, setAboutCollegeData] = useState(null);
  const [collegeStatisticsData, setCollegeStatisticsData] = useState(null);
  const [latestReleasesData, setLatestReleasesData] = useState(null);
  const [collegeActivitiesData, setCollegeActivitiesData] = useState(null);
  const [studentActivitiesData, setStudentActivitiesData] = useState(null);
  const [topFiveData, setTopFiveData] = useState(null);
  const [successStoriesData, setSuccessStoriesData] = useState(null);
  const [scholarshipsAndJobOppor, setScholarshipsAndJobOppor] = useState(null);
  const [departmentalWorkShops, setDepartmentalWorkShops] = useState(null);
  const [frequentlyAskedQuestions, setFrequentlyAskedQuestions] =
    useState(null);
  const [aboutPageData, setAboutPageData] = useState(null);
  const [scientificJournalData, setScientificJournalData] = useState(null);
  const [collegeRegulationsData, setCollegeRegulationsData] = useState(null);
  const [graduateStudiesData, setGraduateStudiesData] = useState(null);
  const [studyAndExamsOfficeData, setStudyAndExamsOfficeData] = useState({
    studyAndExamsData: null,
    isLoading: true,
  });
  const [academicCalendarData, setAcademicCalendarData] = useState({
    calendarData: null,
    isLoading: true,
  });
  const [graduatesOfficeData, setGraduatesOfficeData] = useState({
    officeData: null,
    isLoading: true,
  });
  const [studentAffairsOfficeData, setStudentAffairsOfficeData] = useState({
    officeData: null,
    isLoading: true,
  });

  const [scientificAffairsOfficeData, setScientificAffairsOfficeData] =
    useState({
      officeData: null,
      isLoading: true,
    });

  const [eServicesData, setEServicesData] = useState({
    studentServicesData: null,
    isLoading: true,
  });

  const [registrationAndAdmissionData, setRegistrationAndAdmissionData] =
    useState({
      data: null,
      isLoading: true,
    });

  // useEffect(() => {
  //   let isMounted = true;
  //   try {
  //     axios
  //       .get(`${baseUrl}/api/siteManagement/v1/web/siteHome/33`)
  //       .then((res) => {
  //         if (isMounted) {
  //           const data = res.data.data || {};
  //           // console.log("home page", data);
  //           setAboutCollegeData(data.aboutCollege || []);
  //           setCollegeStatisticsData(data.collegeStatistics || {});
  //           setLatestReleasesData(data.latestReleases || []);
  //           setCollegeActivitiesData(data.collegeActivities || []);
  //           setStudentActivitiesData(data.studentActivities || []);
  //           setTopFiveData(data.topFive || []);
  //           setSuccessStoriesData(data.successStories || []);
  //           setScholarshipsAndJobOppor(
  //             data.scholarshipsAndJobOpportunities || []
  //           );
  //           setDepartmentalWorkShops(
  //             data.departmentalIntroductoryWorkshops || []
  //           );
  //           setFrequentlyAskedQuestions(data.frequentlyAskedQuestions || []);
  //           setIsLoading1(false);
  //         }
  //       });
  //   } catch (error) {
  //     setIsLoading1(false);
  //     console.log("server error", error.massage);
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/collegeOverview/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         setAboutPageData(res.data.data);
  //         setIsLoading2(false);
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setIsLoading2(false);
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/scientificJournal/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         // console.log(res.data);
  //         setScientificJournalData(res.data.data);
  //         setIsLoading3(false);
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setIsLoading3(false);
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/collegeRegulations/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         // console.log("setCollegeRegulationsData", res.data.data);

  //         setCollegeRegulationsData(res.data.data);
  //         setIsLoading4(false);
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setIsLoading4(false);
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/postgraduateStudies/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         // console.log("graduateStudies", res.data.data);

  //         setGraduateStudiesData(res.data.data);
  //         setIsLoading5(false);
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setIsLoading5(false);
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/studyAndExams/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         setStudyAndExamsOfficeData((prevState) => ({
  //           ...prevState,
  //           studyAndExamsData: res.data.data,
  //           isLoading: false,
  //         }));
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setStudyAndExamsOfficeData((prevState) => ({
  //       ...prevState,
  //       isLoading: false,
  //     }));
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/academicCalendar/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         setAcademicCalendarData((prevState) => ({
  //           ...prevState,
  //           calendarData: res.data.data,
  //           isLoading: false,
  //         }));
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setAcademicCalendarData((prevState) => ({
  //       ...prevState,
  //       isLoading: false,
  //     }));
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/graduatesOffice/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         setGraduatesOfficeData((prevState) => ({
  //           ...prevState,
  //           officeData: res.data.data,
  //           isLoading: false,
  //         }));
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setGraduatesOfficeData((prevState) => ({
  //       ...prevState,
  //       isLoading: false,
  //     }));
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/studentAffairs/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         setStudentAffairsOfficeData((prevState) => ({
  //           ...prevState,
  //           officeData: res.data.data,
  //           isLoading: false,
  //         }));
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setStudentAffairsOfficeData((prevState) => ({
  //       ...prevState,
  //       isLoading: false,
  //     }));
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/scientificAffairs/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         setScientificAffairsOfficeData((prevState) => ({
  //           ...prevState,
  //           officeData: res.data.data,
  //           isLoading: false,
  //         }));
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setScientificAffairsOfficeData((prevState) => ({
  //       ...prevState,
  //       isLoading: false,
  //     }));
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/electronicServices/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         setEServicesData((prevState) => ({
  //           ...prevState,
  //           studentServicesData: res.data.data,
  //           isLoading: false,
  //         }));
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setEServicesData((prevState) => ({
  //       ...prevState,
  //       isLoading: false,
  //     }));
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   try {
  //     axios
  //       .get(
  //         `${baseUrl}/api/siteManagement/v1/web/registrationAndAdmission/fb7e6851-51bc-4fee-979f-e6b334fb2732`
  //       )
  //       .then((res) => {
  //         setRegistrationAndAdmissionData((prevState) => ({
  //           ...prevState,
  //           data: res.data.data,
  //           isLoading: false,
  //         }));
  //       });
  //   } catch (error) {
  //     console.log("error fetching", error.message);
  //     setRegistrationAndAdmissionData((prevState) => ({
  //       ...prevState,
  //       isLoading: false,
  //     }));
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  const value = {
    aboutCollegeData,
    collegeStatisticsData,
    latestReleasesData,
    collegeActivitiesData,
    studentActivitiesData,
    successStoriesData,
    topFiveData,
    scholarshipsAndJobOppor,
    departmentalWorkShops,
    frequentlyAskedQuestions,
    aboutPageData,
    isLoading1,
    isLoading2,
    isLoading3,
    scientificJournalData,
    collegeRegulationsData,
    isLoading4,
    graduateStudiesData,
    isLoading5,
    studyAndExamsOfficeData,
    academicCalendarData,
    graduatesOfficeData,
    studentAffairsOfficeData,
    scientificAffairsOfficeData,
    eServicesData,
    registrationAndAdmissionData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapperProvider");
  }
  return context;
}
