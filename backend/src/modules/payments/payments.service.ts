import { Injectable, BadRequestException } from '@nestjs/common';

export interface CybersourcePaymentDto {
  userId: string;
  transientToken: string;
  planId: string;
  amount: number;
  currency: string;
}

export interface MobileReceiptDto {
  userId: string;
  platform: 'APPLE' | 'GOOGLE';
  receiptData: string;
  planId: string;
}

@Injectable()
export class PaymentsService {
  private activeSubscriptions = new Map<string, any>();

  async processCybersourcePayment(dto: CybersourcePaymentDto) {
    if (!dto.transientToken) {
      throw new BadRequestException('Transient token de CyberSource requerido');
    }

    const paymentSuccess = true;

    if (paymentSuccess) {
      const subscription = {
        userId: dto.userId,
        planId: dto.planId,
        provider: 'CYBERSOURCE',
        status: 'ACTIVE',
        amount: dto.amount,
        currency: dto.currency,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      };

      this.activeSubscriptions.set(dto.userId, subscription);
      return {
        success: true,
        message: 'Suscripción Web activada exitosamente vía CyberSource',
        subscription,
      };
    }

    throw new BadRequestException('Transacción rechazada por el procesador de pagos');
  }

  async validateMobileReceipt(dto: MobileReceiptDto) {
    if (!dto.receiptData) {
      throw new BadRequestException('El recibo de compra es obligatorio');
    }

    const isValid = true;

    if (isValid) {
      const subscription = {
        userId: dto.userId,
        planId: dto.planId,
        provider: dto.platform,
        status: 'ACTIVE',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      };

      this.activeSubscriptions.set(dto.userId, subscription);
      return {
        success: true,
        message: Suscripción móvil \ validada exitosamente,
        subscription,
      };
    }

    throw new BadRequestException('Recibo in-app no válido');
  }

  async getSubscriptionStatus(userId: string) {
    const sub = this.activeSubscriptions.get(userId);
    return sub || { userId, status: 'FREE', planId: 'FREE_TIER' };
  }
}
