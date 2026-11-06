import { Injectable, BadRequestException } from '@nestjs/common';

export interface ReportRecord {
  id: string;
  reporterId: string;
  reportedUserId: string;
  roomName: string;
  reason: string;
  details?: string;
  createdAt: Date;
}

@Injectable()
export class ModerationService {
  private reports: ReportRecord[] = [];
  private blocksMap = new Map<string, Set<string>>();

  async reportUser(reporterId: string, reportedUserId: string, roomName: string, reason: string, details?: string) {
    if (reporterId === reportedUserId) {
      throw new BadRequestException('No puedes reportarte a ti mismo');
    }

    const newReport: ReportRecord = {
      id: crypto.randomUUID(),
      reporterId,
      reportedUserId,
      roomName,
      reason,
      details,
      createdAt: new Date(),
    };

    this.reports.push(newReport);
    await this.blockUser(reporterId, reportedUserId);

    return {
      success: true,
      message: 'Reporte registrado y usuario bloqueado preventivamente',
      reportId: newReport.id,
    };
  }

  async blockUser(userId: string, blockedUserId: string) {
    if (!this.blocksMap.has(userId)) {
      this.blocksMap.set(userId, new Set());
    }
    this.blocksMap.get(userId)!.add(blockedUserId);

    return { success: true, message: 'Usuario añadido a tu lista de bloqueados' };
  }

  isBlocked(userIdA: string, userIdB: string): boolean {
    const blocksA = this.blocksMap.get(userIdA);
    const blocksB = this.blocksMap.get(userIdB);

    return (blocksA?.has(userIdB) ?? false) || (blocksB?.has(userIdA) ?? false);
  }
}
