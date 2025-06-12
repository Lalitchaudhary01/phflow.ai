// driverCheckInSchema.js
export const schema = {
  type: "object",
  properties: {
    step1: {
      type: "object",
      title: "Driver Information",
      properties: {
        deliveryAppointmentConfirmed: {
          type: "boolean",
          title: "Delivery Appointment Confirmed",
          default: false,
        },
        driverName: {
          type: "string",
          title: "Driver Name",
        },
        driverIdentificationVerified: {
          type: "boolean",
          title: "Driver Identification Verified",
          default: false,
        },
        transportCompany: {
          type: "string",
          title: "Transport Company",
        },
        transportCompanyVerified: {
          type: "boolean",
          title: "Transport Company Identification Verified",
          default: false,
        },
      },
    },
    step2: {
      type: "object",
      title: "Docs Check",
      properties: {
        supplierInfoVerified: {
          type: "boolean",
          title: "Supplier Information Verified",
          default: false,
        },
        packingList: {
          type: "string",
          title: "Packing List",
        },
        poInPackingList: {
          type: "boolean",
          title: "PO in Packing List",
          default: false,
        },
        poMaterialsVerified: {
          type: "boolean",
          title: "PO Materials Verified",
          default: false,
        },
        documentsReceived: {
          type: "string",
          title: "Documents received by Admin",
          enum: ["", "packing-list", "delivery-challan", "both"],
          enumNames: [
            "Select Documents Status",
            "Packing List",
            "Delivery Challan",
            "Both",
          ],
        },
      },
    },
    step3: {
      type: "object",
      title: "Vehicle Information",
      properties: {
        vehicleSecurity: {
          type: "boolean",
          title: "Vehicle Security: No extra members in vehicle",
          default: false,
        },
        vehicleType: {
          type: "string",
          title: "Vehicle Type",
          enum: ["", "truck", "van", "trailer"],
          enumNames: ["Select Vehicle Type", "Truck", "Van", "Trailer"],
        },
        licensePlate: {
          type: "string",
          title: "License Plate",
        },
        exteriorSecuritySeals: {
          type: "boolean",
          title: "Exterior Security Seals Intact",
          default: false,
        },
        vehicleExteriorInspected: {
          type: "boolean",
          title: "Vehicle Exterior Inspected",
          default: false,
        },
        vehicleHeight: {
          type: "string",
          title: "Vehicle Height",
          enum: ["", "8", "10", "12", "14"],
          enumNames: [
            "Height in Feet",
            "8 feet",
            "10 feet",
            "12 feet",
            "14 feet",
          ],
        },
        vehicleWidth: {
          type: "string",
          title: "Vehicle Width",
          enum: ["", "6", "8", "10"],
          enumNames: ["Width in Feet", "6 feet", "8 feet", "10 feet"],
        },
      },
    },
  },
};
