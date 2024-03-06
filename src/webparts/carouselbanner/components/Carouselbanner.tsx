// import * as React from 'react';
// import styles from './Carouselbanner.module.scss';
// import type { ICarouselbannerProps } from './ICarouselbannerProps';
// import { escape } from '@microsoft/sp-lodash-subset';

// export default class Carouselbanner extends React.Component<ICarouselbannerProps, {}> {
//   public render(): React.ReactElement<ICarouselbannerProps> {
//     const {
//       description,
//       isDarkTheme,
//       environmentMessage,
//       hasTeamsContext,
//       userDisplayName
//     } = this.props;

//     return (
//       <section className={`${styles.carouselbanner} ${hasTeamsContext ? styles.teams : ''}`}>
//         <div className={styles.welcome}>
//           <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
//           <h2>Well done, {escape(userDisplayName)}!</h2>
//           <div>{environmentMessage}</div>
//           <div>Web part property value: <strong>{escape(description)}</strong></div>
//         </div>
//         <div>
//           <h3>Welcome to SharePoint Framework!</h3>
//           <p>
//             The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
//           </p>
//           <h4>Learn more about SPFx development:</h4>
//           <ul className={styles.links}>
//             <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
//             <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
//           </ul>
//         </div>
//       </section>
//     );
//   }
// }

// import * as React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./Carouselbanner.module.scss";
// // import { useEffect } from "react";
// // import { useState } from 'react';
// import { ICarouselbannerProps } from "./ICarouselbannerProps";

// export default function Carouselbanner(props: ICarouselbannerProps) {
//   // const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6]);
//   // const handleClick = () => {
//   //   setSlides(
//   //     slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
//   //   );
//   // };

//   // useEffect(() => {
//   //   console.log(props.collectionData);
//   // }, [props.collectionData]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     appendDots: (dots: any) => (
//       <div
//         style={{
//           backgroundColor: "#ddd",
//           borderRadius: "10px",
//           // padding: "10px"
//         }}
//       >
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: (i: any) => (
//       <div
//         style={{
//           width: "30px",
//           color: "blue",
//           border: "1px blue solid",
//         }}
//       >
//         {i + 1}
//       </div>
//     ),
//   };

//   const customStyle = `.slick-next:before {
//     content: "→";
//     color: black;
//     margin-left: -63px;
//   }
//   .slick-prev:before {
//     content: "←";
//     margin-left: 25px;
//     color: black;
// }`;
//   return (
//     <div>
//       <style>{customStyle}</style>
//       <div>
//         <Slider {...settings}>
//           <div className={styles.banner}>
//             <p
//               style={{
//                 fontFamily: "Segoe UI",
//                 fontSize: "20px",
//                 fontWeight: "600",
//               }}
//             >
//               Elevate Your
//             </p>
//             <p
//               style={{
//                 fontFamily: "Segoe UI",
//                 fontSize: "28px",
//                 fontWeight: "700",
//                 color: "#335CCC",
//               }}
//             >
//               Productivity to new heights
//             </p>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carouselbanner.module.scss";
import { ICarouselbannerProps } from "./ICarouselbannerProps";
import { useState } from "react";

export default function Carouselbanner(props: ICarouselbannerProps) {
  const sampleData = [
    { Quotes: "Quote 1", QuotedBy: "Author 1", Designation: "Designation 1" },
    { Quotes: "Quote 2", QuotedBy: "Author 2", Designation: "Designation 2" },
    { Quotes: "Quote 3", QuotedBy: "Author 3", Designation: "Designation 3" },
    { Quotes: "Quote 4", QuotedBy: "Author 4", Designation: "Designation 4" },
    { Quotes: "Quote 5", QuotedBy: "Author 5", Designation: "Designation 5" },
    { Quotes: "Quote 6", QuotedBy: "Author 6", Designation: "Designation 6" },
    { Quotes: "Quote 7", QuotedBy: "Author 7", Designation: "Designation 7" },
    { Quotes: "Quote 8", QuotedBy: "Author 8", Designation: "Designation 8" },

    // Add more sample data as needed
  ];

  const [quotesItems] = useState(sampleData);
  console.log(quotesItems);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  const customStyle = `
  .slick .slick-prev {
    left: 4px;
    top: 10rem;
    z-index:9;
}

.slick .slick-next {
  right: 4px;
  top: 10rem;
  z-index:9;
}
  .slick .slick-next:before {
        content: "→";
        color: black;
        left: -63px;
      }
      .slick-prev:before {
        content: "←";
        left: 25px;
        color: black;
    }`;

  return (
    <div>
      <style>{customStyle}</style>
      <div className={styles.container}>
        <div className={styles.child}></div>
        <div className={styles.child2}></div>

        {quotesItems.length ? (
          <Slider {...settings} className="slick">
            {quotesItems.map((items: any, index: number) => (
              <div key={index} className={styles.textStyle}>
                <div
                  style={{
                    width: "50%",
                    marginLeft: "20px",
                    marginTop: "35px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Segoe UI",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Elevate Your
                  </p>
                  <p
                    style={{
                      fontFamily: "Segoe UI",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#335CCC",
                    }}
                  >
                    Productivity to new heights
                  </p>
                </div>

                {/* <div style={{ width: "40%", marginLeft: "10px" }}>
                  <div className={styles.card}>
                    <p>"{items.Quotes}"</p>
                    <p>{items.QuotedBy}</p>
                    <p>{items.Designation}</p>
                  </div>
                </div> */}

                <div
                  style={{
                    width: "40%",
                    marginLeft: "10px",
                    marginTop: "25px",
                  }}
                >
                  <div className={styles.cardContainer}>
                    {/* {Array.from({ length: 4 }, (_: any, i: any) => (
                      <div key={i} className={styles.card}>
                        <p>"{items.Quotes}"</p>
                        <p>{items.QuotedBy}</p>
                        <p>{items.Designation}</p>
                      </div>
                    ))} */}
                    {/* {({ length: 4 }, (_: any, i: any) => ( */}
                    <div className={styles.card}>
                      <p>"{items.Quotes}"</p>
                      <p>{items.QuotedBy}</p>
                      <p>{items.Designation}</p>
                    </div>
                    {/* ))} */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div>
            <h1>No Quotes to show!!</h1>
          </div>
        )}
      </div>
    </div>
  );
}
