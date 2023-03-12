import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    productName: {
        type: String,
        required: true,
      },
    fullName: {
      type: String,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
      // required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("booking", bookingSchema);
