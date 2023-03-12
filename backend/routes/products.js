import express from "express";
import { createProduct, deleteProduct, getAllProduct, getFeaturedProducts, getProductBySearch, getSingleProduct, updateProduct ,getProductCount} from "../controllers/productController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();


router.post("/",verifyAdmin, createProduct);
router.put("/:id",verifyAdmin, updateProduct);
router.delete("/:id", verifyAdmin,deleteProduct);
router.get("/:id", getSingleProduct);
router.get("/", getAllProduct);
router.get("/search/getProductBySearch", getProductBySearch);
router.get("/search/getProductBySearch", getFeaturedProducts);

router.get("/search/getProductCount", getProductCount);

export default router;
