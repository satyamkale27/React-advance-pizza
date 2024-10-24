import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  // to update data using fetcher we have to use fetcher Form // it updates data without ausing navigation //
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  // params gives paramater in url, which is id in thi case //
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
