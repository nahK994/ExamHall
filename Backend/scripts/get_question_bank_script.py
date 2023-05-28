import requests
from bs4 import BeautifulSoup
import json

for serial in range(10, 45):
    URL = f"https://uttoron.academy/question/{serial}th-bcs/"
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, features="html.parser")
    table = soup.findAll('div', attrs={'class': 'question-item'})

    question_list = []

    for i, row in enumerate(table):
        question = row.find('div', attrs={'class': 'question'}).p.text

        option_unordered_list = row.find('div', attrs={'class': 'options'}).find('ul')
        correct_answer_tag = option_unordered_list.find('li', attrs={'class': 'is_right'})
        correct_answer = correct_answer_tag.findAll('span')[1].text if (correct_answer_tag is not None) else ''
        options = [option.findAll('span')[1].text for option in option_unordered_list.findAll('li')]

        raw_explanation = row.find('div', attrs={'class': 'question-solve'}).p.get_text()
        explanation = ' '.join(raw_explanation.replace('\n', ' ').split())
        # print(i+1, question)
        # print(options)
        # print(correct_answer)
        # print(explanation)
        # print(len(options))
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
                "subject": None,
                "reference": serial-9,
            }
        }
        question_list.append(question_dict)

with open("bank.json", 'w', encoding='utf-8') as f:
    json.dump(question_list, f, ensure_ascii=False)
