import mongoose from "mongoose";

// const AutoIncrement = require("mongoose-sequence")(mongoose);
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },

    password: String,
    image: String,

    description: String,
    schedule: String,
    status: Boolean, // active, inactive
    role: { type: String }, // admin, vendor

    // vendors document
    adharFrontPicture: {
      type: String,
    },
    adharBackPicture: {
      type: String,
    },
    panCardPicture: {
      type: String,
    },
    UtilityBillPicture: {
      type: String,
    },
    signature: {
      type: String,
    },

    accountHolderName: {
      type: String,
      default: "",
    },
    accountNumber: {
      type: String,
      default: "",
    },
    bankName: {
      type: String,
      default: "",
    },
    ifscCode: {
      type: String,
      default: "",
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
// UserSchema.plugin(AutoIncrement, { inc_field: "userNumericId", collection_name: "users" });
export default mongoose.models?.User || mongoose.model("User", UserSchema);
