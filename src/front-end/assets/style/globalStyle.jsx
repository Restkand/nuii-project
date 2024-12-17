import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sharp Grotesk Light';
    src: url('../fonts/Sharp_Grotesk/SharpGrotesk-Book20.otf') format('truetype');
  }

  @font-face {
    font-family: 'Sharp Grotesk Bold';
    src: url('../fonts/Sharp_Grotesk/SharpGrotesk-Bold20.otf') format('truetype');
  }

  @font-face {
    font-family: 'Sharp Grotesk Bold10';
    src: url('../fonts/Sharp_Grotesk/SharpGrotesk-Bold10.otf') format('truetype');
  }

  body, html {
    font-family: Arial, sans-serif;
  }

  h4 {
    font-family: 'Sharp Grotesk Light', sans-serif;
  }

  h2 {
    font-family: 'Sharp Grotesk Bold', sans-serif;
  }

  .text-yellow {
    color: #efba0f;
  }

  .text-purple {
    color: #700db7;
  }

  .text-orange {
    color: #ff6700;
  }

  .home-2 {
    background-color: #efba0f;
  }

  .CenterText {
    font-family: 'Sharp Grotesk Bold10', sans-serif;
  }

  .featuredWorks{
    font-family: 'Sharp Grotesk Bold', sans-serif;
  }

  .linkWorks h5 {
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .linkWorks h5:hover {
    color: #ff6700; 
    transform: translateX(-10px);
  }

  .linkWorks h5:hover .circle-container {
    transform: scale(1.3); /* Membesar lebih besar saat h5 di-hover */
  }

  .circle-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #ff6700; /* Warna oranye */
    border-radius: 50%; /* Membuat lingkaran */
    transition: transform 0.3s ease; /* Transisi untuk membesar */
    margin-left: 10px; /* Jarak antara teks dan lingkaran */
  }

  .circle-container svg {
    width: 15px;
    height: 15px;
  }

  .home-4 {
    background-color: #fde2a6;
  }
`;

export default GlobalStyle;