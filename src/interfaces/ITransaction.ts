export interface ITransaction {
  paymentMethod: string
  customerName: string
  customerIdentity: string
  customerPhone: string
  customerEmail: string
  customerCategory: string
  addressZipCode: string
  addressStreet: string
  addressNumber: string
  addressComplement: string
  addressDistrict: string
  addressCity: string
  addressStateInitials: string
  courseCode: string
  courseDescription: string
  courseUnitPrice: number
  creditCardHolder: string
  creditCardCardNumber: string
  creditCardExpirationDate: string
  creditCardSecurityCode: string
  creditCardInstallmentQuantity: number
  creditCardIdentity: string;
  discount: number;
}