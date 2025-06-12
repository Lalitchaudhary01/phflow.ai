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
        },
        driverName: {
          type: "string",
          title: "Driver Name",
        },
        driverIdentificationVerified: {
          type: "boolean",
          title: "Driver Identification Verified",
        },
        transportCompany: {
          type: "string",
          title: "Transport Company",
        },
        transportCompanyVerified: {
          type: "boolean",
          title: "Transport Company Identification Verified",
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
        },
        packingList: {
          type: "string",
          title: "Packing List",
        },
        poInPackingList: {
          type: "boolean",
          title: "PO in Packing List",
        },
        poMaterialsVerified: {
          type: "boolean",
          title: "PO Materials Verified",
        },
        documentsReceived: {
          type: "string",
          title: "Documents received by Admin",
          enum: ["", "packing-list", "delivery-challan", "both"],
          enumNames: [
            "Packing List, Delivery Challan",
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
        },
        vehicleExteriorInspected: {
          type: "boolean",
          title: "Vehicle Exterior Inspected",
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
