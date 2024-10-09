from celery import shared_task

from question.models import QuestionModel, SubjectModel

from .models import ExamParticipantModel, ResultModel

class UserDetailedResultInfo:
    number_of_correct_answer: int = 0
    number_of_incorrect_answer: int = 0
    marks: int = 0


def evaluate(exam_participant_info):
    exam = exam_participant_info.exam
    answer_sheet = exam_participant_info.answer_sheet
    user = exam_participant_info.user

    subject_ids = []
    for q in exam.questions.all():
        if q.chapter.subject.id not in subject_ids:
            subject_ids.append(q.chapter.subject.id)

    topic_wise_result = {}
    for subject_id in subject_ids:
        topic_wise_result[subject_id] = UserDetailedResultInfo()

    number_for_correct_answer = exam.number_for_correct_answer
    number_for_incorrect_answer = exam.number_for_incorrect_answer
    for userAnswer in answer_sheet:
        question = QuestionModel.objects.get(id=userAnswer['questionId'])
        subject_id = question.subject.id
        if question.answer == userAnswer['answer']:
            topic_wise_result[subject_id].number_of_correct_answer += 1
            topic_wise_result[subject_id].marks += number_for_correct_answer
        else:
            topic_wise_result[subject_id].number_of_incorrect_answer += 1
            topic_wise_result[subject_id].marks += number_for_incorrect_answer

    for subject_id in subject_ids:
        result_info = ResultModel(
            exam=exam,
            user=user,
            subject=SubjectModel.objects.get(id=subject_id),
            number_of_correct_answer=topic_wise_result[subject_id].number_of_correct_answer,
            number_of_incorrect_answer=topic_wise_result[subject_id].number_of_incorrect_answer,
            marks=topic_wise_result[subject_id].marks
        )
        result_info.save()


@shared_task
def evaluate_answersheet():
    # print("Cron job works")
    partipant_info = ExamParticipantModel.objects.filter(is_evaluated=True)
    for item in partipant_info:
        evaluate(item)
        item.update(is_evaluated=True)