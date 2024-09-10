import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { User } from 'src/users/user.entity';
import { OrderDetails } from 'src/orderDetails/orderDetails.entity';
import { Product } from 'src/products/products.entity';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(OrderDetails)
    private orderDetailsRepository: Repository<OrderDetails>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async addOrder(userId: string, products: any) {
    console.log(`productsId recibido en el repositorio: ${products}`);

    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new Error('Usuario no encontrado.');
    }
    console.log(`El usuario ${user.id} ha sido cargado correctamente!`);

    const orderTable = new Order();
    orderTable.user_id = user;
    orderTable.date = new Date();
    await this.orderRepository.save(orderTable);

    let total = 0; 
    const orderDetailsTable = new OrderDetails();
    orderDetailsTable.order_id = orderTable;
    orderDetailsTable.products_id = [];

    if (products && products.length > 0) {
      await Promise.all(
        products.map(async (productId) => {
          const product = await this.productRepository.findOne({
            where: { id: productId },
          });

          if (!product) {
            throw new Error(`Producto no encontrado: ${productId}`);
          }

          if (product.stock <= 0) {
            throw new Error(`Producto ${productId} agotado.`);
          }

          product.stock -= 1;
          await this.productRepository.save(product);

          orderDetailsTable.products_id.push(product); // Suponiendo que products_id es una lista de productos

          total += parseFloat(product.price.toString()); // Convertir el precio del producto a número y sumarlo al total
          console.log(
            `Producto: ${productId}, Precio: ${product.price}, Total acumulado: ${total}`,
          );
        }),
      );

      orderDetailsTable.price = total; // Asignamos el precio total a orderDetailsTable
    } else {
      console.error('La lista de productos está vacía.');
      throw new Error('La lista de productos está vacía.');
    }

    await this.orderDetailsRepository.save(orderDetailsTable);
    console.log(`Total acumulado: ${total}`);

    return {
      orderId: orderTable.id,
      total: total, // Devolver el total como número
      orderDetailId: orderDetailsTable.id,
    };
  }

  async getOrder(id: string): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id: id },
      relations: {
        orderDetails: {
          products_id:true,
        },
      },
    });
    console.log(await this.orderRepository.findOne({where:{id}}));    
    if (!order) {
      throw new Error('No encontrado.');
    }

    return order;
  }
}

/*
 */

/*: Promise<{
    orderId: Order;
    total: number;
    orderDetailId: OrderDetails;
  }>  */
//-------------------------------------------------------------------------------------
/*
        const orderTable = new Order();
    orderTable.user_id = user;
    orderTable.date = new Date();
    await this.orderRepository.save(orderTable);
    console.log(`que informacion recibe 10 ${productsId}`);
    
    const products = await this.productRepository.findOneBy({
      id: productsId
    });
   

    if (!productsId || products.length === 0) {
      throw new Error(
        'No se encontraron productos con los identificadores proporcionados.',
      );
    }
    console.log(`que informacion recibe 30 ${products}`);
    console.log(`que informacion recibe 40 ${productsId}`);

    const foundProductIds = productsId.map((product) => {product.id});
    console.log(`que informacion recibe 40 ${foundProductIds}`);

    const productIdsNotFound = foundProductIds.filter(
      (id) => !productsId.includes(id),
    );
    if (productIdsNotFound.length > 0) {
      throw new Error(
        `Producto/s no encontrado/s: ${productIdsNotFound.join(', ')} `,
      );
    }
    console.log(`que informacion recibe 50 ${productIdsNotFound}`);

    const outOfStockProducts = products.filter(
      (idProduct) => idProduct.stock <= 0,
    );
    if (outOfStockProducts.length > 0) {
      const outOfStockproductsId = outOfStockProducts.map((prod) => prod.id);
      throw new Error(
        `Productos agotados: ${outOfStockproductsId.join(', ')}`,
      );
    }
    console.log(`que informacion recibe 60 ${outOfStockProducts}`);

    const total = products.reduce((sum, product) => sum + product.price, 0);

    const orderDetailsTable = new OrderDetails();
    orderDetailsTable.order_id = orderTable;
    orderDetailsTable.products_id = products;
    orderDetailsTable.price = total;
    await this.orderDetailsRepository.save(orderDetailsTable);
    console.log(`que informacion recibe 70 ${orderDetailsTable}`);

    for (const product of products) {
      if (product.stock <= 0) {
        throw new Error(`Producto ${product.id} agotado.`);
      }
      product.stock -= 1;
      await this.productRepository.save(product);
    }
    console.log(`que informacion recibe 80 ${orderTable}`);
    console.log(`que informacion recibe 90 ${total}`);
    console.log(`que informacion recibe 100 ${orderDetailsTable}`);

    return { orderId: orderTable, total, orderDetailId: orderDetailsTable }; */
/*: Promise<{
    orderId: Order;
    total: number;
    orderDetailId: OrderDetails;
  }>  */

/*//este esta bien: 
      const orderTable = new Order();
    orderTable.date = new Date();
    orderTable.user_id = user;
    await this.orderRepository.save(orderTable);

    const orderDetailsTable = new OrderDetails();
    orderDetailsTable.order_id = orderTable;
    orderDetailsTable.products_id = [];//productos


    
console.log(`que es lo que recibe este console.log ${productsId}`);
  const products = await this.productRepository.findOneBy({
    id: productsId,
  });
const total = products.price

    if (productsId && productsId.length > 0) {
      await Promise.all(
        productsId.map(async (productId) => {
          const foundProduct = await this.productRepository.findOne({
            where: { id: productId, stock: Not(0)},
          });

          if (!foundProduct) {
            console.error(`Product not found or out of stock: ${productId}`);
            return;
          }

          foundProduct.stock -= 1;
          
          await this.productRepository.save(foundProduct);

          orderDetailsTable.products_id.push(foundProduct);
        }),
      );
    } else {
      console.error('Product IDs array is undefined or empty');
    }

    orderDetailsTable.price = total;
    await this.orderDetailsRepository.save(orderDetailsTable);

    return {
      orderId: orderTable.id,
      total,
      orderDetailId: orderDetailsTable.id,
    };
  
  */
