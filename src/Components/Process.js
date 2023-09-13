import React from "react";
import "../css/Process.css";
import image1 from "../Assets/process/1.jpeg";
import image2 from "../Assets/process/2.jpeg";
import image3 from "../Assets/process/3.jpeg";
import image4 from "../Assets/process/5.jpeg";
import image5 from "../Assets/process/6.jpeg";
import image6 from "../Assets/process/7.jpeg";
import image7 from "../Assets/process/8.jpeg";
import image8 from "../Assets/process/9.jpeg";
import image9 from "../Assets/process/10.jpeg";





function Process() {
  window.scrollTo(0, 0);

  const data = [
    {
      icon: image1,
      title: "Grey Yarn",
      content:
        " Initially we are buying the yarn from the Mill sector in various counts of 2/20s,2/30s,2/40s, and 10s,2s,6s. and many other counts",
    },
    {
      icon: image2,
      title: "Loading Yarn",
      content:
        " After getting the yarn from the mills then we are loading the yarns in different kind of capacity machine like 20bundles,40 bundles up to 100 bundles. Each bundles having the weight of 5kgs",
    },
    {
      icon: image3,
      title: "Dyeing",
      content:
        "We ensure all our products conform to the latest ECO Friendly Specifications. We use cabinet, Reactive hank dyeing units with the capacity of 2.0 tons per day. Also we use only AZO free dyes for our processes and the raw materials complies with the higher quality and colour fastness standard.",
    },
    {
      icon: image4,
      title: "Dyed Yarn",
      content:
        "After loading the grey yarn in to the machine then we are matching the colors according to the colors.",
    },
    {
      icon: image5,
      title: "Hydro Extracted",
      content:
        "After finished the dyeing then we take the yarn in hydro extractor for drying the yarn. Then we will put in to the Dryer for quick drying. Then we test in quality lab.",
    },
    {
      icon: image6,
      title: "Quality Lab",
      content: "To check shrinkage, colour fastness, GSM, wet & Dry Rub etc.",
    },
    {
      icon: image7,
      title: "Weaving",
      content:
        "We dedicated weaving units with 500 Looms inclusive of handloom, Power loom, Auto loom Weaves. Our weaving capabilities are scalable and have global brands of machinery to ensure that we deliver a wide range of weaving patterns including satin, Dobby, Twill, Jacquard Weaves.",
    },
    {
      icon: image8,
      title: "Printing",
      content:
        "We provide to a variety of customised needs Inclusing embroidered and printed madeups. Our latest moderns of machinery helps to put Imagination to print in a variety of ways Based on the customer’s requirements.",
    },
    {
      icon: image9,
      title: "Stitching",
      content:
        "In house stitching units with 20 Imported sewing Machines and additional 100 machines under our Disposal.",
    },
  ];

  return (
    <div className="process">
      <div className="process-head">
        <div className="container">
          <h3 id="process-page">Process Page</h3>
          <p  id="processed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
          </p>
        </div>
      </div>
      <div className="container">
        <div className="process-method">
          {data.map((item, index) => (
            <div key={index} className="process-card">
              <div>
                <img src={item.icon}></img>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  );
}
export default Process;
