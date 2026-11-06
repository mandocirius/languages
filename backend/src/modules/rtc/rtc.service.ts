import { Injectable } from '@nestjs/common';
import { AccessToken } from 'livekit-server-sdk';

@Injectable()
export class RtcService {
  private apiKey = 'devkey';
  private apiSecret = 'secret_dev_key_123456789';

  async generateRoomToken(roomName: string, participantIdentity: string): Promise<string> {
    const at = new AccessToken(this.apiKey, this.apiSecret, {
      identity: participantIdentity,
      ttl: '1h',
    });
    
    at.addGrant({
      roomJoin: true,
      room: roomName,
      canPublish: true,
      canSubscribe: true,
    });

    return at.toJwt();
  }
}
