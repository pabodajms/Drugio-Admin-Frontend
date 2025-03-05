import React, { useState } from "react";
import { addMedicine } from "../services/medicineServices";

const AddMedicineForm = ({ onClose, onMedicineAdded }) => {
  const [formData, setFormData] = useState({
    brandName: "",
    genericName: "",
    dosageForm: "",
    packSize: "",
    strength: "",
    drugSchedule: "",
    shelfLife: "",
    packageType: "",
    temperature: "",
    typeOfDrug: "",
    coat: "",
    manufacturer_Name: "",
    manufactured_Country: "",
    distributor_Name: "",
    contact_Number: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMedicine(formData);
      onMedicineAdded(); // Refresh medicine list
      onClose(); // Close the form
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Medicine</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="brandName"
            placeholder="Brand Name"
            value={formData.brandName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="genericName"
            placeholder="Generic Name"
            value={formData.genericName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="dosageForm"
            placeholder="Dosage Form"
            value={formData.dosageForm}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="packSize"
            placeholder="Pack Size"
            value={formData.packSize}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="strength"
            placeholder="Strength"
            value={formData.strength}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="drugSchedule"
            placeholder="Drug Schedule"
            value={formData.drugSchedule}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="shelfLife"
            placeholder="Shelf Life"
            value={formData.shelfLife}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="packageType"
            placeholder="Package Type"
            value={formData.packageType}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="temperature"
            placeholder="Temperature"
            value={formData.temperature}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="typeOfDrug"
            placeholder="Type of Drug"
            value={formData.typeOfDrug}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="coat"
            placeholder="Coat"
            value={formData.coat}
            onChange={handleChange}
            required
          />

          <h4>Manufacturer Details</h4>
          <input
            type="text"
            name="manufacturer_Name"
            placeholder="Manufacturer Name"
            value={formData.manufacturer_Name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="manufactured_Country"
            placeholder="Manufactured Country"
            value={formData.manufactured_Country}
            onChange={handleChange}
            required
          />

          <h4>Local Distributor Details</h4>
          <input
            type="text"
            name="distributor_Name"
            placeholder="Distributor Name"
            value={formData.distributor_Name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact_Number"
            placeholder="Contact Number"
            value={formData.contact_Number}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Medicine</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicineForm;
