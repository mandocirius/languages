import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private users = new Map<string, any>();

  constructor(private readonly jwtService: JwtService) {}

  async register(dto: RegisterDto) {
    const existing = Array.from(this.users.values()).find(u => u.email === dto.email);
    if (existing) {
      throw new ConflictException('El correo ya se encuentra registrado');
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(dto.password, saltRounds);

    const newUser = {
      id: crypto.randomUUID(),
      email: dto.email,
      passwordHash,
      displayName: dto.displayName,
      nativeLanguage: dto.nativeLanguage,
      createdAt: new Date().toISOString(),
    };

    this.users.set(newUser.id, newUser);

    const token = this.generateToken(newUser.id, newUser.email);
    return {
      message: 'Usuario registrado exitosamente',
      user: {
        id: newUser.id,
        email: newUser.email,
        displayName: newUser.displayName,
        nativeLanguage: newUser.nativeLanguage,
      },
      accessToken: token,
    };
  }

  async login(dto: LoginDto) {
    const user = Array.from(this.users.values()).find(u => u.email === dto.email);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const token = this.generateToken(user.id, user.email);
    return {
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        nativeLanguage: user.nativeLanguage,
      },
      accessToken: token,
    };
  }

  private generateToken(userId: string, email: string): string {
    const payload = { sub: userId, email };
    return this.jwtService.sign(payload);
  }
}
