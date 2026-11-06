import 'package:dio/dio.dart';

class EvaluationRepository {
  final Dio _dio = Dio(BaseOptions(
    baseUrl: 'http://10.0.2.2:3000/evaluation',
    connectTimeout: const Duration(seconds: 5),
  ));

  Future<List<dynamic>> getQuestions(String language) async {
    final response = await _dio.get('/questions', queryParameters: {'language': language});
    return response.data;
  }

  Future<Map<String, dynamic>> submitAnswers({
    required String userId,
    required String language,
    required Map<String, int> answers,
  }) async {
    final response = await _dio.post('/submit', data: {
      'userId': userId,
      'language': language,
      'answers': answers,
    });
    return response.data;
  }
}
