import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ModerationService } from './moderation.service';

@Controller('moderation')
export class ModerationController {
  constructor(private readonly moderationService: ModerationService) {}

  @Post('report')
  @HttpCode(HttpStatus.OK)
  async reportUser(
    @Body('reporterId') reporterId: string,
    @Body('reportedUserId') reportedUserId: string,
    @Body('roomName') roomName: string,
    @Body('reason') reason: string,
    @Body('details') details?: string,
  ) {
    return this.moderationService.reportUser(reporterId, reportedUserId, roomName, reason, details);
  }

  @Post('block')
  @HttpCode(HttpStatus.OK)
  async blockUser(
    @Body('userId') userId: string,
    @Body('blockedUserId') blockedUserId: string,
  ) {
    return this.moderationService.blockUser(userId, blockedUserId);
  }
}
