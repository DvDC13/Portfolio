export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Skills',
        href: '#skills',
    },
    {
        id: 5,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 6,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        name: "OceanMarcher",
        description:
            "OceanMarcher is a ray marching technique that employs a Fast Fourier Transform (FFT) to calculate a height map, resulting in realistic ocean rendering.",
        tags: [
            {
                name: "C++",
            },
            {
                name: "Mathematics",
            },
            {
                name: "Physics",
            },
            {
                name: "Ffmpeg",
            },
        ],
        image: '/assets/projects/oceanMarcher.png',
        source_code_link: "https://github.com/DvDC13/OceanMarcher",
    },
    {
        name: "RubiksCubeGL",
        description:
            "RubiksCubeGL is an interactive OpenGL-based visualization program that allows users to interact with and solve a virtual Rubik's Cube.",
        tags: [
            {
                name: "C++",
            },
            {
                name: "Opengl",
            },
            {
                name: "Mathematics",
            },
            {
                name: "Physics",
            },
        ],
        image: '/assets/projects/rubiksCubeGL.png',
        source_code_link: "https://github.com/DvDC13/RubiksCubeGL",
    },
    {
        name: "OceanGL",
        description:
            "OceanGL is an ocean rendering project using OpenGL, based on the sum of sine waves method.",
        tags: [
            {
                name: "C++",
            },
            {
                name: "OpenGL",
            },
            {
                name: "Mathematics",
            },
            {
                name: "Physics",
            },
        ],
        image: '/assets/projects/oceanGL.png',
        source_code_link: "https://github.com/DvDC13/OceanGL",
    },
    {
        name: "IRGPUA",
        description:
            "IRGPUA is a project that uses an algorithm to fix images using GPU and CUDA.",
        tags: [
            {
                name: "C++",
            },
            {
                name: "CUDA",
            },
            {
                name: "Profiling",
            },
            {
                name: "Optimization",
            },
        ],
        image: '/assets/projects/nvidiaCuda.png',
        source_code_link: "https://github.com/DvDC13/IRGPUA",
    },
    {

        name: "Filtylog",
        description:
            "A photoshop-like filter catalogue with an ImGui UI coded in C++.",
        tags: [
            {
                name: "C++",
            },
            {
                name: "ImGui",
            },
            {
                name: "Image processing",
            },
            {
                name: "Mathematics",
            },
        ],
        image: '/assets/projects/filtylog.png',
        source_code_link: "https://github.com/DvDC13/Filtylog",
    },
    {
        name: "Tiger Compiler",
        description:
            "Implementation of a tiger compiler based on Andrew Appel's book in C++, in my third year at EPITA, in a group of four. " +
            "In this project, I learned how a compiler is done and what are the best options to do it correctly, " +
            "I used multiple tools like Flex and Bison to lex and parse the grammar, also learned a lot in C++ and how to use " +
            "multiple design patterns (Visitor, Singleton). After that we translated the tiger language to an LLVM language(mid-end) " +
            "in order to execute it with clang and get an output.",
        tags: [
            {
                name: "C++",
            },
            {
                name: "Bison",
            },
            {
                name: "Flex",
            },
            {
                name: "Design patterns",
            },
        ],
        image: '/assets/projects/tigerCompiler.png',
        source_code_link: "https://assignments.lrde.epita.fr/",
    },
    {

        name: "TinyCalculator",
        description:
            "TinyCalculator is a small scientific calculator using Bison & Flex.",
        tags: [
            {
                name: "Bison",
            },
            {
                name: "Flex",
            },
        ],
        image: '/assets/projects/tinyCalculator.png',
        source_code_link: "https://github.com/DvDC13/TinyCalculator",
    },
    {
        name: "Ray Tracer",
        description:
            "This is a simple RayTracer program implemented in C++. " +
            "It uses the basic principles of RayTracing to create a simple image with spheres, " +
            "triangles, lighting, and shadows.",
        tags: [
            {
                name: "C++",
            },
            {
                name: "Mathematics",
            },
            {
                name: "Graphics",
            },
            {
                name: "Physics",
            },
        ],
        image: '/assets/projects/rayTracing.png',
        source_code_link: "https://github.com/DvDC13/RayTracing",
    },
    {
        name: "Ship Classification",
        description:
            "This involves creating 2 convolutional neural networks that classify ship images as accurately as possible. " +
            "Finished the first in the competition.",
        tags: [
            {
                name: "Python",
            },
            {
                name: "CNN",
            },
            {
                name: "TensorFlow",
            },
            {
                name: "Keras",
            },
        ],
        image: '/assets/projects/shipClassification.png',
        source_code_link: "https://github.com/DvDC13/ShipClassification",
    },
];

export const workExperiences = [
    {
        title: "Student Observation Intern",
        company_name: "SOAL (Oxygen and Acetylene Company of Lebanon)",
        icon: '/assets/company/soal.png',
        iconBg: "#FFFFFF",
        date: "Jul 2021",
        points: [
            "Acquisition of skills in chemistry, physics, and mechanics while uncovering the internal " +
            "operations of a company and interacting with various professionals to better understand " +
            "their roles.",
            "Enhancement of skills in chemistry, physics, and thermodynamics through this enriching\n" +
            "experience.",
        ],
    },
    {
        title: "C++/CUDA Developer Intern",
        company_name: " CNRS (National Centre for Scientific Research)",
        icon: '/assets/company/cnrs.png',
        iconBg: "#FFFFFF",
        date: "Sep 2022 - Jan 2023",
        points: [
            "Exciting experience as an intern where I leveraged CUDA and worked with Bitflow-Euresys " +
            "frame grabbers connected to a Phantom S710 camera.",
            "Opportunity to enhance my skills by utilizing the C++ language in a practical context.",
            "Valuable benefit of guidance and advice from my colleagues and superiors throughout the " +
            "internship, paving the way for the future application of the skills I've acquired.",
        ],
    },
    {
        title: "C++/CUDA Developer Intern",
        company_name: "GE Healthcare (General Electric Healthcare)",
        icon: '/assets/company/ge_healthcare.png',
        iconBg: "#FFFFFF",
        date: "Feb 2024 - Aug 2024",
        points: [
            "Optimized a voxelized ray tracer for mammography using C++, CUDA, and MATLAB",
            "Generated tests with Python.",
            "Optimized other components using cuRAND and cuFFT.",
            "Analyzed results with ImageJ.",
        ],
    },
];

export const skills = [
    {
        name: "HTML 5",
        icon: '/assets/skills/html.png',
    },
    {
        name: "CSS 3",
        icon: '/assets/skills/css.png',
    },
    {
        name: "JavaScript",
        icon: '/assets/skills/javascript.png',
    },
    {
        name: "React JS",
        icon: '/assets/skills/reactjs.png',
    },
    {
        name: "Tailwind CSS",
        icon: '/assets/skills/tailwind.png',
    },
    {
        name: "Three JS",
        icon: '/assets/skills/threejs.png',
    },
    {
        name: "git",
        icon: '/assets/skills/git.png',
    },
    {
        name: "docker",
        icon: '/assets/skills/docker.png',
    },
    {
        name: "C++",
        icon: '/assets/skills/cpp.png',
    },
    {
        name: "CUDA",
        icon: '/assets/skills/cuda.png',
    },
    {
        name: "MATLAB",
        icon: '/assets/skills/matlab.png',
    },
    {
        name: "Python",
        icon: '/assets/skills/python.png',
    },
    {
        name: "C",
        icon: '/assets/skills/c.png',
    },
    {
        name: "C#",
        icon: '/assets/skills/csharp.png',
    },
    {
        name: "Java",
        icon: '/assets/skills/java.png',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 3 : isMobile ? 4 : 4.5,
        deskPosition: isMobile ? [0.1, -4.5, 0] : [0.01, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [4, 2, 0] : isTablet ? [7, 2, 0] : [10, 3, 0],
        cppPosition: isSmall ? [3, -2, 0] : isMobile ? [-3, 2, 0] : isTablet ? [-6, 1, 0] : [-9, 2, 0],
        rubiksCubePosition: isSmall ? [-3, -2, 0] : isMobile ? [-3, -3, 0] : isTablet ? [-7, -4, 0] : [-8, -5, 0],
        djControllerPosition: isSmall ? [-3, 2, 0] : isMobile ? [1.5, -4, 0] : isTablet ? [3, -6, 0] : [4, -6, 0],
        djControllerScale: isSmall ? 1 : isMobile ? 1 : isTablet ? 1.5 : 2,
    };
};