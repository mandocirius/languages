import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { PaymentsService, CybersourcePaymentDto, MobileReceiptDto } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('cybersource/checkout')
  @HttpCode(HttpStatus.OK)
  async checkoutCybersource(@Body() dto: CybersourcePaymentDto) {
    return this.paymentsService.processCybersourcePayment(dto);
  }

  @Post('mobile/verify-receipt')
  @HttpCode(HttpStatus.OK)
  async verifyMobileReceipt(@Body() dto: MobileReceiptDto) {
    return this.paymentsService.validateMobileReceipt(dto);
  }

  @Get('status/:userId')
  async getStatus(@Param('userId') userId: string) {
    return this.paymentsService.getSubscriptionStatus(userId);
  }
}
