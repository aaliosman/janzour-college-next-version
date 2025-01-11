const menuItems = [
  { id: "الرئيسية", label: "الرئيسية", path: "/" },
  { id: "عن الكلية", label: "عن الكلية", path: "/about" },
  {
    id: "الأقسام العلمية",
    label: "الأقسام العلمية",

    sublinks: [
      {
        id: "القسم العام",
        label: "القسم العام",
        path: "/departments/general-department",
      },
      {
        id: "قسم نظم تقنيات الحاسوب",
        label: "قسم نظم تقنيات الحاسوب",
        path: "/departments/it-department",
      },
      {
        id: "قسم الهندسة الكهربائية و الإلكترونية",
        label: "قسم الهندسة الكهربائية و الإلكترونية",
        path: "/departments/electrical-electronic-engineering-department",
      },
      {
        id: "قسم الهندسة النفطية",
        label: "قسم الهندسة النفطية",
        path: "/departments/petroleum-engineering-department",
      },
      {
        id: "قسم الهندسة الكيميائية و البيئية",
        label: "قسم الهندسة الكيميائية و البيئية",
        path: "/departments/chemical-environmental-engineering-department",
      },
      {
        id: "قسم الهندسة الميكانيكية",
        label: "قسم الهندسة الميكانيكية",
        path: "/departments/mechanical-engineering-department",
      },
    ],
  },
  {
    id: "الخدمات الإلكترونية",
    label: "الخدمات الإلكترونية",
    sublinks: [
      {
        id: "خدمات الطالب",
        label: "خدمات الطالب",
        path: "/e-services/student-services",
      },
      {
        id: "البريد الإلكتروني",
        label: "البريد الإلكتروني",
        path: "/email",
        icon: <img src="/images/Export-rigth.svg" alt="Export-rigth" />,
      },
      {
        id: "منصة التعليم الإلكتروني",
        label: "منصة التعليم الإلكتروني",
        path: "/e-learning-platform",
        icon: <img src="/images/Export-rigth.svg" alt="Export-rigth" />,
      },
    ],
  },
];

const menuItemsLeft = [
  {
    id: "المسجل العام",
    label: "المسجل العام",
    sublinks: [
      {
        id: "الدراسة والامتحانات",
        label: "الدراسة والامتحانات",
        path: "/general-registrar/study-and-exams",
      },
      {
        id: "الخريجين",
        label: "الخريجين",
        path: "/general-registrar/graduates-office",
      },
      {
        id: "الشؤون الطلابية",
        label: "الشؤون الطلابية",
        path: "/general-registrar/student-affairs",
      },
    ],
  },
  {
    id: "المجلة العلمية",
    label: "المجلة العلمية",
    path: "/scientific-journal",
  },
  {
    id: "الشؤون العلمية",
    label: "الشؤون العلمية",
    path: "/scientific-affairs",
  },
  {
    id: "التسجيل والقبول",
    label: "التسجيل والقبول",
    path: "/registration-and-admission",
  },
];

export { menuItems, menuItemsLeft };
