import { Injectable } from '@nestjs/common';
import { RtcService } from '../rtc/rtc.service';

export interface MatchTicket {
  userId: string;
  nativeLanguage: string;
  targetLanguage: string;
  cefrLevel: string;
  reputation: number;
  joinedAt: number;
}

@Injectable()
export class MatchmakingService {
  private queue: MatchTicket[] = [];

  constructor(private readonly rtcService: RtcService) {}

  async joinQueue(ticket: MatchTicket) {
    this.queue = this.queue.filter((t) => t.userId !== ticket.userId);
    this.queue.push(ticket);

    const match = this.findMatch(ticket);
    if (match) {
      this.queue = this.queue.filter(
        (t) => t.userId !== ticket.userId && t.userId !== match.userId,
      );

      const roomName = oom___;
      const tokenUser = await this.rtcService.generateRoomToken(roomName, ticket.userId);
      const tokenMatch = await this.rtcService.generateRoomToken(roomName, match.userId);

      return {
        matched: true,
        roomName,
        partnerId: match.userId,
        tokens: {
          [ticket.userId]: tokenUser,
          [match.userId]: tokenMatch,
        },
      };
    }

    return { matched: false, message: 'En cola de espera para emparejamiento' };
  }

  private findMatch(candidate: MatchTicket): MatchTicket | null {
    for (const ticket of this.queue) {
      if (ticket.userId === candidate.userId) continue;

      const isComplementaryExchange =
        candidate.nativeLanguage === ticket.targetLanguage &&
        candidate.targetLanguage === ticket.nativeLanguage;

      const isPeerPractice =
        candidate.targetLanguage === ticket.targetLanguage &&
        candidate.cefrLevel === ticket.cefrLevel;

      if (isComplementaryExchange || isPeerPractice) {
        return ticket;
      }
    }
    return null;
  }

  async leaveQueue(userId: string) {
    this.queue = this.queue.filter((t) => t.userId !== userId);
    return { success: true };
  }
}
