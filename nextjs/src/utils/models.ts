export enum OrderStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

export const OrderStatusTranslate = {
    [OrderStatus.Pending]: 'Pendente',
    [OrderStatus.Approved]: 'Aprovado',
    [OrderStatus.Rejected]: 'Rejeitado',
}