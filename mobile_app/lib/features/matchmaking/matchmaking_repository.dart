import 'package0:dio/dio.dart';

class MatchmakingRepository {
  final Dio _dio = Dio(BaseOptions(
    baseUrl: 'http://10.0.2.2:3000/matchmaking',
    connectTimeout: const Duration(seconds: 5),
  ));

  Future<Map<String, dynamic>> joinQueue({
    required String userId,
    required String nativeLanguage,
    required String targetLanguage,
    required String cefrLevel,
  }) async {
    final response = await _dio.post('/join', data: {
      'userId': userId,
      'nativeLanguage': nativeLanguage,
      'targetLanguage': targetLanguage,
      'cefrLevel': cefrLevel,
      'joinedAt': DateTime.now().millisecondsSinceEpoch,
    });
    return response.data;
  }

  Future<void> leaveQueue(String userId) async {
    await _dio.post('/leave', data: {'userId': userId});
  }
}
