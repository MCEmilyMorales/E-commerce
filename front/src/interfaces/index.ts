import { execOnce } from "next/dist/shared/lib/utils";

//* registro de usuario que enviamos *
export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: number;
  country: string;
  city: string;
}

// Response al registro de usuario que enviamos *
export interface IRegisterUserResponse {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: number;
  country: string;
  city: string;
}

//* datos para iniciar sesion *
export interface ILoginUser {
  email: string;
  password: string;
}

// Response a datos para iniciar sesion *
export interface ILoginUserResponse {
  success: string;
  token: string;
}

//* datos para crear ordenes *
export interface ICreateOrder {
  userId: string;
  products: string[]; //Partial<Product[]>; Solo recibe el Id del producto
}

// Response a datos para crear ordenes
export interface ICreateOrderResponse {
  orderId: string;
  total: number;
  orderDetailId: string;
}

//* Productos cargados *
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  category: string;
}

export interface IProductListProps {
  products: IProduct[];
}
//* Datos de tabla de OrderDetails *
export interface IOrderDetails {
  id: string;
  price: number;
}

//* Datos de tabla de Order *
export interface IOrderId {
  id: string;
  date: string;
  user_id: IRegisterUserResponse;
  orderDetails: IOrderDetails;
}
export interface IButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

//* Boton *
export interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}
