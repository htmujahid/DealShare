import { db } from "../middleware";

export async function addInvoice(invoice) {
  const { insertedId } = await db.collection("invoices").insertOne(invoice);
  return insertedId;
}
