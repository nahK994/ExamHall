import json

exams_list = []
for exam_no in range(10, 46):
    if exam_no != 25:
        exam_dict = {
            "model": "question.questionbankmodel",
            "fields": {
                "pk": exam_no-9,
                "exam_name": f"{exam_no}th BCS",
                "category": "BCS"
            }
        }
    else:
        exam_dict = {
            "model": "question.questionbankmodel",
            "fields": {
                "pk": exam_no - 9,
                "exam_name": f"{exam_no}th BCS (Cancelled)",
                "category": "BCS"
            }
        }
    exams_list.append(exam_dict)

with open("question_banks.json", 'w', encoding='utf-8') as f:
    json.dump(exams_list, f, ensure_ascii=False)
