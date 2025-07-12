export enum QAType {

  PARENT = 'PARENT',
  ETUDIANT = 'ETUDIANT'
  
}

export interface QuestionReponse {
  id: string;
  title: string;
  description: string;
  type: QAType;
  createdAt: Date;
}

export interface CreateQuestionReponseData {
  title: string;
  description: string;
  type: QAType;
}

export interface UpdateQuestionReponseData {
  title?: string;
  description?: string;
  type?: QAType;
} 