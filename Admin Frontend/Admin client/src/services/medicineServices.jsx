import axios from "axios";

const API_URL = "http://localhost:3030/api/medicines";
const MANUFACTURER_URL = "http://localhost:3030/api/manufacturers";
const DISTRIBUTOR_URL = "http://localhost:3030/api/distributors";

// Fetch all medicines
export const getMedicines = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching medicines:", error);
    return [];
  }
};

// export const addMedicine = async (medicineData) => {
//   try {
//     console.log("Sending Manufacturer Data:", {
//       manufacturer_Name: medicineData.manufacturer_Name, // Fix field name
//       manufactured_Country: medicineData.manufactured_Country,
//     });

//     // Send manufacturer data
//     const manufacturerResponse = await axios.post(MANUFACTURER_URL, {
//       manufacturer_Name: medicineData.manufacturer_Name, // Fix field name
//       manufactured_Country: medicineData.manufactured_Country,
//     });

//     console.log("Manufacturer Added:", manufacturerResponse.data);
//     const manufacturer_Id = manufacturerResponse.data.manufacturer_Id;

//     console.log("Sending Distributor Data:", {
//       distributor_Name: medicineData.distributor_Name, // Fix field name
//       contact_Number: medicineData.contact_Number,
//       address: medicineData.address,
//     });

//     // Send distributor data
//     const distributorResponse = await axios.post(DISTRIBUTOR_URL, {
//       distributor_Name: medicineData.distributor_Name, // Fix field name
//       contact_Number: medicineData.contact_Number,
//       address: medicineData.address,
//     });

//     console.log("Distributor Added:", distributorResponse.data);
//     const localDistributor_Id = distributorResponse.data.localDistributor_Id;

//     console.log("Sending Medicine Data:", {
//       ...medicineData,
//       manufacturer_Id,
//       localDistributor_Id,
//     });

//     // Send medicine data
//     const medicineResponse = await axios.post(API_URL, {
//       brandName: medicineData.brandName,
//       genericName: medicineData.genericName,
//       dosageForm: medicineData.dosageForm,
//       packSize: medicineData.packSize,
//       strength: medicineData.strength,
//       drugSchedule: medicineData.drugSchedule,
//       shelfLife: medicineData.shelfLife,
//       packageType: medicineData.packageType,
//       temperature: medicineData.temperature,
//       typeOfDrug: medicineData.typeOfDrug,
//       coat: medicineData.coat,
//       manufacturer_Id, // Ensure this is sent correctly
//       localDistributor_Id, // Ensure this is sent correctly
//     });

//     console.log("Medicine Added:", medicineResponse.data);
//     return medicineResponse.data;
//   } catch (error) {
//     console.error(
//       "Error adding medicine:",
//       error.response ? error.response.data : error.message
//     );
//     throw error;
//   }
// };

export const addMedicine = async (medicineData) => {
  try {
    console.log("Sending Manufacturer Data:", {
      manufacturer_Name: medicineData.manufacturer_Name,
      manufactured_Country: medicineData.manufactured_Country,
    });

    // Send manufacturer data
    const manufacturerResponse = await axios.post(MANUFACTURER_URL, {
      manufacturer_Name: medicineData.manufacturer_Name,
      manufactured_Country: medicineData.manufactured_Country,
    });

    // Log full response for debugging
    console.log("Manufacturer Response:", manufacturerResponse.data);

    // Extract manufacturer ID from the response (check if nested)
    const manufacturer_Id = manufacturerResponse.data.insertId;
    console.log("Manufacturer ID:", manufacturer_Id);

    console.log("Sending Distributor Data:", {
      distributor_Name: medicineData.distributor_Name,
      contact_Number: medicineData.contact_Number,
      address: medicineData.address,
    });

    // Send distributor data
    const distributorResponse = await axios.post(DISTRIBUTOR_URL, {
      distributor_Name: medicineData.distributor_Name,
      contact_Number: medicineData.contact_Number,
      address: medicineData.address,
    });

    // Log full response for debugging
    console.log("Distributor Response:", distributorResponse.data);

    // Extract localDistributor ID from the response (check if nested)
    const localDistributor_Id = distributorResponse.data.insertId;
    console.log("Local Distributor ID:", localDistributor_Id);

    console.log("Sending Medicine Data:", {
      ...medicineData,
      manufacturer_Id, // Ensure this is correctly passed
      localDistributor_Id, // Ensure this is correctly passed
    });

    // Send medicine data
    const medicineResponse = await axios.post(API_URL, {
      brandName: medicineData.brandName,
      genericName: medicineData.genericName,
      dosageForm: medicineData.dosageForm,
      packSize: medicineData.packSize,
      strength: medicineData.strength,
      drugSchedule: medicineData.drugSchedule,
      shelfLife: medicineData.shelfLife,
      packageType: medicineData.packageType,
      temperature: medicineData.temperature,
      typeOfDrug: medicineData.typeOfDrug,
      coat: medicineData.coat,
      manufacturer_Id, // Ensure this is sent correctly
      localDistributor_Id, // Ensure this is sent correctly
    });

    console.log("Medicine Added:", medicineResponse.data);
    return medicineResponse.data;
  } catch (error) {
    console.error(
      "Error adding medicine:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
