import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import FootNavBar from '../../component/footbar/FootNavBar';
import './wastecategory.css';

function WasteCategory() {
  return (
    <div className='wastecategory-container'>
      <Navbar />
      <div className='wastecategory-header'>
      <div className="plastic-info-container">
      <div className="plastic-category">
        <h2>Recyclable Plastics</h2>
        <p>Recyclable plastics are those that can be processed and reused to create new products. They include:</p>
        <ul>
          <li>PET (Polyethylene Terephthalate): Used for water and soda bottles, food containers, and polyester fabrics.</li>
          <li>HDPE (High-Density Polyethylene): Found in milk jugs, detergent bottles, and plastic bags.</li>
          <li>LDPE (Low-Density Polyethylene): Used for plastic bags, squeezable bottles, and some food packaging.</li>
          <li>PP (Polypropylene): Found in yogurt cups, bottle caps, and some food containers.</li>
          <li>PS (Polystyrene): Includes items like disposable cutlery, packaging foam, and CD cases.</li>
          <li>Plastics with Resin Codes: Labeled with a resin identification code inside the recycling symbol.</li>
        </ul>
      </div>
      <div className="plastic-category">
        <h2>Non-Recyclable Plastics</h2>
        <p>Non-recyclable plastics are those that are not easily recycled due to various reasons. They include:</p>
        <ul>
          <li>PVC (Polyvinyl Chloride): Commonly used in pipes, vinyl siding, and some packaging.</li>
          <li>Mixed Plastics: Plastics made from different types of resins that are difficult to separate.</li>
          <li>Bioplastics: Some bioplastics are not readily recyclable in traditional plastic recycling streams.</li>
          <li>Thermosetting Plastics: Plastics that undergo irreversible chemical reactions during production.</li>
          <li>Plastic Film: Thin plastic films used for packaging (e.g., plastic wrap, cling film).</li>
          <li>Black Plastics: Items made from black-colored plastics that are difficult to sort.</li>
        </ul>
      </div>
    </div>
      </div>
      <div classNme ='wastecategory-content'>
        <div className='wastecategory-content-item'>
      </div>
      <FootNavBar />
    </div>
    </div>
  );
}

export default WasteCategory;
