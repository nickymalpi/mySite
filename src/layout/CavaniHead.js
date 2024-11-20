import Head from "next/head";
const CavaniHead = () => {
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="Name of your web site" />
      <meta name="author" content="Nicoletta Rossi" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <title>Nicoletta Rossi Portfolio</title>
      {/* STYLES */}
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" type="text/css" href="assets/css/animation.css" />
      <link rel="stylesheet" type="text/css" href="assets/css/base.css" />
      <link rel="stylesheet" type="text/css" href="assets/css/glitch.css" />
      {/* <link rel="stylesheet" type="text/css" href="assets/css/cdheadline.css" /> */}
      {/* <link rel="stylesheet" type="text/css" href="assets/css/fontello.css" /> */}
      <link rel="stylesheet" type="text/css" href="assets/css/hamburgers.css" />
      {/* <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/magnificpopup.css"
      /> */}
      {/* <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/owlcarousel.css"
      /> */}
      {/* <link rel="stylesheet" type="text/css" href="assets/css/owltheme.css" /> */}
      <link rel="stylesheet" type="text/css" href="assets/css/custom.css" />
      <link rel="stylesheet" type="text/css" href="assets/css/main.css" />
    </Head>
  );
};
export default CavaniHead;
