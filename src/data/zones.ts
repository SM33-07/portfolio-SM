import * as THREE from "three";

export type ProjectItem = {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
};

export type SkillCategory = {
    category: string;
    skills: string[];
};

export type ContactLink = {
    label: string;
    url: string;
};

export type ForgeContent = {
    type: "forge";
    projects: ProjectItem[];
};

export type ArchivesContent = {
    type: "archives";
    categories: SkillCategory[];
};

export type OracleContent = {
    type: "oracle";
    bio: string;
    resume: string;
};

export type GatewayContent = {
    type: "gateway";
    contacts: ContactLink[];
};

export type ZoneContent =
    | ForgeContent
    | ArchivesContent
    | OracleContent
    | GatewayContent;

export type ZoneData = {
    id: string;
    name: string;
    lore: string;
    position: THREE.Vector3;
    color: string;
    triggerRadius: number;
    content: ZoneContent;
};

export const ZONES: ZoneData[] = [
    {
        id: "the-forge",

        name: "The Forge",

        lore:
            "A molten chamber where forgotten constructs are reborn through code and creativity.",

        position: new THREE.Vector3(6, 0, 4),

        color: "#f59e0b",

        triggerRadius: 2.5,

        content: {
            type: "forge",

            projects: [
                {
                    title:
                        "LearnIT Submission Portal",

                    description:
                        "Submission and evaluation portal built for handling project entries, workflow management, and streamlined event submissions.",

                    tags: [
                        "Next.js",
                        "TypeScript",
                        "Supabase",
                        "PostgreSQL",
                    ],

                    github:
                        "https://github.com/SM33-07/LearnIT-SubmissionPortal",
                },
            ],
        },
    },

    {
        id: "the-archives",

        name: "The Archives",

        lore:
            "A sealed repository of technical knowledge preserved within crystalline memory structures.",

        position: new THREE.Vector3(-5, 0, 8),

        color: "#06b6d4",

        triggerRadius: 2.5,

        content: {
            type: "archives",

            categories: [
                {
                    category: "Frontend",

                    skills: [
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                    ],
                },

                {
                    category: "Backend",

                    skills: [
                        "Node.js",
                        "Express",
                        "Supabase",
                        "PostgreSQL",
                        "REST APIs",
                    ],
                },

                {
                    category: "3D & Creative Dev",

                    skills: [
                        "Three.js",
                        "React Three Fiber",
                        "GSAP",
                        "Canvas API",
                    ],
                },

                {
                    category: "AI & ML",

                    skills: [
                        "OpenAI APIs",
                        "Prompt Engineering",
                        "Python",
                        "ML Fundamentals",
                    ],
                },

                {
                    category: "Tools",

                    skills: [
                        "Git",
                        "GitHub",
                        "Vercel",
                        "VS Code",
                        "Figma",
                    ],
                },
            ],
        },
    },

    {
        id: "the-oracle",

        name: "The Oracle",

        lore:
            "An ancient intelligence that preserves memories, ambitions, and fragments of the creator's journey.",

        position: new THREE.Vector3(-8, 0, -6),

        color: "#f59e0b",

        triggerRadius: 2.5,

        content: {
            type: "oracle",

            bio:
                "I'm Soham More, a Computer Science student focused on building immersive digital experiences, scalable full-stack systems, and creative interactive interfaces. I enjoy blending engineering with storytelling — especially through game-inspired web experiences, AI-integrated products, and visually rich applications. My current focus is deepening expertise in full-stack engineering, systems design, and machine learning while building production-grade projects.",

            resume:
                "/resume.pdf",
        },
    },

    {
        id: "the-gateway",

        name: "The Gateway",

        lore:
            "A dimensional nexus connecting distant worlds, collaborators, and future opportunities.",

        position: new THREE.Vector3(9, 0, -8),

        color: "#ec4899",

        triggerRadius: 2.5,

        content: {
            type: "gateway",

            contacts: [
                {
                    label: "GitHub",

                    url:
                        "https://github.com/SM33-07",
                },

                {
                    label: "LinkedIn",

                    url:
                        "https://linkedin.com/in/soham-more-muj",
                },

                {
                    label: "Email",

                    url:
                        "mailto:sohammore3312@gmail.com",
                },

                {
                    label: "X / Twitter",

                    url:
                        "https://x.com/sohammore3312",
                },
            ],
        },
    },
];