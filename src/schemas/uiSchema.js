// uiSchema.js
export const uiSchema = {
  step1: {
    "ui:field": "DriverInformationForm",
    deliveryAppointmentConfirmed: {
      "ui:widget": "checkbox",
    },
    driverName: {
      "ui:placeholder": "Enter the driver name",
    },
    driverIdentificationVerified: {
      "ui:widget": "checkbox",
    },
    transportCompany: {
      "ui:placeholder": "Enter the name of the transport company",
    },
    transportCompanyVerified: {
      "ui:widget": "checkbox",
    },
  },
  step2: {
    "ui:field": "DocsCheckForm",
    supplierInfoVerified: {
      "ui:widget": "checkbox",
    },
    packingList: {
      "ui:placeholder": "Sub-Packing List",
    },
    poInPackingList: {
      "ui:widget": "checkbox",
    },
    poMaterialsVerified: {
      "ui:widget": "checkbox",
    },
    documentsReceived: {
      "ui:placeholder": "Select Documents Status",
    },
  },
  step3: {
    "ui:field": "VehicleInformationForm",
    vehicleSecurity: {
      "ui:widget": "checkbox",
    },
    exteriorSecuritySeals: {
      "ui:widget": "checkbox",
    },
    vehicleExteriorInspected: {
      "ui:widget": "checkbox",
    },
    vehicleType: {
      "ui:placeholder": "Select Vehicle Type",
    },
    vehicleHeight: {
      "ui:placeholder": "Height in Feet",
    },
    vehicleWidth: {
      "ui:placeholder": "Width in Feet",
    },
  },
};
