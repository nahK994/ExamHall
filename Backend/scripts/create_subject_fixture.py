import json

subject_dict = {
    "বাংলা সাহিত্য": 0,
    "বাংলা ভাষা ও ব্যাকারণ": 1,
    "English literature": 2,
    "English language": 3,
    "পাটিগণিত": 4,
    "বীজগণিত": 5,
    "জ্যামিতি": 6,
    "সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা": 7,
    "কম্পিউটার ও তথ্যপ্রযুক্তি": 8,
    "বাংলাদেশ বিষয়াবলি": 9,
    "আন্তর্জাতিক বিষয়াবলি": 10,
    "নৈতিকতা ও মূল্যবোধ": 11,
    "মানসিক দক্ষতা": 12
}

subjects = []

for index, subject_name in enumerate(subject_dict):
    subject_item = {
        "model": "question.subjectmodel",
        "pk": subject_dict[subject_name],
        "fields": {
            "name": subject_name
        }
    }
    subjects.append(subject_item)


with open("../fixtures/subjects.json", 'w', encoding='utf-8') as f:
    json.dump(subjects, f, ensure_ascii=False)