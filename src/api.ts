import { get, post } from '@/utils/http';
import { Param, Res } from '@/types';

// 支付页面基础数据
export const paymentPageReq = (
  param: Param = {},
): Promise<Res> => {
  return get('/', param)
};
// 支付页面付款数据
export const paymentReq = (
  param: Param = {},
): Promise<Res> => {
  return post('/', param)
};
