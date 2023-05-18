import { db } from "../middleware";

/*

The algorithm for pooling orders

*/
export const addOrderPool = async (order) => {
  order.products.forEach(async (product) => {
    const productData = await db
      .collection("products")
      .findOne({ _id: product.productId });
    const query = {
      productId: product.productId,
      "address.city": order.invoice.billingInfo.town,
      "address.country": order.invoice.billingInfo.stateCountry,
      totalQuantity: {
        $lt: productData.poolThreshold,
      },
    };
    const update = {
      $push: { orders: order._id },
      $inc: { totalQuantity: product.quantity },
      $set: {
        productId: product.productId,
        "address.city": order.invoice.billingInfo.town,
        "address.country": order.invoice.billingInfo.stateCountry,
        status: "in progress",
        modifiedAt: new Date(),
      },
    };
    const options = { upsert: true };
    await db.collection("orderPools").updateOne(query, update, options);
  });
};
