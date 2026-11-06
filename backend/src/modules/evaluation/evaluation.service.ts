import { Injectable } from '@nestjs/common';

export interface Question {
  id: string;
  language: string;
  cefrTarget: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  prompt: string;
  options: string[];
  correctAnswerIndex: number;
}

@Injectable()
export class EvaluationService {
  private questions: Question[] = [
    {
      id: 'q1',
      language: 'en',
      cefrTarget: 'A1',
      prompt: 'Select the correct option: "She ___ to school every day."',
      options: ['go', 'goes', 'going', 'gone'],
      correctAnswerIndex: 1,
    },
    {
      id: 'q2',
      language: 'en',
      cefrTarget: 'B1',
      prompt: 'If I ___ known you were coming, I would have prepared dinner.',
      options: ['have', 'had', 'would have', 'was'],
      correctAnswerIndex: 1,
    },
    {
      id: 'q3',
      language: 'en',
      cefrTarget: 'C1',
      prompt: 'Hardly ___ the building when the thunderstorm began.',
      options: ['had he left', 'he had left', 'did he leave', 'he left'],
      correctAnswerIndex: 0,
    },
  ];

  async getQuestions(language: string): Promise<Question[]> {
    return this.questions.filter((q) => q.language === language);
  }

  async submitEvaluation(userId: string, language: string, answers: Record<string, number>) {
    let score = 0;
    let total = 0;

    for (const [qId, selectedIndex] of Object.entries(answers)) {
      const question = this.questions.find((q) => q.id === qId);
      if (question) {
        total++;
        if (question.correctAnswerIndex === selectedIndex) {
          score++;
        }
      }
    }

    const percentage = total > 0 ? (score / total) * 100 : 0;
    let calculatedLevel = 'A1';

    if (percentage >= 85) calculatedLevel = 'C1';
    else if (percentage >= 70) calculatedLevel = 'B2';
    else if (percentage >= 50) calculatedLevel = 'B1';
    else if (percentage >= 35) calculatedLevel = 'A2';

    return {
      userId,
      language,
      score,
      totalQuestions: total,
      assignedCefrLevel: calculatedLevel,
    };
  }
}
