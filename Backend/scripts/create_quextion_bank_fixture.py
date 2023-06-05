import json

exams_list = []
for exam_no in range(10, 47):
    exam_dict = {
        "model": "question.questionbankmodel",
        "fields": {
            "pk": exam_no - 9,
            "exam_name": "",
            "category": "BCS"
        }
    }

    if exam_no <= 24:
        exam_dict['fields']['exam_name'] = f"{exam_no}th BCS"
    elif exam_no == 25:
        exam_dict['fields']['exam_name'] = f"{exam_no-1}th BCS (Cancelled)"
    else:
        exam_dict['fields']['exam_name'] = f"{exam_no-1}th BCS"

    exams_list.append(exam_dict)

with open("question_banks.json", 'w', encoding='utf-8') as f:
    json.dump(exams_list, f, ensure_ascii=False)
