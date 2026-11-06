import 'package:dio/dio.dart';

class ModerationRepository {
  final Dio _dio = Dio(BaseOptions(
    baseUrl: 'http://10.0.2.2:3000/moderation',
    connectTimeout: const Duration(seconds: 5),
  ));

  Future<void> reportUser({
    required String reporterId,
    required String reportedUserId,
    required String roomName,
    required String reason,
    String? details,
  }) async {
    await _dio.post('/report', data: {
      'reporterId': reporterId,
      'reportedUserId': reportedUserId,
      'roomName': roomName,
      'reason': reason,
      'details': details,
    });
  }

  Future<void> blockUser(String userId, String blockedUserId) async {
    await _dio.post('/block', data: {
      'userId': userId,
      'blockedUserId': blockedUserId,
    });
  }
}
