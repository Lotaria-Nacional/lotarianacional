@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
08,63,16,77
@tailwind base;
@tailwind components;
@tailwind utilities;

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

h4 {
line-height: 1.9rem;
}

body {
@apply font-Inter;
}

.radialGradient {
background: radial-gradient(#bd1717, #951913);
}

details summary {
display: flex;
cursor: pointer;
align-items: center;
justify-content: space-between;
}

details summary::marker {
content: "";
}

details summary::after {
content: "+";
font-size: 1.5rem;
margin-left: auto;
}

details[open] summary::after {
content: "-";
}

.swiper-button-next::after,
.swiper-button-prev::after {
color: #d9d9d9 !important;
font-size: 16px !important;
font-weight: bolder;
}

.swiper-pagination-bullet {
background: #951913;
}

.leaflet-popup-content-wrapper {
background: radial-gradient(#bd1717, #951913) !important;
}
.leaflet-popup-close-button {
color: white !important;
font-size: 24px !important;
margin-right: 14px !important;
margin-top: 10px !important;
}
