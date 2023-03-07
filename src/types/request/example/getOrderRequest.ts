import BaseQueryRequest from "../base";

interface IGetOrderRequest {
  user_id?: string;
  invoice_number?: string;
  payment_method?: string;
  delivery_type?: string;
  phone?: string;
  order_status?: string;
  distributor_code?: string;
  order_at?: string;
}

class GetOrderRequest extends BaseQueryRequest implements IGetOrderRequest {
  user_id?: string;
  invoice_number?: string;
  payment_method?: string;
  delivery_type?: string;
  phone?: string;
  order_status?: string;
  distributor_code?: string;
  order_at?: string;
  constructor(getOrderOptions: Partial<IGetOrderRequest>, paging: BaseQueryRequest) {
    super(paging);
    Object.assign(this, getOrderOptions);
  }
}

export default GetOrderRequest;
