import json

subject_dict = {
    "বাংলা সাহিত্য": 1,
    "বাংলা ভাষা ও ব্যাকারণ": 2,
    "English literature": 3,
    "English language": 4,
    "পাটিগণিত": 5,
    "বীজগণিত": 6,
    "জ্যামিতি": 7,
    "সেট, বিন্যাস ও সমাবেশ, পরিসংখ্যান, সম্ভাব্যতা": 8,
    "কম্পিউটার ও তথ্যপ্রযুক্তি": 9,
    "বাংলাদেশ বিষয়াবলি": 10,
    "আন্তর্জাতিক বিষয়াবলি": 11,
    "নৈতিকতা ও মূল্যবোধ": 12,
    "মানসিক দক্ষতা": 13
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


with open("subjects.json", 'w', encoding='utf-8') as f:
    json.dump(subjects, f, ensure_ascii=False)