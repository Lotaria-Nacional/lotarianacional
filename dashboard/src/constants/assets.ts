import eye from "../assets/svg/eye.svg"
// import dots from "../assets/icons/dots.png"
import bell from "../assets/svg/notification.svg"
import edit from "../assets/svg/edit.svg"
import users from "../assets/svg/users.svg"
import file from "../assets/svg/file.svg"
import trash from "../assets/svg/trash.svg"
import window from "../assets/svg/banner.svg"
import ticket from "../assets/svg/ticket.svg"
import agency from "../assets/svg/agency.svg"
import settings from "../assets/svg/settings.svg"
import newspaper from "../assets/svg/news.svg"
import card_list from "../assets/icons/card-list.png"
import dashboard from "../assets/svg/overview.svg"
import emission from "../assets/svg/emission.svg"

import loto590 from "/logo/loto590.png"
import red_logo from "/logo/red-logo.png"
import white_logo from "/logo/white-logo.png"

import card_loto from "/card-loto.webp"

export const ICON = {
  eye,
  // dots,
  bell,
  edit,
  file,
  users,
  trash,
  window,
  ticket,
  agency,
  settings,
  newspaper,
  card_list,
  dashboard,
  emission,
} as const

export const LOGOS = { red_logo, white_logo, loto590 } as const

export const CARD = { card_loto } as const
