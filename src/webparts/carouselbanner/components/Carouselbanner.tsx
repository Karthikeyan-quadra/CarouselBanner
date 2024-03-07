// import * as React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./Carouselbanner.module.scss";
// import { ICarouselbannerProps } from "./ICarouselbannerProps";
// import { useState } from "react";

// export default function Carouselbanner(props: ICarouselbannerProps) {
//   const sampleData = [
//     { Quotes: "Quote 1", QuotedBy: "Author 1", Designation: "Designation 1" },
//     { Quotes: "Quote 2", QuotedBy: "Author 2", Designation: "Designation 2" },
//     { Quotes: "Quote 3", QuotedBy: "Author 3", Designation: "Designation 3" },
//     { Quotes: "Quote 4", QuotedBy: "Author 4", Designation: "Designation 4" },
//     { Quotes: "Quote 5", QuotedBy: "Author 5", Designation: "Designation 5" },
//     { Quotes: "Quote 6", QuotedBy: "Author 6", Designation: "Designation 6" },
//     { Quotes: "Quote 7", QuotedBy: "Author 7", Designation: "Designation 7" },
//     { Quotes: "Quote 8", QuotedBy: "Author 8", Designation: "Designation 8" },

//     // Add more sample data as needed
//   ];

//   const [quotesItems] = useState(sampleData);
//   console.log(quotesItems);

//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   customPaging: (i: any) => (
//   //     <div
//   //       style={{
//   //         width: "39px",
//   //         height: "5px",
//   //         background: "black",
//   //         borderRadius: "41px",
//   //       }}
//   //     >
//   //       {i + 1}
//   //     </div>
//   //   ),
//   // };

//   const settings = {
//     customPaging: function (i: any) {
//       console.log(i);
//       for (i = 0; i <= 1; i++) {
//         return <div style={{ borderBottom: "5px solid white" }}>{i + 1}</div>;
//       }
//     },

//     dots: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const customStyle = `
//   .slick .slick-prev {
//     left: 4px;
//     top: 10rem;
//     z-index:9;
// }

// .slick .slick-next {
//   right: 4px;
//   top: 10rem;
//   z-index:9;
// }
//   .slick .slick-next:before {
//         content: "→";
//         color: black;
//         left: -63px;
//       }
//       .slick-prev:before {
//         content: "←";
//         left: 25px;
//         color: black;
//     }
//     .slick .slick-active{
//       width: 45px;
//     height: 10px;
//     border-radius: 10px;
//     // background:#335CCC;
//     }

//     // .slick-active{
//     //   background-color: blue;
//     //       color: blue;
//     //       font-size: 6px;
//     //       border: 1px solid  blue;
//     //       border-radius: 10px;
//     //       content: 2;
//     //       width: 30px;
//     //       border-bottom: 5px solid blue;
//     //   }

//      .slick .slick-list, .slick-slider {
//         display: block;
//         height: 300px;
//         position: relative;
//     }
//     `;

//   return (
//     <div>
//       <style>{customStyle}</style>
//       <div className={styles.container}>
//         <div className={styles.child}></div>
//         <div className={styles.child2}></div>

//         {quotesItems.length ? (
//           <Slider {...settings} className="slick">
//             {quotesItems.map((items: any, index: number) => (
//               <div key={index} className={styles.textStyle}>
//                 <div>
//                   <button>
//                     <img
//                       src={require("../assets/Edit.svg")}
//                       alt="Edit button"
//                     />
//                   </button>
//                 </div>
//                 <div
//                   style={{
//                     width: "50%",
//                     marginLeft: "20px",
//                     marginTop: "35px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       fontFamily: "Segoe UI",
//                       fontSize: "20px",
//                       fontWeight: "600",
//                     }}
//                   >
//                     Elevate Your
//                   </p>
//                   <p
//                     style={{
//                       fontFamily: "Segoe UI",
//                       fontSize: "28px",
//                       fontWeight: "700",
//                       color: "#335CCC",
//                     }}
//                   >
//                     Productivity to new heights
//                   </p>
//                 </div>

//                 <div
//                   style={{
//                     width: "40%",
//                     marginLeft: "10px",
//                     marginTop: "25px",
//                   }}
//                 >
//                   <div className={styles.cardContainer}>
//                     {/* {Array.from({ length: 4 }, (_: any, i: any) => (
//                       <div key={i} className={styles.card}>
//                         <p>"{items.Quotes}"</p>
//                         <p>{items.QuotedBy}</p>
//                         <p>{items.Designation}</p>
//                       </div>
//                     ))} */}
//                     {/* {({ length: 4 }, (_: any, i: any) => ( */}
//                     <div className={styles.card}>
//                       <p>"{items.Quotes}"</p>
//                       <p>{items.QuotedBy}</p>
//                       <p>{items.Designation}</p>
//                     </div>
//                     {/* ))} */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <div>
//             <h1>No Quotes to show!!</h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import * as React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./Carouselbanner.module.scss";
// import { ICarouselbannerProps } from "./ICarouselbannerProps";
// import { useState } from "react";
// import { Button, Popover, Input, Upload } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import "antd/dist/reset.css";

// export default function Carouselbanner(props: ICarouselbannerProps) {
//   const sampleData = [
//     { Quotes: "Quote 1", QuotedBy: "Author 1", Designation: "Designation 1" },
//     { Quotes: "Quote 2", QuotedBy: "Author 2", Designation: "Designation 2" },
//     { Quotes: "Quote 3", QuotedBy: "Author 3", Designation: "Designation 3" },
//     { Quotes: "Quote 4", QuotedBy: "Author 4", Designation: "Designation 4" },
//     { Quotes: "Quote 5", QuotedBy: "Author 5", Designation: "Designation 5" },
//     { Quotes: "Quote 6", QuotedBy: "Author 6", Designation: "Designation 6" },
//     { Quotes: "Quote 7", QuotedBy: "Author 7", Designation: "Designation 7" },
//     { Quotes: "Quote 8", QuotedBy: "Author 8", Designation: "Designation 8" },

//     // Add more sample data as needed
//   ];

//   const [quotesItems] = useState(sampleData);
//   console.log(quotesItems);

//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   customPaging: (i: any) => (
//   //     <div
//   //       style={{
//   //         width: "39px",
//   //         height: "5px",
//   //         background: "black",
//   //         borderRadius: "41px",
//   //       }}
//   //     >
//   //       {i + 1}
//   //     </div>
//   //   ),
//   // };

//   const settings = {
//     customPaging: function (i: any) {
//       // console.log(i);
//       // for (i = 0; i <= 0; i++) {
//       //   return <div style={{ borderBottom: "5px solid white" }}></div>;
//       // }
//     },

//     dots: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const customStyle = `
//   .slick .slick-prev {
//     left: 4px;
//     top: 10rem;
//     z-index:9;
// }

// .slick .slick-next {
//   right: 4px;
//   top: 10rem;
//   z-index:9;
// }
//   .slick .slick-next:before {
//         content: "→";
//         color: black;
//         left: -63px;
//       }
//       .slick-prev:before {
//         content: "←";
//         left: 25px;
//         color: black;
//     }
//     .slick .slick-active{
//       width: 45px;
//     height: 10px;
//     border-radius: 10px;
//     // background:#335CCC;
//     }

//     // .slick-active{
//     //   background-color: blue;
//     //       color: blue;
//     //       font-size: 6px;
//     //       border: 1px solid  blue;
//     //       border-radius: 10px;
//     //       content: 2;
//     //       width: 30px;
//     //       border-bottom: 5px solid blue;
//     //   }

//      .slick .slick-list, .slick-slider {
//         display: block;
//         height: 300px;
//         position: relative;
//     }
//     `;
//   const handleEditButtonClick = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
//     item: any
//   ) => {
//     e.preventDefault();
//     // Add logic to handle the edit button click and show the popover
//     console.log("Edit button clicked for item:", item);
//   };

//   const popoverContent = (
//     <div>
//       <p>Title: Your Title</p>
//       <Upload>
//         <Button icon={<UploadOutlined rev={undefined} />}>Choose File</Button>
//       </Upload>
//       <Input placeholder="Image URL" />
//       <Input placeholder="URL" />
//     </div>
//   );

//   return (
//     <div>
//       <style>{customStyle}</style>
//       <div className={styles.container}>
//         <div className={styles.child}></div>
//         <div className={styles.child2}></div>

//         {quotesItems.length ? (
//           <Slider {...settings} className="slick">
//             {quotesItems.map((items: any, index: number) => (
//               <div key={index} className={styles.textStyle}>
//                 <div>
//                   {/* <button>
//                     <img
//                       src={require("../assets/Edit.svg")}
//                       alt="Edit button"
//                     />
//                   </button> */}

//                   <Popover
//                     content={popoverContent}
//                     title="Edit Content"
//                     trigger="click"
//                   >
//                     <Button
//                       onClick={(e: any) => handleEditButtonClick(e, items)}
//                     >
//                       <img
//                         src={require("../assets/Edit.svg")}
//                         alt="Edit button"
//                       />
//                     </Button>
//                   </Popover>
//                 </div>
//                 <div
//                   style={{
//                     width: "50%",
//                     marginLeft: "20px",
//                     marginTop: "35px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       fontFamily: "Segoe UI",
//                       fontSize: "20px",
//                       fontWeight: "600",
//                     }}
//                   >
//                     Elevate Your
//                   </p>
//                   <p
//                     style={{
//                       fontFamily: "Segoe UI",
//                       fontSize: "28px",
//                       fontWeight: "700",
//                       color: "#335CCC",
//                     }}
//                   >
//                     Productivity to new heights
//                   </p>
//                 </div>

//                 <div
//                   style={{
//                     width: "40%",
//                     marginLeft: "10px",
//                     marginTop: "25px",
//                   }}
//                 >
//                   <div className={styles.cardContainer}>
//                     {/* {Array.from({ length: 4 }, (_: any, i: any) => (
//                       <div key={i} className={styles.card}>
//                         <p>"{items.Quotes}"</p>
//                         <p>{items.QuotedBy}</p>
//                         <p>{items.Designation}</p>
//                       </div>
//                     ))} */}
//                     {/* {({ length: 4 }, (_: any, i: any) => ( */}
//                     <div className={styles.card}>
//                       <p>"{items.Quotes}"</p>
//                       <p>{items.QuotedBy}</p>
//                       <p>{items.Designation}</p>
//                     </div>
//                     {/* ))} */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <div>
//             <h1>No Quotes to show!!</h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import * as React from "react";
import styles from "./Carouselbanner.module.scss";
import { ICarouselbannerProps } from "./ICarouselbannerProps";
import { useState } from "react";
import { Carousel } from "antd";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  // makeStyles,
  // shorthands,
  // tokens,
  Label,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import "@fluentui/react/dist/css/fabric.css";

import "antd/dist/reset.css";

// const useStyles = makeStyles({
//   root: {
//     ...shorthands.border("2px", "solid", "#ccc"),
//     ...shorthands.overflow("hidden"),
//     display: "flex",
//     height: "480px",
//     backgroundColor: "#fff",
//   },
//   content: {
//     ...shorthands.flex(1),
//     ...shorthands.padding("16px"),
//     display: "grid",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     gridRowGap: tokens.spacingVerticalXXL,
//     gridAutoRows: "max-content",
//   },
//   field: {
//     display: "grid",
//     gridRowGap: tokens.spacingVerticalS,
//   },
// });

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
  ];

  const [quotesItems] = useState(sampleData);
  console.log(quotesItems);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const style = useStyles();

  const handleEditButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: any
  ) => {
    e.preventDefault();

    console.log("Edit button clicked for item:", item);
  };

  // const drawerContent = (
  //   <div>
  //     <label>Title</label>
  //     <input type="text" />
  //     <label>Image</label>

  //     <Upload>
  //       <Button iconProps={{ iconName: "Upload" }}>Choose File</Button>
  //     </Upload>
  //     <label>URL</label>
  //     <input type="text" />
  //   </div>
  // );

  const customStyle = `:where(.css-dev-only-do-not-override-1uweeqc).ant-carousel .slick-dots li.slick-active button {
    // background-color: #ea881a !important;
    background: #335CCC !important;
    height: 5px !important;
   }`;

  return (
    <div>
      <style>{customStyle}</style>
      <div className={styles.container}>
        <div className={styles.child}></div>
        <div className={styles.child2}></div>

        {quotesItems.length ? (
          <Carousel>
            {quotesItems.map((items: any, index: number) => (
              <div key={index} className={styles.textStyle}>
                <div>
                  <Drawer
                    type="overlay"
                    open={isDrawerOpen}
                    onOpenChange={(event: any, { open }: any) =>
                      setIsDrawerOpen(open)
                    }
                  >
                    <DrawerHeader>
                      <DrawerHeaderTitle
                        action={
                          <Button
                            appearance="subtle"
                            aria-label="Close"
                            icon={<Dismiss24Regular />}
                            onClick={() => setIsDrawerOpen(false)}
                          />
                        }
                      >
                        Edit Content
                      </DrawerHeaderTitle>
                    </DrawerHeader>

                    <DrawerBody>
                      <Label>Title</Label>
                      <input type="text" />

                      <Label>Image</Label>
                      <Upload>
                        <Button icon={<UploadOutlined rev={undefined} />}>
                          Choose File
                        </Button>
                      </Upload>

                      <Label>URL</Label>
                      <input type="text" />
                    </DrawerBody>
                  </Drawer>
                  <Button onClick={(e: any) => handleEditButtonClick(e, items)}>
                    <img
                      src={require("../assets/Edit.svg")}
                      alt="Edit button"
                    />
                  </Button>
                </div>
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

                <div
                  style={{
                    width: "40%",
                    marginLeft: "10px",
                    marginTop: "25px",
                  }}
                >
                  <div className={styles.cardContainer}>
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
          </Carousel>
        ) : (
          <div>
            <h1>No Quotes to show!!</h1>
          </div>
        )}
      </div>
    </div>
  );
}
