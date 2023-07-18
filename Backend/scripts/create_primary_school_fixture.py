import requests
from bs4 import BeautifulSoup
import json


list_page_URL = "https://uttoron.academy/question-bank-primary/"
list_page_request = requests.get(list_page_URL)
list_page_soup = BeautifulSoup(list_page_request.content, features="html.parser")
list_div = list_page_soup.find('ul', attrs={'class': 'questionBank'}).findAll('li', attrs={'class': 'questionList'})


def get_content(html_element):
    if not len(html_element.findAll('img')):
        raw_explanation = html_element.p.text
        return ' '.join(raw_explanation.replace('\n', ' ').split())
    else:
        return html_element.findAll('img')[0]['src']


def get_option(html_element):
    if not len(html_element.findAll('img')):
        return html_element.findAll('span')[1].text
    else:
        return html_element.findAll('img')[0]['src']


exams_list = []
question_list = []
for index, div in enumerate(list_div):
    a = div.find('a')
    URL = a['href']
    exam_name = f"{a.find('span', attrs={'class': 'title font2'}).text} ({a.find('span', attrs={'class': 'meta'}).find('span', attrs={'class': 'group font2'}).text})"
    print(index+1, exam_name, URL)

    exam_dict = {
        "model": "question.referenceexam",
        "fields": {
            "id": index+38,
            "exam_name": exam_name,
            "category": "PRIMARY_SCHOOL"
        }
    }
    exams_list.append(exam_dict)

    r = requests.get(URL)
    soup = BeautifulSoup(r.content, features="html.parser")
    table = soup.findAll('div', attrs={'class': 'question-item'})

    for row in table:
        question = get_content(row.find('div', attrs={'class': 'question'}))

        option_unordered_list = row.find('div', attrs={'class': 'options'}).find('ul')
        correct_answer_tag = option_unordered_list.find('li', attrs={'class': 'is_right'})
        correct_answer = correct_answer_tag.findAll('span')[1].text if (correct_answer_tag is not None) else ''
        options = [get_option(option) for option in option_unordered_list.findAll('li')]

        explanation = get_content(row.find('div', attrs={'class': 'question-solve'}))

        question_dict = {
            "model": "question.questionmodel",
            "fields": {
                "question_text": question,
                "option1": options[0],
                "option2": options[1],
                "option3": options[2],
                "option4": options[3],
                "option5": options[4] if len(options) > 5 else None,
                "option6": options[5] if len(options) > 6 else None,
                "answer": correct_answer,
                "explaination": explanation,
                "chapter": None,
                "reference": index+38,
            }
        }
        question_list.append(question_dict)


with open("../fixtures/primary_school_question_banks.json", 'w', encoding='utf-8') as f:
    json.dump(exams_list, f, ensure_ascii=False)

with open("../fixtures/primary_school_questions.json", 'w', encoding='utf-8') as f:
    json.dump(question_list, f, ensure_ascii=False)
