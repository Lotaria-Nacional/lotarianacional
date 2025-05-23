import { IconNameType } from "@/components/ui/icon"

export type RoleType = "admin" | "editor" | "studio"

type NavLinkTypeV2 = {
  id: number;
  link: string;
  label: string;
  icon: IconNameType;
  allowedRoles: RoleType[];  
};

export const UP_NAV_LINKS: NavLinkTypeV2[] = [
  { id: 1, link: "/", label: "Visão geral", icon: "overview", allowedRoles: ["admin", "editor", "studio"] },

  { id: 2, link: "/resultados/adicionar", label: "Adicionar resultados", icon: "results", allowedRoles: ["admin", "studio"] },

  { id: 3, link: "/resultados/baixar", label: "Baixar ticket", icon: "results", allowedRoles: ["admin", "studio", "editor"] },

  { id: 4, link: "/banners", label: "Banners", icon: "banner", allowedRoles: ["admin", "editor"] },

  { id: 5, link: "/agencias", label: "Agências", icon: "agency", allowedRoles: ["admin"] },

  { id: 6, link: "/noticias", label: "Notícias", icon: "news", allowedRoles: ["admin", "editor"] },
  
  { id: 7, link: "/usuarios", label: "Usuários", icon: "users", allowedRoles: ["admin"] },

];

export const BOTTOM_NAV_LINKS_V2: NavLinkTypeV2[] = [
  { id: 1, link: "/configuracoes", label: "Configurações", icon: "settings", allowedRoles: ["admin"] },
  { id: 2, link: "/guia", label: "Guia", icon: "guia", allowedRoles: ["admin", "editor", "studio"] },
];


export const MOBILE_NAVBAR: NavLinkTypeV2[][] = [
  [
    {
      id: 1,
      link: "/",
      label: "Visão geral",
      icon: "overview",
      allowedRoles: ["admin", "editor", "studio"] 
    },
    {
      id: 2,
      link: "/agencias",
      label: "Agências",
      icon: "agency",
       allowedRoles: ["admin"]
    },
    {
      id: 3,
      link: "/noticias",
      label: "Notícias",
      icon: "news",
      allowedRoles: ["admin", "editor"]
    },
  ],
  [
    {
      id: 1,
      link: "/resultados/baixar",
      label: "Baixar ticket",
      icon: "cardList",
      allowedRoles: ["admin", "studio", "editor"]
    },
    {
      id: 2,
      link: "/banners",
      label: "Banners",
      icon: "banner",
      allowedRoles: ["admin", "editor"]
    },
    {
      id: 3,
      link: "/usuarios",
      label: "Usuários",
      icon: "users",
       allowedRoles: ["admin"]
    },
    {
      id: 4,
      link: "/configuracoes",
      label: "Configurações",
      icon: "settings",
       allowedRoles: ["admin"]
    },
    {
      id: 5,
      link: "/guia",
      label: "Guia",
      icon: "guia",
       allowedRoles: ["admin", "editor","studio"]
    },
  ],
]
